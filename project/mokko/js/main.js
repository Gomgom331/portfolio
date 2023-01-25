		$(function(){

			$(".a").click(function(){
				$(".b").slideToggle();
			});

			$(window).resize(function(){
				if(window,innerWidth>=655){
					$(".b").show();
				}

				if(window.innerWidth<=654){
					$(".b").hide();
				}
			});
		});


		

		$(document).ready(function(){
			var scroll_pos=0;
			$(window).scroll(function(){
				scroll_pos=$(this).scrollTop();
				if(scroll_pos<829){
					$("#navbox").css({"background-color":"rgb(0,0,0,0)","box-shadow": "0 0 0px black"});
				}
				if(scroll_pos>830){
					$("#navbox").css({"background-color":"rgb(0,0,0,0.8)","box-shadow": "0 0 3px black"});
				}
			});
		});



		$(function(){
			$(window).scroll(function(i){
				$('.slideinbottom, .slideinleft, .slideinright,.slideinrightfast').each(function(i){
					var bottom_of_element=$(this).offset().top+$(this).outerHeight();
					var bottom_of_window=$(window).scrollTop()+$(window).height();

					if(bottom_of_window > bottom_of_element ){
					$(this).animate({'opacity':'1'}, 1);
					$(this).css({'transform':'translate(0px,0px)'}, 2);
					}
				});
					$('.slideup1, .slideup2, .slideup3, .slideup4').each(function(i){
					var bottom_of_element=$(this).offset().top+$(this).outerHeight();
					var bottom_of_window=$(window).scrollTop()+$(window).height();

					if(bottom_of_window > bottom_of_element ){
					$(this).animate({'opacity':'1'}, 1);
					$(this).css({'transform':'translate(0px,0px)'}, 2);
					}
				});
		   });
		});