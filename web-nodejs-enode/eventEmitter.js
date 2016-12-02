// 用於事件處理
// 一種事件通道
var EventEmitter = require('events')
var eventEmitter = new EventEmitter()

eventEmitter.setMaxListeners(0)

module.exports = eventEmitter
