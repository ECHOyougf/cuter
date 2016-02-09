//window.scrollTo(200,0);
	$(document).ready(function(){
		//鼠标经过左端按钮，背景变亮
		$(".btn").mouseenter(function(){
			$(this).css("background-image","url(imgs/btnchange.png)");
			});
		$(".btn").mouseleave(function(){
			$(this).css("background-image","url(imgs/btn.png)");
			});
		
		//轮播图
		$("#img1").siblings().hide();
		$("#bno1").css("opacity","1");
		$("#bno1").click(function(){
			$("#img1").fadeIn(1000).siblings().hide();
			$(this).css("opacity","1").siblings().css("opacity","0.7");
			});
		$("#bno2").click(function(){
			$("#img2").fadeIn(1000).siblings().hide();
			$(this).css("opacity","1").siblings().css("opacity","0.7");
			});
		$("#bno3").click(function(){
			$("#img3").fadeIn(1000).siblings().hide();
			$(this).css("opacity","1").siblings().css("opacity","0.7");
			});
		$("#bno4").click(function(){
			$("#img4").fadeIn(1000).siblings().hide();
			$(this).css("opacity","1").siblings().css("opacity","0.7");
			});
		$("#bno5").click(function(){
			$("#img5").fadeIn(1000).siblings().hide();
			$(this).css("opacity","1").siblings().css("opacity","0.7");
			});

		//新闻标题内容切换
		$(".newstitle li").click(function(){
			$(this).removeClass().addClass("newsmenuchange");
			$(this).siblings().removeClass().addClass("newsmenu");
			});
		
		//游戏介绍，天龙、灵柩、逍遥--，点击变化颜色和小三角
		$("#label1").css("background-color","#0993a0");
		$("#label1").click(function(){
			$("#triangle1").css("display","inline").siblings().css("display","none");
			$(this).css("background-color","#0993a0").siblings().css("background-color","#054e55");
			});
		$("#label2").click(function(){
			$("#triangle2").css("display","inline").siblings().css("display","none");
			$(this).css("background-color","#0993a0").siblings().css("background-color","#054e55");
			});
		$("#label3").click(function(){
			$("#triangle3").css("display","inline").siblings().css("display","none");
			$(this).css("background-color","#0993a0").siblings().css("background-color","#054e55");
			});
		
		//点击星星变暗变亮
		$(".star-five").click(function(){
			$(this).toggleClass("star-five2");
			});
		
		//游戏原画和游戏截图切换
		$("#yuanhua").css({"background-color":"white","color":"#0993a0"});
		$(".gamepicmenu li").click(function(){
			$(this).css({"background-color":"white","color":"#0993a0"}).
					siblings().css({"background-color":"#f0f0f0","color":"#666666"});});
		
//轮播图还没做
//		$("#zuo").click(function(){$("#huandengpianul")});
		
	
		//中间最下端PK动态标题切换
		$(".PK ul li").click(function(){
			$(this).css({"color":"#0993a0","fontSize":"14px","background-color":"white"});
			$(this).siblings().css({"color":"#666666","fontSize":"12px","background-color":"#f0f0f0"});
			});

		
		//右侧客服中心鼠标进入变蓝
		$("#xinshouyindao").mouseenter(function(){
								$(this).attr("src","imgs/xinshouyindao2.jpg");})
						   .mouseleave(function(){
								$(this).attr("src","imgs/xinshouyindao.jpg");
						   });
		$("#youxijieshao").mouseenter(function(){
								$(this).attr("src","imgs/youxijieshao2.jpg");})
						   .mouseleave(function(){
								$(this).attr("src","imgs/youxijieshao.jpg");
						   });
		$("#tesexitong").mouseenter(function(){
								$(this).attr("src","imgs/tesexitong2.jpg");})
						   .mouseleave(function(){
								$(this).attr("src","imgs/tesexitong.jpg");
						   });
		$("#gaoshoujinjie").mouseenter(function(){
								$(this).attr("src","imgs/gaoshoujinjie2.jpg");})
						   .mouseleave(function(){
								$(this).attr("src","imgs/gaoshoujinjie.jpg");
						   });
		//微博变色				   
		$("#xinlangweibo").mouseenter(function(){
								$(this).attr("src","imgs/xinlangweibo2.jpg");})
						   .mouseleave(function(){
								$(this).attr("src","imgs/xinlangweibo.jpg");
						   });
		$("#tengxunweibo").mouseenter(function(){
								$(this).attr("src","imgs/tengxunweibo2.jpg");})
						   .mouseleave(function(){
								$(this).attr("src","imgs/tengxunweibo.jpg");
						   });
		$("#weixin").mouseenter(function(){
								$(this).attr("src","imgs/weixin2.jpg");})
						   .mouseleave(function(){
								$(this).attr("src","imgs/weixin.jpg");
						   });
});