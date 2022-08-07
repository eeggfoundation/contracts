import { expect } from 'chai'
import { ethers } from 'hardhat'
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'

describe('abstracts.Pauseable', function() {
    async function deployContractFixture() {
        const contractFactory = await ethers.getContractFactory('PauseableMock')
        const [owner, addr1, addr2] = await ethers.getSigners()

        const hardhatContract = await contractFactory.deploy()
        await hardhatContract.deployed()

        return { contractFactory, hardhatContract, owner, addr1, addr2 }
    }

    it('unpaused when deployed', async function() {
        const { hardhatContract } = await loadFixture(deployContractFixture)

        expect(await hardhatContract.isPaused()).to.equal(false)
    })

    it('pauses when unpaused', async function() {
        const { hardhatContract } = await loadFixture(deployContractFixture)

        await hardhatContract.pauseInternal()
        expect(await hardhatContract.isPaused()).to.equal(true)
    })

    it('unpauses when paused', async function() {
        const { hardhatContract } = await loadFixture(deployContractFixture)

        await hardhatContract.pauseInternal()
        await hardhatContract.unpauseInternal()
        expect(await hardhatContract.isPaused()).to.equal(false)
    })

    it('rejects _pause when paused', async function() {
        const { hardhatContract } = await loadFixture(deployContractFixture)

        await hardhatContract.pauseInternal()
        await expect(hardhatContract.pauseInternal()).to.be.reverted;
    })

    it('rejects _unpause when not paused', async function() {
        const { hardhatContract } = await loadFixture(deployContractFixture)

        await expect(hardhatContract.unpauseInternal()).to.be.reverted
    })

    describe('Modifiers', function() {
        describe('whenPaused', function() {
            it('rejects when not paused', async function() {
                const { hardhatContract } = await loadFixture(deployContractFixture)

                await expect(hardhatContract.testWhenPausedModifier()).to.be.reverted
            })

            it('accepts when paused', async function() {
                const { hardhatContract } = await loadFixture(deployContractFixture)

                await hardhatContract.pauseInternal()
                await expect(hardhatContract.testWhenPausedModifier()).not.be.reverted
            })
        })

        describe('whenNotPaused', function() {
            it('rejects when paused', async function() {
                const { hardhatContract } = await loadFixture(deployContractFixture)

                await hardhatContract.pauseInternal()
                await expect(hardhatContract.testWhenNotPausedModifier()).to.be.reverted
            })

            it('accepts when not paused', async function() {
                const { hardhatContract } = await loadFixture(deployContractFixture)

                await expect(hardhatContract.testWhenNotPausedModifier()).not.be.reverted
            })
        })
    })
})
