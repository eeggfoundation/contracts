// @see: https://docs.openzeppelin.com/upgrades-plugins/1.x/hardhat-upgrades
const { ethers, upgrades } = require("hardhat")

async function main() {
    const [deployer] = await ethers.getSigners()

    console.log('Deploying contracts with account:', deployer.address)
    console.log('Account balance:', (await deployer.getBalance()).toString())

    const tokenFactory = await ethers.getContractFactory('EeggToken')
    const token = await upgrades.deployProxy(tokenFactory)
    await token.deployed()
    console.log('EeggToken deployed to:', token.address)

    const governorFactory = await ethers.getContractFactory('EeggGovernor')
    const governor = await upgrades.deployProxy(governorFactory, [token.address])
    await governor.deployed()
    console.log('EeggGovernor deployed to:', governor.address)
}

main()
    .then(() => {
        process.exit(0)
    })
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })

