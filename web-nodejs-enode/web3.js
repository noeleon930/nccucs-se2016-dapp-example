// 初始一個 web3 個體，連線到本機 8545
var Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

module.exports = web3
