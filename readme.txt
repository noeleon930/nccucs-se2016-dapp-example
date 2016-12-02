# DApp 架構

1. web <-[web3.js]-> enode <-[p2p]-> ethereum-network
2. web <-[http-request]-> nodejs (express) <-[web3.js]-> enode <-[p2p]-> ethereum-network

(web-enode 資料夾為實現 1.)
(web-nodejs-enode 資料夾為實現 2.)


# DApp 開發流程 (簡單版)

1. 先確立在專案中，哪些資料要存放在智能合約中，並實作之 (以 browser-solidity)
2. 實際在私有鏈上部署時，先啟動 geth 連至私有鏈，並以 browser-solidity 提供之 web3 deploy code 貼於 geth attach 中執行，記得要先在 geth attach 中 personal.unlockAccount(eth.accounts[0], '密碼', 解鎖幾秒) ，因為在比較真實的鏈中，沒解鎖無法發起交易
3. 記住合約的位址
4. web3.js 在 web 或 nodejs (express) 中初始化的時候，記得換上部署過的合約位址，而假如商業邏輯上需要動態部署合約的話，記得找地方存起來
5. 實作網頁介面與 web3.js 包裝好的合約方法連接，或者假如是在 express 中的話，於 handler 中實作 (請見程式碼)


# 此範例專案使用方式

(於專案根目錄)
0. 執行 geth 連接到私有鏈
1. npm install
2. bower install
3. npm install -g lite-server
4. lite-server
5. 瀏覽器頁面跳出來之後，將網址目錄切換到 web-enode/index.html 或 web-nodejs-enode/index.html


# 注意事項

1. 要檢查有無成功連到私有鏈，請記得 geth attach 之後輸入 admin.peers，檢查是否有資料，假如是 [] 表示沒有成功，請參考 moodle 公告調整之