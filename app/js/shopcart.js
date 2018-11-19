require(["config"],function(){
	require(["jquery", "header", "template","footer","jquerycookie"], function($,header,template,footer,jquerycookie){
		  new Promise(function(resolve,reject){
		  	$("header").load("/html/component/header.html", function(){
		 		header.init();
		 		header.list();
		 		header.welcome();
		 		resolve();
		 	});
		  	$("footer").load("/html/component/footer.html", function(){
		  	});
		 }).then(function(){
		 	var products = $.cookie("cart");
		 	//判断购物车中是否有数据
		 	//购物车不为空的时候，渲染页面
		 	var html = "";
		 	
		 })
	})
})