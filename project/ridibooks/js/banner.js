$(document).ready(function(){
    slide();
});

function slide(){
    let wid = 0;
    let now_num = 0;
    let slide_length = 0;
    let auto = null;
    let $dotli = $('.slider_dot>li');
    let $panel = $('.slider_imgbox');
    let $paneli = $panel.children('li');

    function init(){
        wid = $('.slider_box').width();
        now_num = $('.slider_dot>li.dot_on').index();
        slide_length = $dotli.length;
    };

    function slideEvent(){

        $dotli.click(function(){
            now_num = $(this).index();
            slideMove();
        });

        $('.slider_btn_right').click(function(){
            nextChkPlay();
        });
        $('.slider_btn_left').click(function(){
            prevChkPlay();
        });

        autoPlay();

        autoPlayStop();

        autoPlayRestart();

        resize();
    };

    function autoPlay(){
        auto = setInterval(function(){
            nextChkPlay();
        }, 3000);
    };

    function autoPlayStop(){
        $paneli.mouseenter(function(){
            clearInterval(auto);
        });
    };

    function autoPlayRestart(){
        $paneli.mouseleave(function(){
            auto = setInterval(function(){
                nextChkPlay();
            }, 3000);
        });
    };

    function prevChkPlay(){
        if(now_num == 0){
            now_num = slide_length -1;
        } else{
            now_num--;
        };
        slideMove();
    };
    function nextChkPlay(){
        if(now_num == slide_length -1){
            now_num = 0;
        }else {
            now_num++;
        };
        slideMove();
    };

    function slideMove(){
        $panel.stop().animate({
            'margin-left': -wid*now_num
        });
        $dotli.removeClass('dot_on');
        $dotli.eq(now_num).addClass('dot_on')
    };
    function resize(){
        $(window).resize(function(){
            init();
            $panel.css({
                'margin-left': -wid*now_num
            });
        });
    };
    init();
    slideEvent();
};

