/* contract/DataStorage.sol */
/* gen from browser-solidity */

// 載入網頁之後
$(function () {

	// 連線，連接到本地 enode
	var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

	// 假如要使用已部署過的 contract，則參考已註解部分
	/* var datastorage = web3.eth.contract([{
		"constant": true,
		"inputs": [],
		"name": "getData",
		"outputs": [{
			"name": "",
			"type": "string"
		}],
		"payable": false,
		"type": "function"
	}, {
		"constant": false,
		"inputs": [{
			"name": "input",
			"type": "string"
		}],
		"name": "setData",
		"outputs": [],
		"payable": false,
		"type": "function"
	}, {
		"constant": true,
		"inputs": [],
		"name": "data",
		"outputs": [{
			"name": "",
			"type": "string"
		}],
		"payable": false,
		"type": "function"
	}, {
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [{
			"name": "",
			"type": "address"
		}],
		"payable": false,
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
			"name": "input",
			"type": "string"
		}, {
			"indexed": false,
			"name": "timestamp",
			"type": "uint256"
		}],
		"name": "dataSet",
		"type": "event"
	}])
	.at('合約位址') */

	// 新部署 DataStorage contract，datastorageConract 為母體，而 datastorage 為個體
	var datastorageContract = web3.eth.contract([{
		"constant": true,
		"inputs": [],
		"name": "getData",
		"outputs": [{
			"name": "",
			"type": "string"
		}],
		"payable": false,
		"type": "function"
	}, {
		"constant": false,
		"inputs": [{
			"name": "input",
			"type": "string"
		}],
		"name": "setData",
		"outputs": [],
		"payable": false,
		"type": "function"
	}, {
		"constant": true,
		"inputs": [],
		"name": "data",
		"outputs": [{
			"name": "",
			"type": "string"
		}],
		"payable": false,
		"type": "function"
	}, {
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [{
			"name": "",
			"type": "address"
		}],
		"payable": false,
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
			"name": "input",
			"type": "string"
		}, {
			"indexed": false,
			"name": "timestamp",
			"type": "uint256"
		}],
		"name": "dataSet",
		"type": "event"
	}])

	var datastorage = datastorageContract.new({
		from: web3.eth.accounts[0],
		data: '0x606060405234610000575b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690836c010000000000000000000000009081020402179055505b5b6104b2806100576000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480633bc5de301461005957806347064d6a146100d457806373d4a13a1461012b5780638da5cb5b146101a6575b610000565b34610000576100666101df565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156100c65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3461000057610129600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610294565b005b34610000576101386103ee565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156101985780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34610000576101b361048c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b602060405190810160405280600081526020015060018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102895780601f1061025e57610100808354040283529160200191610289565b820191906000526020600020905b81548152906001019060200180831161026c57829003601f168201915b505050505090505b90565b8060019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102e057805160ff191683800117855561030e565b8280016001018555821561030e579182015b8281111561030d5782518255916020019190600101906102f2565b5b50905061033391905b8082111561032f576000816000905550600101610317565b5090565b50507f28a3c6fdee0f0f4c94386da2eea23b2b25fae41d75685e0257faf89f8c48b0a9338242604051808473ffffffffffffffffffffffffffffffffffffffff168152602001806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156103db5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a15b50565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104845780601f1061045957610100808354040283529160200191610484565b820191906000526020600020905b81548152906001019060200180831161046757829003601f168201915b505050505081565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156',
		gas: '4700000'
	}, function (e, contract) {
		console.log(e, contract)

		// 這裡才是 contract 被部署完成時候才進入的
		if (typeof contract.address !== 'undefined') {

			console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash)

			// 當送出按鈕被點的時候
			$('#dataButton').on('click', function () {
				var dataValue = $('#dataInput').val()

				// 使用 setData 並帶入參數
				datastorage.setData(dataValue, {
					from: web3.eth.accounts[0]
				})
			})

			// 當 dataSet 事件發射出來的時候
			datastorage.dataSet({}, function (err, event) {
				// 更新 Data: 的數值
				$('#dataPrint').text('Data: ' + event.args.input)
			})
		}
	})
})
