import { HardhatUserConfig } from 'hardhat/config'
import { NetworksUserConfig } from 'hardhat/types/config'
import '@nomicfoundation/hardhat-toolbox'
import 'hardhat-gas-reporter'

require('dotenv').config()

const configurableNetworks = ['goerli', 'mainnet']

var networks:NetworksUserConfig = {}

configurableNetworks.forEach((net) => {
    const url = `${net.toUpperCase()}_API_URL`
    const key = `${net.toUpperCase()}_PRIVATE_KEY`

    console.log(url, key)

    if (process.env[url] && process.env[key]) {
        networks[net] = {
            url: url,
            accounts: [`0x${process.env[key]}`]
        }
    }
})

const config: HardhatUserConfig = {
    solidity: '0.8.9',
    gasReporter: {
        enabled: (process.env.REPORT_GAS) ? true : false,
    },
    networks: networks,
}

export default config
