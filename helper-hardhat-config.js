const networkConfig = {
    4: {
        name: "rinkeby",
        ethUsdPriceFeedAddress: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
    },
    137: {
        name: "polygon",
        ethUsdPriceFeedAddress: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
    },
    31337: {
        name: "hardhat",
    },
    11155111: {
        name: "sepolia",
        ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
    },
}

const developmentChains = ["hardhat"]
const DECIMALS = 8
const INIT_ANSWER = 200000000
module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INIT_ANSWER,
}
