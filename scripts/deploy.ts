import { ethers } from "hardhat"

async function main() {
    const [deployer] = await ethers.getSigners()

    console.log('Deploying contracts with account:', deployer.address)
    console.log('Account balance:', (await deployer.getBalance()).toString())

    const eeggTokenFactory = await ethers.getContractFactory('EeggToken')
    const eeggToken = await eeggTokenFactory.deploy()
    console.log('Eegg Token address:', eeggToken.address)
}

main()
    .then(() => {
        process.exit(0)
    })
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })

