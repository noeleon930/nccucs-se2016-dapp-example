// import 同目錄的 web3.js
var web3 = require('./web3.js')

// import 同目錄的 eventEmitter.js
var eventEmitter = require('./eventEmitter.js')

/* 註解部分為已經部署好的合約 */
// var bankAbi = []
// var bankContractAddress = ''
// var bank = web3.eth.contract(bankAbi).at(bankContractAddress)
// bank.DepositEvent({}, function (err, event) {
// 	eventEmitter.emit('DepositEvent:' + event.args.from, event.args)
// })
// bank.WithdrawEvent({}, function (err, event) {
// 	eventEmitter.emit('WithdrawEvent:' + event.args.from, event.args)
// })
// bank.TransferEvent({}, function (err, event) {
// 	eventEmitter.emit('TransferEvent:' + event.args.from, event.args)
// })

// gen from browser-solidity
var bankContract = web3.eth.contract([{
	"constant": true,
	"inputs": [],
	"name": "checkEtherBalance",
	"outputs": [{
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "etherValue",
		"type": "uint256"
	}],
	"name": "withdraw",
	"outputs": [],
	"payable": false,
	"type": "function"
}, {
	"constant": true,
	"inputs": [],
	"name": "checkBankBalance",
	"outputs": [{
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"type": "function"
}, {
	"constant": false,
	"inputs": [{
		"name": "to",
		"type": "address"
	}, {
		"name": "etherValue",
		"type": "uint256"
	}],
	"name": "transfer",
	"outputs": [],
	"payable": false,
	"type": "function"
}, {
	"constant": false,
	"inputs": [],
	"name": "deposit",
	"outputs": [],
	"payable": true,
	"type": "function"
}, {
	"inputs": [],
	"payable": false,
	"type": "constructor"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"name": "from",
		"type": "address"
	}, {
		"indexed": false,
		"name": "value",
		"type": "uint256"
	}, {
		"indexed": false,
		"name": "timestamp",
		"type": "uint256"
	}],
	"name": "DepositEvent",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"name": "from",
		"type": "address"
	}, {
		"indexed": false,
		"name": "value",
		"type": "uint256"
	}, {
		"indexed": false,
		"name": "timestamp",
		"type": "uint256"
	}],
	"name": "WithdrawEvent",
	"type": "event"
}, {
	"anonymous": false,
	"inputs": [{
		"indexed": false,
		"name": "from",
		"type": "address"
	}, {
		"indexed": false,
		"name": "to",
		"type": "address"
	}, {
		"indexed": false,
		"name": "value",
		"type": "uint256"
	}, {
		"indexed": false,
		"name": "timestamp",
		"type": "uint256"
	}],
	"name": "TransferEvent",
	"type": "event"
}])
var bank = bankContract.new({
	from: web3.eth.accounts[0],
	data: '0x606060405234610000575b60008054600160a060020a0319166c01000000000000000000000000338102041790555b5b6102b58061003d6000396000f3606060405260e060020a600035046316cba9d3811461004a5780632e1a7d4d146100695780636a4b3eca1461007b578063a9059cbb1461009a578063d0e30db0146100af575b610000565b34610000576100576100b9565b60408051918252519081900360200190f35b34610000576100796004356100c8565b005b346100005761005761018c565b60408051918252519081900360200190f35b34610000576100796004356024356101a9565b005b610079610254565b005b600160a060020a033316315b90565b600160a060020a033316600090815260016020526040902054670de0b6b3a7640000820290819010156100fa57610000565b604051600160a060020a0333169082156108fc029083906000818181858888f19350505050151561012a57610000565b600160a060020a03331660008181526001602090815260409182902080548590039055815192835282018490524282820152517f5bb95829671915ece371da722f91d5371159095dcabf2f75cd6c53facb7e1bab9181900360600190a15b5050565b600160a060020a0333166000908152600160205260409020545b90565b600160a060020a033316600090815260016020526040902054670de0b6b3a7640000820290819010156101db57610000565b600160a060020a0333811660008181526001602090815260408083208054879003905593871680835291849020805486019055835192835282015280820184905242606082015290517fbabc8cd3bd6701ee99131f374fd2ab4ea66f48dc4e4182ed78fecb0502e44dd69181900360800190a15b505050565b600160a060020a0333166000818152600160209081526040918290208054349081019091558251938452908301524282820152517fad40ae5dc69974ba932d08b0a608e89109412d41d04850f5196f144875ae26609181900360600190a15b56',
	gas: '4700000'
}, function (e, contract) {
	// console.log(e, contract)
	if (typeof contract.address !== 'undefined') {
		console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash)

		// 註冊各個事件
		bank.DepositEvent({}, function (err, event) {
			eventEmitter.emit('DepositEvent:' + event.args.from, event.args)
		})

		bank.WithdrawEvent({}, function (err, event) {
			eventEmitter.emit('WithdrawEvent:' + event.args.from, event.args)
		})

		bank.TransferEvent({}, function (err, event) {
			eventEmitter.emit('TransferEvent:' + event.args.from, event.args)
		})
	}
})

module.exports = bank
