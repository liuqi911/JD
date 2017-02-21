$(function(){
		/*轮播图图共用函数*/
		/*小圆点触摸滑动*/
	var time=new Date();
		$("div.main-body li.list").mouseover(function(){
			var width=parseInt($(this).parent('ul.nav').parent('div.main-body').css('width'));
			$(this).addClass("active").siblings().removeClass("active");
			index=$(this).index()+1;
			$(this).parent('ul.nav').prevAll('ul.main-body').stop().animate({
				"marginLeft":-width*index+"px"
				},500,function(){

				})
			});
		/*向右滑动*/
		$("div.main-body div.right").click(function(){
			var width=parseInt($(this).parent('div.main-body').css('width'));
			if(new Date()-time>600){
			time=new Date();
			var i=$(this).prevAll('ul.nav').find('li.active').index();
			var Left=parseInt($(this).prevAll('ul.main-body').css('marginLeft'));
			if(i==4){
				i=0;
			};		
		$(this).prevAll('ul.nav').find('li').eq(i).addClass('active').siblings('li').removeClass('active');
		$(this).prevAll('ul.main-body').stop().animate({
				"marginLeft":-width+Left+"px"
				},500,function(){
					Left=parseInt($(this).css('marginLeft'));
					if(Left==-width*5){
						$(this).css('marginLeft',-width+'px')
					}	
					});
				}			
			});
		/*向左滑动*/
		$("div.main-body  div.left").click(function(){
			var width=parseInt($(this).parent('div.main-body').css('width'));
			if(new Date()-time>600){
			time=new Date();
			var i=$(this).prevAll('ul.nav').find('li.active').index();
			var Left=parseInt($(this).prevAll('ul.main-body').css('marginLeft'));
			if(i==-1){
				i=3;
			};		
		$(this).prevAll('ul.nav').find('li').eq(i).addClass('active').siblings('li').removeClass('active');
		$(this).prevAll('ul.main-body').stop().animate({
				"marginLeft":width+Left+"px"
				},500,function(){
					Left=parseInt($(this).css('marginLeft'));
					if(Left==0){
						$(this).css('marginLeft',-width*4+'px');
					}
					});
			}			
		});
		/*2F自动播放*/		
		function moveR_(){
			var i=$('#cosmetics div.main-body ul.nav li.active').index();
			var Left=parseInt($('#cosmetics div.main-body ul.main-body').css('marginLeft'));	
			i++;
			if(i==4){
				i=0;
			};		
		$('#cosmetics div.main-body ul.nav li').eq(i).addClass('active').siblings('li').removeClass('active');
		$("#cosmetics div.main-body ul.main-body").stop().animate({
				"marginLeft":-339+Left+"px"
				},500,function(){
					Left=parseInt($(this).css('marginLeft'));
					if(Left==-1695){
						$(this).css('marginLeft',-339+'px')
					}
					});
			
		}
		/*3F手机通讯自动轮播函数*/
		function moveM(){
			var i=$('#Phone div.main-body ul.nav li.active').index();
			var Left=parseInt($('#Phone div.main-body ul.main-body').css('marginLeft'));	
			i++;
			if(i==4){
				i=0;
			};		
		$('#Phone div.main-body ul.nav li').eq(i).addClass('active').siblings('li').removeClass('active');
		$("#Phone div.main-body ul.main-body").stop().animate({
				"marginLeft":-439+Left+"px"
				},500,function(){
					Left=parseInt($(this).css('marginLeft'));
					if(Left==-2195){
						$(this).css('marginLeft',-439+'px')
					}
					});
			}
		/*4F家用电器自动轮播函数*/
		function moveE(){
			var i=$('#household div.main-body ul.nav li.active').index();
			var Left=parseInt($('#Phone div.main-body ul.main-body').css('marginLeft'));	
			i++;
			if(i==4){
				i=0;
			};		
		$('#household div.main-body ul.nav li').eq(i).addClass('active').siblings('li').removeClass('active');
		$("#household div.main-body ul.main-body").stop().animate({
				"marginLeft":-439+Left+"px"
				},500,function(){
					Left=parseInt($(this).css('marginLeft'));
					if(Left==-2195){
						$(this).css('marginLeft',-439+'px')
					}
					});
		}
		/*5F电脑数码自动轮播函数*/
		function moveD(){
			var i=$('#computers div.main-body ul.nav li.active').index();
			var Left=parseInt($('#computers div.main-body ul.main-body').css('marginLeft'));	
			i++;
			if(i==4){
				i=0;
			};		
		$('#computers div.main-body ul.nav li').eq(i).addClass('active').siblings('li').removeClass('active');
		$("#computers div.main-body ul.main-body").stop().animate({
				"marginLeft":-439+Left+"px"
				},500,function(){
					Left=parseInt($(this).css('marginLeft'));
					if(Left==-2195){
						$(this).css('marginLeft',-439+'px')
					}
					});
		}
		/*6F自动播放*/
		function moveS(){
			var i=$('#sports div.main-body ul.nav li.active').index();
			var Left=parseInt($('#sports div.main-body ul.main-body').css('marginLeft'));	
			i++;
			if(i==4){
				i=0;
			};		
		$('#sports div.main-body ul.nav li').eq(i).addClass('active').siblings('li').removeClass('active');
		$("#sports div.main-body ul.main-body").stop().animate({
				"marginLeft":-339+Left+"px"
				},500,function(){
					Left=parseInt($(this).css('marginLeft'));
					if(Left==-1695){
						$(this).css('marginLeft',-339+'px')
					}
					});
		}
		/*7F自动播放*/
		function moveH(){
			var i=$('#home div.main-body ul.nav li.active').index();
			var Left=parseInt($('#home div.main-body ul.main-body').css('marginLeft'));	
			i++;
			if(i==4){
				i=0;
			};		
		$('#home div.main-body ul.nav li').eq(i).addClass('active').siblings('li').removeClass('active');
		$("#home div.main-body ul.main-body").stop().animate({
				"marginLeft":-339+Left+"px"
				},500,function(){
					Left=parseInt($(this).css('marginLeft'));
					if(Left==-1695){
						$(this).css('marginLeft',-339+'px')
					}
					});
		}
		/*8F自动播放*/
		function moveToy(){
			var i=$('#toy div.main-body ul.nav li.active').index();
			var Left=parseInt($('#toy div.main-body ul.main-body').css('marginLeft'));	
			i++;
			if(i==4){
				i=0;
			};		
		$('#toy div.main-body ul.nav li').eq(i).addClass('active').siblings('li').removeClass('active');
		$("#toy div.main-body ul.main-body").stop().animate({
				"marginLeft":-339+Left+"px"
				},500,function(){
					Left=parseInt($(this).css('marginLeft'));
					if(Left==-1695){
						$(this).css('marginLeft',-339+'px')
					}
					});
		}
		/*9F自动播放*/
			function moveFood(){
			var i=$('#food div.main-body ul.nav li.active').index();
			var Left=parseInt($('#food div.main-body ul.main-body').css('marginLeft'));	
			i++;
			if(i==4){
				i=0;
			};		
		$('#food div.main-body ul.nav li').eq(i).addClass('active').siblings('li').removeClass('active');
		$("#food div.main-body ul.main-body").stop().animate({
				"marginLeft":-339+Left+"px"
				},500,function(){
					Left=parseInt($(this).css('marginLeft'));
					if(Left==-1695){
						$(this).css('marginLeft',-339+'px')
					}
					});
		}
		/*10F自动播放*/
			function moveBook(){
			var i=$('#books div.main-body ul.nav li.active').index();
			var Left=parseInt($('#books div.main-body ul.main-body').css('marginLeft'));	
			i++;
			if(i==4){
				i=0;
			};		
		$('#books div.main-body ul.nav li').eq(i).addClass('active').siblings('li').removeClass('active');
		$("#books div.main-body ul.main-body").stop().animate({
				"marginLeft":-439+Left+"px"
				},500,function(){
					Left=parseInt($(this).css('marginLeft'));
					if(Left==-2195){
						$(this).css('marginLeft',-439+'px')
					}
					});
		}
		/*11F自动播放*/
			function moveCar(){
			var i=$('#car div.main-body ul.nav li.active').index();
			var Left=parseInt($('#car div.main-body ul.main-body').css('marginLeft'));	
			i++;
			if(i==4){
				i=0;
			};		
		$('#car div.main-body ul.nav li').eq(i).addClass('active').siblings('li').removeClass('active');
		$("#car div.main-body ul.main-body").stop().animate({
				"marginLeft":-439+Left+"px"
				},500,function(){
					Left=parseInt($(this).css('marginLeft'));
					if(Left==-2195){
						$(this).css('marginLeft',-439+'px')
					}
					});
		}

			/*晒单分享*/
			var i=0;
			function moveShare(){
			var Top=parseInt($('#share div.mcR ul').css('marginTop'));
			i++;
			if(i==6){
				i=0;
			};		
			$("#share div.mcR ul").stop().animate({
				"marginTop":-120+Top+"px"
				},500,function(){
					Top=parseInt($(this).css('marginTop'));
					if(Top==-720){
						$(this).css('marginTop',0+'px')
					}
					});
			}
			/*晒单分享自动播放*/
				Shareb=setInterval(moveShare,3000);
				$('#share div.mcR-main').hover(function() {
				clearInterval(Shareb);
				}, function() {
					Shareb=setInterval(moveShare,3000);
				});
		/*2F美妆个护自动播放*/
		x=setInterval(moveR_,3000);
		$('#cosmetics div.main-body').hover(function() {
		clearInterval(x);
	}, function() {
		x=setInterval(moveR_,3000);
	});
		/*3F手机通讯自动播放*/
		mb=setInterval(moveM,3000);
		$('#Phone div.main-body').hover(function() {
		clearInterval(mb);
	}, function() {
		mb=setInterval(moveM,3000);
	});
		/*4F家电自动播放*/
		Eb=setInterval(moveE,3000);
		$('#household div.main-body').hover(function() {
		clearInterval(Eb);
	}, function() {
		Eb=setInterval(moveE,3000);
	});
		/*5F电脑数码自动轮播*/
			Db=setInterval(moveD,3000);
		$('#computers div.main-body').hover(function() {
		clearInterval(Db);
	}, function() {
		Db=setInterval(moveD,3000);
	});
			/*6F电脑自动轮播*/
			Sb=setInterval(moveS,3000);
		$('#sports div.main-body').hover(function() {
		clearInterval(Sb);
	}, function() {
		Sb=setInterval(moveS,3000);
	});
		/*7F自动播放*/
			Hb=setInterval(moveH,3000);
		$('#home div.main-body').hover(function() {
		clearInterval(Hb);
	}, function() {
		Hb=setInterval(moveH,3000);
	});
		/*8F自动播放*/
			Toyb=setInterval(moveToy,3000);
		$('#toy div.main-body').hover(function() {
		clearInterval(Toyb);
	}, function() {
		Toyb=setInterval(moveToy,3000);
	});
		/*9F自动播放*/
			Foodb=setInterval(moveFood,3000);
		$('#food div.main-body').hover(function() {
		clearInterval(Foodb);
	}, function() {
		Foodb=setInterval(moveFood,3000);
	});
		/*10F自动播放*/
			Bookb=setInterval(moveBook,3000);
		$('#books div.main-body').hover(function() {
		clearInterval(Bookb);
	}, function() {
		Bookb=setInterval(moveBook,3000);
	});
			/*11F自动播放*/
		Carb=setInterval(moveCar,3000);
		$('#car div.main-body').hover(function() {
		clearInterval(Carb);
	}, function() {
		Carb=setInterval(moveCar,3000);
	});
		/*图片滑动*/
		$('#cheap div.mc li img ').hover(function() {
			$(this).stop().animate({'marginLeft':'-20px'}, 300)
		}, function() {
			$(this).stop().animate({'marginLeft':'0px'}, 300)
		});
		/*右侧工具条滑动*/
		$('#toolbar li').hover(function() {
			$(this).find('span').stop().animate({'left':'-60px'}, 300)
		}, function() {
			$(this).find('span').stop().animate({'left':'0'}, 300)
		});
		$('#tool-bottom li').hover(function() {
			$(this).find('span').stop().animate({'left':'-48px'}, 300)
		}, function() {
			$(this).find('span').stop().animate({'left':'0'}, 300)
		});
		/*左侧固定工具栏*/
		var index=0;
		$('#elevator ul li').click(function(event) {
			$(this).find('.etitle').addClass('active').siblings().removeClass('active');
			index=$(this).index()+1;
			Top=$('.F'+index).offset().top;
			$('html,body').stop().animate({scrollTop:Top},800,function(){
			$('.L1').eq(index-1).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);

			})
		});
		$('#elevator ul li').click(function(event) {
			$(this).addClass('active').siblings().removeClass('active');
		});
		$('#elevator ul li').hover(function() {
			$(this).addClass('hover');
		}, function() {
			$(this).removeClass('hover');
		});
		var scroll=0;
		$(window).scroll(function(event) {
			if(scroll=$('body').scrollTop()){
				scroll=$('body').scrollTop();
			}else if (scroll=$('html,body').scrollTop()) {
				scroll=$('html,body').scrollTop();
			}
			
			
			if(scroll>=1000){
				$('#elevator').removeClass('fn-hide')
			}
			if(scroll<1000){
				$('#elevator').addClass('fn-hide')
			}
			//1F
			if(scroll<2350&&scroll>1600){
			$('#elevator ul li').eq(0).addClass('active').siblings().removeClass('active');
			$('.L1').eq(0).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 2F
			if(scroll<3070&&scroll>2350){
			$('#elevator ul li').eq(1).addClass('active').siblings().removeClass('active');
			$('.L1').eq(1).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 3F
			if(scroll<3680&&scroll>3070){
			$('#elevator ul li').eq(2).addClass('active').siblings().removeClass('active');
			$('.L1').eq(2).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 4F
			if(scroll<4290&&scroll>3680){
			$('#elevator ul li').eq(3).addClass('active').siblings().removeClass('active');
			$('.L1').eq(3).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 5F
			if(scroll<5010&&scroll>4290){
			$('#elevator ul li').eq(4).addClass('active').siblings().removeClass('active');
			$('.L1').eq(4).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 6F
			if(scroll<5620&&scroll>5010){
			$('#elevator ul li').eq(5).addClass('active').siblings().removeClass('active');
			$('.L1').eq(5).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 7F
				if(scroll<6230&&scroll>5620){
			$('#elevator ul li').eq(6).addClass('active').siblings().removeClass('active');
			$('.L1').eq(6).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 8F
				if(scroll<6840&&scroll>6230){
			$('#elevator ul li').eq(7).addClass('active').siblings().removeClass('active');
			$('.L1').eq(7).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 9F
				if(scroll<7560&&scroll>6840){
			$('#elevator ul li').eq(8).addClass('active').siblings().removeClass('active');
			$('.L1').eq(8).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 10F
				if(scroll<8170&&scroll>7560){
			$('#elevator ul li').eq(9).addClass('active').siblings().removeClass('active');
			$('.L1').eq(9).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 11F
				if(scroll<8780&&scroll>8170){
			$('#elevator ul li').eq(10).addClass('active').siblings().removeClass('active');
			$('.L1').eq(10).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 12F
				if(scroll<9390&&scroll>8780){
			$('#elevator ul li').eq(11).addClass('active').siblings().removeClass('active');
			$('.L1').eq(11).slideDown(1500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
		});
			 //scroll= $('html,body').scrollTop();

			if(scroll>=1000){
					$('#elevator').addClass('active')
				}
			if(scroll<1000){
				$('#elevator').removeClass('active')
			}
			//1F
			if(scroll<2350&&scroll>1600){
			$('#elevator ul li').eq(0).addClass('active').siblings().removeClass('active');
			$('.L1').eq(0).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 2F
			if(scroll<3070&&scroll>2350){
			$('#elevator ul li').eq(1).addClass('active').siblings().removeClass('active');
			$('.L1').eq(1).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 3F
			if(scroll<3680&&scroll>3070){
			$('#elevator ul li').eq(2).addClass('active').siblings().removeClass('active');
			$('.L1').eq(2).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 4F
			if(scroll<4290&&scroll>3680){
			$('#elevator ul li').eq(3).addClass('active').siblings().removeClass('active');
			$('.L1').eq(3).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 5F
			if(scroll<5010&&scroll>4290){
			$('#elevator ul li').eq(4).addClass('active').siblings().removeClass('active');
			$('.L1').eq(4).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 6F
			if(scroll<5620&&scroll>5010){
			$('#elevator ul li').eq(5).addClass('active').siblings().removeClass('active');
			$('.L1').eq(5).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 7F
				if(scroll<6230&&scroll>5620){
			$('#elevator ul li').eq(6).addClass('active').siblings().removeClass('active');
			$('.L1').eq(6).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 8F
				if(scroll<6840&&scroll>6230){
			$('#elevator ul li').eq(7).addClass('active').siblings().removeClass('active');
			$('.L1').eq(7).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 9F
				if(scroll<7560&&scroll>6840){
			$('#elevator ul li').eq(8).addClass('active').siblings().removeClass('active');
			$('.L1').eq(8).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 10F
				if(scroll<8170&&scroll>7560){
			$('#elevator ul li').eq(9).addClass('active').siblings().removeClass('active');
			$('.L1').eq(9).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 11F
				if(scroll<8780&&scroll>8170){
			$('#elevator ul li').eq(10).addClass('active').siblings().removeClass('active');
			$('.L1').eq(10).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			// 12F
				if(scroll<9390&&scroll>8780){
			$('#elevator ul li').eq(11).addClass('active').siblings().removeClass('active');
			$('.L1').eq(11).slideDown(500).parent('div.mt').parent('div.m').parent('div.w').siblings('div.w').find('div.m').find('.mt').find('.L1').hide(100);
			}
			//回到顶部
			$('#tool-bottom li.fore1').click(function(event) {
				$('body').scrollTop(0);
			});
})