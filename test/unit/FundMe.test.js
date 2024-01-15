const { assert } = require("chai")
const { deployments, ethers, getNamedAccounts } = require("hardhat")

describe("FundMe", async function () {
    let fundMe
    let deployer
    let MockV3Aggregator
    beforeEach(async function () {
        deployer = await getNamedAccounts().deployer
        await deployments.fixture(["all"])
        fundMe = await ethers.getContractAt("FundMe", deployer)
        MockV3Aggregator = await ethers.getContractAt(
            "MockV3Aggregator",
            deployer,
        )
    })
    describe("constructor", async function () {
        it("Sets the aggregator addresses correctly", async function () {
            const response = await fundMe.priceFeed()
            assert.equal(response, MockV3Aggregator.address)
        })
    })
})
