# DApp 架構

1. web <-[web3.js]-> enode <-[p2p]-> ethereum-network
2. web <-[http-request]-> nodejs (express) <-[web3.js]-> enode <-[p2p]-> ethereum-network

(web-enode 資料夾為實現 1.)
(web-nodejs-enode 資料夾為實現 2.)


# DApp 開發流程 (簡單版)

1. 先確立在專案中，哪些資料要存放在智能合約中，並實作之 (以 browser-solidity)
2. 啟動 geth 並連接到私有鏈
3. geth attach 中 personal.unlockAccount(eth.accounts[0], '密碼', 解鎖幾秒) ，因為在正式的鏈中，沒解鎖無法發起交易
4. 以 browser-solidity 提供之 web3 deploy code 貼於 geth attach 中執行
5. 記住合約的位址
6. web3.js 在 web 或 nodejs (express) 中初始化的時候，記得換上部署過的合約位址，而假如商業邏輯上需要動態部署合約的話，記得找地方記錄起來
7. 實作網頁介面與 web3.js 包裝好的合約方法連接，或者假如是在 express 中的話，於 handler 中實作 (請見程式碼)


# 此範例專案使用方式

(於專案根目錄)
0. 執行 geth 連接到私有鏈，記得 personal.unlockAccount(eth.accounts[0], '密碼', 解鎖幾秒)
1. npm install (一次就好)
2. bower install (一次就好，假如沒成功的話，請記得 npm install -g bower 先)
3. npm install -g lite-server (一次就好)
4. lite-server
5. 瀏覽器頁面跳出來之後，將網址目錄切換到 web-enode/index.html 或 web-nodejs-enode/index.html
6. (web-nodejs-enode 的 後端進入點為 bank-backend.js)
7. (contract 們在 contract 資料夾裡)
8. (localhost:3030/accounts 可以看到你的 geth accounts 有哪些)


# 注意事項

1. 要檢查有無成功連到私有鏈，請記得 geth attach 之後輸入 admin.peers，檢查是否有資料，假如是 [] 表示沒有成功，請參考 moodle 公告調整之
