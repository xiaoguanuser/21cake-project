"use strict";require(["config"],function(){require(["jquery","header","template","footer"],function(s,e,d,t){new Promise(function(t,i){s("header").load("/html/component/header.html",function(){e.init(),e.list(),e.welcome(),t()}),s("footer").load("/html/component/footer.html",function(){})}).then(function(){s(".tit li").click(function(){s(".detail-options-list").eq(s(this).index()).show().siblings().hide()})}).then(function(){var t=location.search.slice(1).split("="),i={};i[t[0]]=t[1],s.ajax({method:"post",dataType:"json",data:i,url:"http://localhost/wampserver/api/v1/detail.php",success:function(o){var t=d("pro-detail",{products:o.product});s(".detail-box").html(t),s(".right-list-banner li").click(function(){s(".left-img-box img").eq(s(this).index()).show(500).siblings().hide(500)}),s(".tit li").click(function(){s(".detail-img-box img").eq(s(this).index()).show().siblings().hide()});var n=o.product.id,l=s("#smallimg").attr("src"),c=s("#title").html(),r=s(".detail-price").html(),a=[],i=s.cookie("cart");i&&(a=JSON.parse(i)),s(".detail-btn-addcard").click(function(){for(var t={id:n,img:l,title:c,price:r,amount:1},i=0;i<a.length;i++){if(a[i].id===o.product.id){a[i].amount++;break}a.push(o.products)}i===a.length&&a.push(t);var e=JSON.stringify(a);s.cookie("cart",e,{expires:10,path:"/"}),alert("添加成功，请前往购物车查看哦！")})}})})})});