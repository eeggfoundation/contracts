# Eegg Foundation Contracts

<p>
    <picture>
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/eeggfoundation/.github/main/content/eegg-logo-light.svg">
        <img alt="Eegg" src="https://raw.githubusercontent.com/eeggfoundation/.github/main/content/eegg-logo-dark.svg" width="auto" height="60">
    </picture>
</p>

## EEGG token

The EEGG token is an [EIP20](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md) token with additional `AccessControl` and `Mint/Burn` functionality.

The total supply of the token is 100_000_000, and each token is divisible up to 18 decimal places.

To prevent accidental burns, the token does not allow transfers to the contract itself and to `0x00`.

### Details

- Deployments:
  - [EeggToken 1.0](./contracts/EeggToken.sol): [0xfBe4E92c664cd094DEa9Dcf60287676f8938eb10](https://etherscan.io/token/0xfBe4E92c664cd094DEa9Dcf60287676f8938eb10)
  - [EeggGovernor 1.0](./contracts/EeggGovernor.sol): [0x8D007EcC10FC1a6cEEd7f851Ca88B421889e3957](https://etherscan.io/token/0x8D007EcC10FC1a6cEEd7f851Ca88B421889e3957)
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

### Build merged Solidity contracts

To merge all imports and produce standalone `.sol` files, run:

```sh
npm run merge-contracts
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
npx hardhat run scripts/deploy.ts --network goerli
```

The script will output the **Contract Address**. Copy and paste this address to **save it** somewhere, **you don't want to lose it**.

You can check the Contract Address on [Goerli etherscan](https://goerli.etherscan.io/) to see that it has been deployed successfully.
