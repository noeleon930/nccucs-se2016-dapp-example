var whoami
var whoamiButton
var deposit
var depositButton
var withdraw
var withdrawButton
var transferTo
var transferEtherValue
var transferButton
var ethBalance
var bankBalance
var logger

// 用於增加紀錄於活動紀錄
function log(input) {
	if (typeof input === 'object') {
		input = JSON.stringify(input, null, 2)
	}
	logger.html(input + '\n' + logger.html())
}

// AJAX GET 方法
function GET(url, callback, failback) {
	return jQuery
		.ajax(url, {
			method: 'GET',
			cache: false,
			crossDomain: false
		})
		.done(callback)
		.fail(failback)
}

// AJAX POST 方法
function POST(url, data, callback, failback) {
	return jQuery
		.ajax(url, {
			method: 'POST',
			cache: false,
			data: data,
			crossDomain: false
		})
		.done(callback)
		.fail(failback)
}

// 載入網頁之後
$(function () {
	// 以 jQuery 抓取元素們
	whoami = $('#whoami')
	whoamiButton = $('#whoamiButton')
	deposit = $('#deposit')
	depositButton = $('#depositButton')
	withdraw = $('#withdraw')
	withdrawButton = $('#withdrawButton')
	transferTo = $('#transferTo')
	transferEtherValue = $('#transferEtherValue')
	transferButton = $('#transferButton')
	logger = $('#logger')
	ethBalance = $('#ethBalance')
	bankBalance = $('#bankBalance')

	// 當按下登入按鍵時
	whoamiButton.on('click', function () {
		// GET account?a=address
		GET('./account?a=' + whoami.val(),
			function (res) {
				// 更新活動紀錄
				log(res)
				log('更新帳戶資料')

				// 更新介面
				ethBalance.text('以太帳戶餘額 (wei): ' + res.ethBalance)
				bankBalance.text('銀行合約餘額 (wei): ' + res.bankBalance)
			},
			function (res) {
				log(res.responseText
					.replace(/\<br\>/g, '\n')
					.replace(/\&nbsp;/g, ' '))
				log('請檢查帳戶及銀行合約餘額')
			})
	})

	// 當按下存款按鍵時
	depositButton.on('click', function () {
		// POST deposit?a=address&e=etherValue
		POST('./deposit?a=' + whoami.val() + '&e=' + deposit.val(), {},
			function (res) {
				log(res)
				log('存款成功')

				// 觸發更新帳戶資料
				whoamiButton.trigger('click')
			},
			function (res) {
				log(res.responseText
					.replace(/\<br\>/g, '\n')
					.replace(/\&nbsp;/g, ' '))
				log('請檢查帳戶及銀行合約餘額')
			})
	})

	// 當按下提款按鍵時
	withdrawButton.on('click', function () {
		// GET withdraw?a=address&e=etherValue
		GET('./withdraw?a=' + whoami.val() + '&e=' + withdraw.val(),
			function (res) {
				// 更新活動紀錄
				log(res)
				log('提款成功')

				// 觸發更新帳戶資料
				whoamiButton.trigger('click')
			},
			function (res) {
				log(res.responseText
					.replace(/\<br\>/g, '\n')
					.replace(/\&nbsp;/g, ' '))
				log('請檢查帳戶及銀行合約餘額')
			})
	})

	// 當按下轉帳按鍵時
	transferButton.on('click', function () {
		// POST transfer?f=address&t=address&e=etherValue
		POST('./transfer?f=' + whoami.val() + '&t=' + transferTo.val() + '&e=' + transferEtherValue.val(), {},
			function (res) {
				// 更新活動紀錄
				log(res)
				log('轉帳成功')

				// 觸發更新帳戶資料
				whoamiButton.trigger('click')
			},
			function (res) {
				log(res.responseText
					.replace(/\<br\>/g, '\n')
					.replace(/\&nbsp;/g, ' '))
				log('請檢查帳戶及銀行合約餘額')
			})
	})
})
