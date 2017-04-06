/**
 *  日志记录，后期需要加入log日志中
 *  @param: type info \ err \ warming; content 输入或者记录内容
 */
exports.cons = function api_console(type, content){
    console.log('[vendor-api] '+ new Date().toString() +'('+type+') '+content)
}
