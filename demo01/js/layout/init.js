define(function(require, exports, module) {
    // var $ = require( 'jQuery' );     // 全局
    var $ =  require('../plugin');
    
    
    // 调用插件 
    console.log($('.box').testFun('插件1'));
    
    console.log($('.box').testFun('插件2'));
});