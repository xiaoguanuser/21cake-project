"use strict";require(["config"],function(){require(["jquery","header","template","lunbo","footer"],function(o,n,i,t,e){new Promise(function(t,e){o("header").load("/html/component/header.html",function(){t()}),o("footer").load("/html/component/footer.html",function(){n.list()})}).then(function(){n.init(),n.welcome(),t.init()}).then(function(){o.ajax({method:"post",url:"http://localhost/wampserver/api/v1/index.php",dataType:"json",success:function(t){var e=i("pro-template",{products:t.product});o("#productList").html(e)}})})})});