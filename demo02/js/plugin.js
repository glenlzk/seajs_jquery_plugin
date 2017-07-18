define(function (require, exports, module) {

    var $  = jQuery = require('jQuery');
    
    // 插件1：
    ;(function ($) {
    	$.fn.testFun = function (context) {
    		// 插件内容
    		alert(context);
    	};
    })(jQuery);
    
    // 插件2：
    ;(function ($) {
    	$.fn.testFun2 = function (context) {
    		// 插件内容
    		alert(context);
    	};
    })(jQuery);

	return jQuery;
});
