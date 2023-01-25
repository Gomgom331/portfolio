$(function(){

	//click 시 color change

	$(".side_nav li a:eq(0)").css({background:"#333"});
	$(".side_nav li a i:eq(0)").css({color:"#fff"});

	$(".side_nav li a:eq(0)").click(function(){

		$(".side_nav li a").css({background:"#fff"});
		$(".side_nav li a i").css({color:"#000"});
		$(".side_nav li a:eq(0)").css({background:"#333"});
		$(".side_nav li a i:eq(0)").css({color:"#fff"});

	});

	$(".side_nav li:eq(1)").click(function(){
		
		$(".side_nav li a").css({background:"#fff"});
		$(".side_nav li a i").css({color:"#000"});
		$(".side_nav li a:eq(1)").css({background:"#333"});
		$(".side_nav li a i:eq(1)").css({color:"#fff"});

	});

	$(".side_nav li:eq(2)").click(function(){
		
		$(".side_nav li a").css({background:"#fff"});
		$(".side_nav li a i").css({color:"#000"});
		$(".side_nav li a:eq(2)").css({background:"#333"});
		$(".side_nav li a i:eq(2)").css({color:"#fff"});

	});

	$(".side_nav li:eq(3)").click(function(){

		$(".side_nav li a").css({background:"#fff"});
		$(".side_nav li a i").css({color:"#000"});
		$(".side_nav li a:eq(3)").css({background:"#333"});
		$(".side_nav li a i:eq(3)").css({color:"#fff"});

	});

	$(".side_nav li:eq(4)").click(function(){
		
		$(".side_nav li a").css({background:"#fff"});
		$(".side_nav li a i").css({color:"#000"});
		$(".side_nav li a:eq(4)").css({background:"#333"});
		$(".side_nav li a i:eq(4)").css({color:"#fff"});

	});

	$(".side_nav li:eq(5)").click(function(){

		$(".side_nav li a").css({background:"#fff"});
		$(".side_nav li a i").css({color:"#000"});
		$(".side_nav li a:eq(5)").css({background:"#333"});
		$(".side_nav li a i:eq(5)").css({color:"#fff"});


	});

	//scroll시 영역에 따라 color change
		$(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if (scroll >= 0 && scroll < 1200) {
                $(".side_nav li a").css({background:"#fff"});
				$(".side_nav li a i").css({color:"#000"});
				$(".side_nav li a:eq(0)").css({background:"#333"});
				$(".side_nav li a i:eq(0)").css({color:"#fff"});
            }else if (scroll >= 1200 && scroll < 2400) {
                $(".side_nav li a").css({background:"#fff"});
				$(".side_nav li a i").css({color:"#000"});
				$(".side_nav li a:eq(1)").css({background:"#333"});
				$(".side_nav li a i:eq(1)").css({color:"#fff"});
            }else if (scroll >= 2400 && scroll < 3600){
            	$(".side_nav li a").css({background:"#fff"});
				$(".side_nav li a i").css({color:"#000"});
				$(".side_nav li a:eq(2)").css({background:"#333"});
				$(".side_nav li a i:eq(2)").css({color:"#fff"});
            }else if (scroll >= 3600 && scroll < 4800){
            	$(".side_nav li a").css({background:"#fff"});
				$(".side_nav li a i").css({color:"#000"});
				$(".side_nav li a:eq(3)").css({background:"#333"});
				$(".side_nav li a i:eq(3)").css({color:"#fff"});
            }else if (scroll >= 4800 && scroll < 6000){
            	$(".side_nav li a").css({background:"#fff"});
				$(".side_nav li a i").css({color:"#000"});
				$(".side_nav li a:eq(4)").css({background:"#333"});
				$(".side_nav li a i:eq(4)").css({color:"#fff"});
            }else{
            	$(".side_nav li a").css({background:"#fff"});
				$(".side_nav li a i").css({color:"#000"});
				$(".side_nav li a:eq(5)").css({background:"#333"});
				$(".side_nav li a i:eq(5)").css({color:"#fff"});
            }
        });


});

