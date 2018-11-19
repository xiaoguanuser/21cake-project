require(["config"], function(){
	require(["jquery", "header","footer","jquerycookie"], function($,header,footer,jquerycookie){
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html", function(){
				header.init();
				header.list();
				header.welcome();
			});
			$("footer").load("/html/component/footer.html", function(){
				resolve();
			});
		 }).then(function(){
		 	var products = $.cookie("cart");
		 	var html = "";
		 	//console.log(products);
		 	//判断购物车中是否有数据
		 	if(products){
		 		products = JSON.parse(products);
		 		$(".cart-area").show();
		 	}else{
		 		products = [];
		 		$(".cart-area").hide();
		 		html += `
					<tr class="empty">
						<td>您的购物车里还没有商品，去<a href="http://localhost:1000/html/detail.html?id=2">选购商品</a></td>
					</tr>
		 		`;
		 		console.log(html);
		 		$("#cart_body").html(html);
		 		console.log(1111);
		 	}
		 	//购物车不为空的时候。渲染所有商品
		 	console.log(products);
		 	products.forEach(function(pro){
		 		html += `
					<tr class="tr">
					<td class="num">${pro.id}</td>
					<td class="goods-img"><a href="javascript:;"><img src="${pro.img}"></a></td>
					<td class="goods-cake">
						<div>
							<h4>${pro.title}</h4>
							<span class="goods-spec">规格<span>&nbsp;2.0磅</span></span>
							<span><i></i>赠送10套餐具</span>
						</div>
					</td>
					<td class="select-birthday">
						<div class="select-birthday-list">
							<input type="text" name="" placeholder="请选择生日牌" class="choose-card"/>
							<i class="huaguo"></i>
						</div>
						<ul class="birthday-options">
							<li>生日快乐</li>
							<li>Happy Birthd</li>
							<li>节日快乐</li>
							<li>自定义</li>
						</ul>
					</td>
					<td class="cart-price">${pro.price}</td>
					<td class="amount">
						<div class="number">
							<input type="button" name="" class="reduce" id="reduce">
							<input type="text" name="" class="txt" id="txt" value="${pro.amount}"/>
							<input type="button" name="" class="add" id="add">
						</div>
					</td>
					<td class="money" id="money">${pro.price * pro.amount}</td>
					<td class="del"><i class="i"></i></td>
				</tr>
				<div class="cart-area">
				<a href="javascript:;" class="cart-submit-empty"><i></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;全部清空</a>
				<ul class="detail-cart-total">
					<li>商品金额：￥ 256.00</li>
					<li>配送费：￥ 0.00</li>
					<li>活动优惠：￥ 0.00</li>
					<li class="card-total"><span>合计：￥</span><span>&nbsp;256.00</span>
					<span>订单已经满100元，享免费配送服务</span>
					</li>
				</ul>
			<div class="detail-cart-button"><a href="javascript:;">去结算</a></div>
		</div>	
		 		`;
		 	})
		 	$("#cart_body").html(html);
		 }).then(function(){
		 	var products = $.cookie("cart");
			//删除单行的商品，事件委派
			$("#cart_body").on("click",".i",function(event) {
				//console.log(target);
					var _tr =$("#cart_body");
					//console.log(_tr);
					var _id = _tr.find(".num");
					//console.log(_id);
					//从cookie中移除商品
					$(this).parents(".tr").remove();
					$.cookie("cart","", {expires:-1,path:"/"});
					window.location.reload()
					//从DOM中删除节点
					//console.log($("#cart_body").children(":first"));
			});

	    }).then(function(){
	    	var _tr = $("#cart_body").children(":first");
	    	var _amount = $(".amount");
	    	var _price = $(".cart-price").text();
	    	//console.log(_price);
	    	var allPrice = $(".money");
	    	//console.log(allPrice);
    			//修改商品对象的数量
    			 _amount = 1;
    			$(".add").click(function(){
    				_amount = parseInt($("#txt").val());
    				_amount++;
    				//console.log(amount);
    				$("#txt").val(_amount);
    				allPrice.text(_amount * _price);  
    			})
    				$(".reduce").click(function(){
    				 _amount = parseInt($("#txt").val());
    				if(_amount > 1){
    					_amount--;
    				}
    				$("#txt").val(_amount);
    				allPrice.text(_amount * _price);
    		})
	   	 }).then(function(){
	   	 	$(".huaguo").mousemove(function(){
	   	 		$(".birthday-options").show();
	   	 	})
	   	 	$(".huoguo").mouseleave(function(){
	   	 		$(".birthday-options").hide();
	   	 	})
	   	 })
	})
})
