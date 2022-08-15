import { HardhatUserConfig } from 'hardhat/config'
import { NetworksUserConfig } from 'hardhat/types/config'
import '@nomicfoundation/hardhat-toolbox'
import 'hardhat-gas-reporter'

require('dotenv').config()
require('@openzeppelin/hardhat-upgrades')

const configurableNetworks = ['goerli', 'ethereum']

var networks:NetworksUserConfig = {}

configurableNetworks.forEach((net) => {
    const url = `${net.toUpperCase()}_API_URL`
    const key = `${net.toUpperCase()}_PRIVATE_KEY`

    if (process.env[url] && process.env[key]) {
        networks[net] = {
            url: process.env[url],
            accounts: [`0x${process.env[key]}`]
        }
    }
})

const config: HardhatUserConfig = {
    solidity: {
        version: '0.8.9',
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    gasReporter: {
        enabled: (process.env.REPORT_GAS) ? true : false,
    },
    networks: networks,
}

export default config
