$(function(){
	/*头部导航栏区域*/
	$('li.menu').hover(function(){
		if($(this).has('div').length){
			$(this).addClass('hover')
		}
	},function(){
		if($(this).has('div').length){
			$(this).removeClass('hover')
		}
	})
	/*购物车*/
	$('.nogoods').hover(function(){
		$('.nogoods').addClass('hover')
	},function(){
		$('.nogoods').removeClass('hover')

})

	/*购物导航区域*/		
			$('div.con-nav').hover(function(){
				$(this).addClass('hover')
			},function(){
				$(this).removeClass('hover')
		})			
	/*初始化代码*/
	var size=$('.banner-ad li').size();
	var index=0;

	/*JS添加导航按钮*/
	for (var i = 1; i <=size; i++) {
		li='<li>'+i+'</li>'
		$('.banner-nav').append(li);
	}
	$('.banner-nav li').eq(0).addClass('hover');
	$('.banner-ad li').eq(0).addClass('active');

	/*手动控制轮播图*/
	$('.banner-nav li').mouseover(function() {
		$(this).addClass('hover').siblings('li').removeClass('hover');
		index=$(this).index();
		$('.banner-ad li').eq(index).stop(true).fadeIn(300).siblings('li').stop(true).fadeOut(300);
		i=index;	
	});

	/*向右运动核心函数*/
	function move(){
		i++;
		if(i==size){
			i=0;
		}
		$('.banner-nav li').eq(i).addClass('hover').siblings('li').removeClass('hover');
		$('.banner-ad li').eq(i).stop(true).fadeIn(300).siblings('li').stop(true).fadeOut(300);
	}

	/*向左运动核心函数*/
	function moveL(){
		i--;
		if(i==-1){
			i=size-1;
		}
		$('.banner-nav li').eq(i).addClass('hover').siblings('li').removeClass('hover');
		$('.banner-ad li').eq(i).stop(true).fadeIn(300).siblings('li').stop(true).fadeOut(300);
	}

	// 自动轮播
	var i=index;
	t=setInterval(move,5000);
	$('#banner').hover(function() {
		clearInterval(t);
	}, function() {
		t=setInterval(move,5000);
	});

	//点击向右轮播
	$('.nav-right').click(function() {
		move();
	});

	//点击向左轮播
	$('.nav-left').click(function() {
		moveL();
	});
	/*初始化代码*/
	/*右侧选项卡*/ 
		$('li.air:lt(4)').hover(function hov() {
			var index=$(this).index();
			$('#options').stop().animate({marginTop:'-62px'}, 400);
			if(index!=0){		
			$('li.nav').eq(index).addClass('active').siblings().removeClass('active');
			}	
	},function(){
		$('body:not(#options)').click(function(event) {
			$('#options').stop().animate({marginTop:'148px'}, 400);
			var top=parseInt($('#options').css("marginTop"));	
		if(top>=-62){
			setTimeout("$('li.nav:first').addClass('active').siblings().removeClass('active')" ,400);
			}
		});	
	});
	$('#options li.nav').hover(function () {
		$(this).addClass('active').siblings('li').removeClass('active');
		$('ul.nav-inner>li').mouseover(function() {
			$(this).addClass('hover_2').siblings('li').removeClass('hover_2');	
		});
		$('li.list').mouseover(function() {
			$(this).find('div').addClass('hover_3').siblings('div').removeClass('hover_3')
		});
	}, function() {
		
	});
	/*banner图滑动*/
	var Left=parseInt($('#banner-2 ul').css('marginLeft'));
	$('#banner-2 .right').click(function() {
		$('#banner-2 ul').stop(true).animate({marginLeft: Left-1000+"px"},500,function(){
			Left=parseInt($('#banner-2 ul').css('marginLeft'));
			if(Left==-5000){
				$('#banner-2 ul').css('marginLeft', '-1000px');
				Left=parseInt($('#banner-2 ul').css('marginLeft'));
			}
		});
	});

	$('#banner-2 .left').click(function() {
		$('#banner-2 ul').stop(true).animate({marginLeft: Left+1000+"px"},500,function(){
			Left=parseInt($('#banner-2 ul').css('marginLeft'));
			if(Left==0){
				$('#banner-2 ul').css('marginLeft', '-4000px')
				Left=parseInt($('#banner-2 ul').css('marginLeft'));
			}
		});
	});
	/*猜你喜欢的商品*/
	var i=0;
	$('#title-1 span.btn').click(function() {
		if(i<3){
			i++;
		}else{
			i=0
		}	
	$('#content-1 ul').css('marginLeft',-1212*i+"px");
});

	$("#content-1 div.line").hover(function() {
		$(this).find('i').css('marginLeft', '-365px');
		$(this).find('i').stop().animate({marginLeft: "843px"},{duration:800,easing:"easeOutQuad"});
	}, function() {
		
	});		
	/*图片滑动*/
	$('a.slide-box').hover(function() {
		$(this).find('.img-slide').stop().animate({marginLeft:"-8px"}, 500)
	}, function() {
		$(this).find('.img-slide').stop().animate({marginLeft:"0px"}, 500)
	});
	/*楼层拉帘*/
	$('span.F').click(function(event) {
		$('.L1').slideToggle();
	});
	/*1F选项卡*/
	$('ul.tab li').mouseover(function() {
		$(this).addClass('tab-select').siblings('li').removeClass('tab-select');
		var index=$(this).index();
		$(this).parent('ul.tab').parent('div.mt').next().find('div.main').eq(index).addClass('main-select').siblings().removeClass('main-select');

		// $('div.m div.main').eq(index).addClass('main-select').siblings().removeClass('main-select')
	});
	/*1F banner广告轮播图*/
	/* 手动播放*/
		var time=new Date();
		$("ul.main-body li.list").mouseover(function(){
			$(this).addClass("active").siblings().removeClass("active");
			index=$(this).index()+1;
			$(this).parent('ul.nav').prevAll('ul.fore2-ban').stop().animate({
				"marginLeft":-439*index+"px"
				},500,function(){

				})
			});
		/*向右滑动*/
		$("div.right").click(function(){
			if(new Date()-time>600){
			time=new Date();
			var i=$(this).prevAll('ul.nav').find('li.active').index();
			var Left=parseInt($(this).prevAll('ul.fore2-ban').css('marginLeft'));	
			i++;
			if(i==4){
				i=0;
			};		
		$(this).prevAll('ul.nav').find('li').eq(i).addClass('active').siblings('li').removeClass('active');
		$(this).prevAll('ul.fore2-ban').stop().animate({
				"marginLeft":-439+Left+"px"
				},500,function(){
					Left=parseInt($(this).css('marginLeft'));
					if(Left==-2195){
						$(this).css('marginLeft','-439px')
					}	
					});
				}			
			});
		/*向左滑动*/
		$("div.left").click(function(){
			if(new Date()-time>600){
			time=new Date();
			var i=$(this).prevAll('ul.nav').find('li.active').index();
			var Left=parseInt($(this).prevAll('ul.fore2-ban').css('marginLeft'));
			i--;
			if(i==-1){
				i=3;
			};		
		$(this).prevAll('ul.nav').find('li').eq(i).addClass('active').siblings('li').removeClass('active');
		$(this).prevAll('ul.fore2-ban').stop().animate({
				"marginLeft":439+Left+"px"
				},500,function(){
					Left=parseInt($(this).css('marginLeft'));
					if(Left==0){
						$(this).css('marginLeft','-1756px');
					}
					});
			}			
		});
		/*自动播放*/		
		function moveR(){
			var i=$('ul.main-body ul.nav li.active').index('ul.main-body ul.nav li');
			var Left=parseInt($('ul.main-body ul.fore2-ban').css('marginLeft'));	
			i++;
			if(i==4){
				i=0;
			};		
		$('ul.main-body ul.nav li').eq(i).addClass('active').siblings('li').removeClass('active');
		$("ul.fore2-ban").stop().animate({
				"marginLeft":-439+Left+"px"
				},500,function(){
					Left=parseInt($(this).css('marginLeft'));
					if(Left==-2195){
						$(this).css('marginLeft','-439px')
					}
					});
			
		}
		m=setInterval(moveR,4000);
		$('ul.main-body li.fore2').hover(function() {
		clearInterval(m);
	}, function() {
		m=setInterval(moveR,4000);
	});

		/*滑动高光*/
		$('div.side').mouseover(function() {
			var L=parseInt($(this).css('width'));
			$(this).find("div.gradient").stop().animate({"left": L+110+"px"}, 800,function(){
				$(this).css('left', '-165px');
			})
		});


})
