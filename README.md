<p>
    <picture>
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/eeggfoundation/.github/main/content/eegg-logo-light.svg">
        <img alt="Eegg" src="https://raw.githubusercontent.com/eeggfoundation/.github/main/content/eegg-logo-dark.svg" width="auto" height="60">
    </picture>
</p>

# Eegg Foundation Contracts

## EEGG token

The EEGG token is an [EIP20](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md) token with additional `AccessControl` and `Mint/Burn` functionality.

The total supply of the token is 1_000_000, and each token is divisible up to 18 decimal places.

To prevent accidental burns, the token does not allow transfers to the contract itself and to `0x00`.

### Details

- Deployments:
  - Ethereum Mainnet [EeggToken 1.0](./contracts/EeggToken.sol): [0x??](https://etherscan.io/address/0x??)
  - Goerli Testnet [EeggToken 1.0](./contracts/EeggToken.sol): [0xa56fdf24548c1e2122b7117316130f84aa00A990](https://goerli.etherscan.io/token/0xa56fdf24548c1e2122b7117316130f84aa00A990)
- Decimals: 18
- Name: Eegg Token
- Symbol: EEGG

## Development

```sh
git clone git@github.com:eegggallery/contracts.git
cd contracts
npm install
```

The repository uses [**HardHat**](https://hardhat.org/) development environment for Ethereum software.
All necessary commands with their config are prepared and can run directy from `npm`, like:

### Test

```sh
npm run test
```

### Report Gas

```sh
npm run gas
```

### Compile

```sh
npm run build
```

### Deploy to localhost

To test you can deploy the contract to the `localhost` network following these steps:

1. Start a local node:

    ```sh
    npm run node
    ```

2. In another terminal deploy the contract to the `localhost` network:

    ```sh
    npx hardhat run scripts/deploy.ts --network localhost
    ```

## Deployment

The deployment `url` and `private key` are securely stored in an environment file `.env`.
The repository includes an `.env.example` example.

The HardHat `hardhat.config.ts` resolves the `.env` automatically. So, there is nothing more to do, just edit your `.env`.

Supported networks: [[**Goerli Testnet**](https://goerli.net/), [**Ethereum Mainnet**](https://ethereum.org/en/developers/docs/networks/#ethereum-mainnet)]

> You can learn more about other testnets and find links to their faucets on the [ethereum.org](https://ethereum.org/en/developers/docs/networks/#ethereum-testnets) site.

For `Goerli Testnet`, for example, your `.env` file should look like this:

```sh
GOERLI_API_URL=https://eth-goerli.g.alchemy.com/v2/<your api key>
GOERLI_PRIVATE_KEY=<your private key>
```

> We're using [Alchemy](https://alchemy.com), but pointing url to any Ethereum node or gateway would work. Go grab your ALCHEMY_API_KEY and come back.

Compile the Contract using:

```sh
npm run build
```

Deploy the Contract using:

```sh
npx hardhat run scripts/deploy.js --network goerli
```

The script will output the **Contract Address**. Copy and paste this address to **save it** somewhere, **you don't want to lose it**.

You can check the Contract Address on [Goerli etherscan](https://goerli.etherscan.io/) to see that it has been deployed successfully.

## Contracts interaction

To interact with the contract, use the [`operator-ui`](https://github.com/eeggfoundation/operator-ui) repository.
