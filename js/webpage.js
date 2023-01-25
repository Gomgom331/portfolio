/*웹페이지 */

$(function(){


	/*첫번째 웹페이지 */
	$(".web_page01").mouseenter(function(){

		$(".web_page01 img").stop().animate({marginTop:-1600},10000);

	}).mouseleave(function(){

		$(".web_page01 img").stop().animate({marginTop:0},3000);
	});

	/*두번째 웹페이지 */
	$(".web_page02").mouseenter(function(){

		$(".web_page02 img").stop().animate({marginTop:-3370},10000);

	}).mouseleave(function(){

		$(".web_page02 img").stop().animate({marginTop:0},3000);
	});

	/*세번째 웹페이지 */
	$(".web_page03").mouseenter(function(){

		$(".web_page03 img").stop().animate({marginTop:-2600},10000);

	}).mouseleave(function(){

		$(".web_page03 img").stop().animate({marginTop:0},3000);
	});

	/*네번째 웹페이지 */
	$(".web_page04").mouseenter(function(){

		$(".web_page04 img").stop().animate({marginTop:-6650},10000);

	}).mouseleave(function(){

		$(".web_page04 img").stop().animate({marginTop:0},3000);
	});


});