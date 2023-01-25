$(document).ready(function(){
    slide1();
    slide2();
    slide3();
    slide4();
    slide5();
    slide6();
    slide7();
});

function slide1(){
        //****slide1****//
        let $sliderval = Number($('.fig2_banner_ul').css('margin-left').replace(/[^-\d\.]/g, ''));//margin-left 값
        let $sliderlival = Number($('.fig2_banner_li').css('width').replace(/[^-\d\.]/g, ''));//li width 값
        let $liindex = $('.fig2_banner_ul').children('li').length-3;//보이는 수
        let $libox = $('.fig2_banner_ul')//li 박스
        let $BRight = $('.fig2_btn_right')// 버튼 next
        let $BLaft = $('.fig2_btn_left')//버튼 prev
    
    
        $($BRight).click(function(){
            if($sliderval == $sliderlival*-$liindex){
                $($BRight).css({'opacity':'0','transition':'0.3s'});
            }else{
                $($BRight).css({'opacity':'1','transition':'0.3s'});
                $sliderval -= $sliderlival;
                $($libox).css({'margin-left':$sliderval+"px",'transition':'0.3s'});
            };
        });
    
        $($BLaft).click(function(){
            if($sliderval == 0){
                $($BLaft).css({'opacity':'0','transition':'0.3s'});
            }else{
                $($BLaft).css({'opacity':'1','transition':'0.3s'});
                $sliderval += $sliderlival
                $($libox).css({'margin-left':$sliderval+"px",'transition':'0.3s'});          
            };
        });
        
        ($BRight,$BLaft).click(function(){
            $($BRight).css({'opacity':'1','transition':'0.3s'});
            $($BLaft).css({'opacity':'1','transition':'0.3s'});
        });
};

function slide2(){
    //****slide2****//
    let $sliderval = Number($('.fig3_category_ul').css('margin-left').replace(/[^-\d\.]/g, ''));//margin-left 값
    let $sliderlival = Number($('.fig3_caregory_ol').css('width').replace(/[^-\d\.]/g, ''));//li width 값
    let $liindex = $('.fig3_category_ul').children('ol').length-3;//보이는 수
    let $libox = $('.fig3_category_ul')//li 박스
    let $BRight = $('.fig3_btn_right')// 버튼 next
    let $BLaft = $('.fig3_btn_left')//버튼 prev

    $($BRight).click(function(){
        if($sliderval == $sliderlival*-$liindex){
            $($BRight).css({'opacity':'0','transition':'0.3s'});
        }else{
            $($BRight).css({'opacity':'1','transition':'0.3s'});
            $sliderval -= $sliderlival;
            $($libox).css({'margin-left':$sliderval+"px",'transition':'0.3s'});
        };
    });

    $($BLaft).click(function(){
        if($sliderval == 0){
            $($BLaft).css({'opacity':'0','transition':'0.3s'});
        }else{
            $($BLaft).css({'opacity':'1','transition':'0.3s'});
            $sliderval += $sliderlival
            $($libox).css({'margin-left':$sliderval+"px",'transition':'0.3s'});          
        };
    });
    
    ($BRight,$BLaft).click(function(){
        $($BRight).css({'opacity':'1','transition':'0.3s'});
        $($BLaft).css({'opacity':'1','transition':'0.3s'});
    });
};
function slide3(){
    //****slide3****//
    let $sliderval = Number($('.fig4_ul').css('margin-left').replace(/[^-\d\.]/g, ''));//margin-left 값
    let $sliderlival = Number($('.fig4_columnbox').css('width').replace(/[^-\d\.]/g, ''))+6;//li width 값
    let $liindex = $('.fig4_ul').children('li').length-6;//보이는 수
    let $libox = $('.fig4_ul')//li 박스
    let $BRight = $('.fig4_btn_right')// 버튼 next
    let $BLaft = $('.fig4_btn_left')//버튼 prev


    $($BRight).click(function(){
        if($sliderval == $sliderlival*-$liindex){
            $($BRight).css({'opacity':'0','transition':'0.3s'});
        }else{
            $($BRight).css({'opacity':'1','transition':'0.3s'});
            $sliderval -= $sliderlival;
            $($libox).css({'margin-left':$sliderval+"px",'transition':'0.3s'});
        };
    });

    $($BLaft).click(function(){
        if($sliderval == 0){
            $($BLaft).css({'opacity':'0','transition':'0.3s'});
        }else{
            $($BLaft).css({'opacity':'1','transition':'0.3s'});
            $sliderval += $sliderlival
            $($libox).css({'margin-left':$sliderval+"px",'transition':'0.3s'});          
        };
    });
    
    ($BRight,$BLaft).click(function(){
        $($BRight).css({'opacity':'1','transition':'0.3s'});
        $($BLaft).css({'opacity':'1','transition':'0.3s'});
    });
};
function slide4(){
    //****slide4****//
    let $sliderval = Number($('.fig5_category_ul').css('margin-left').replace(/[^-\d\.]/g, ''));//margin-left 값
    let $sliderlival = Number($('.fig5_category_ol').css('width').replace(/[^-\d\.]/g, ''));//li width 값
    let $liindex = $('.fig5_category_ul').children('ol').length-3;//보이는 수
    let $libox = $('.fig5_category_ul')//li 박스
    let $BRight = $('.fig5_btn_right')// 버튼 next
    let $BLaft = $('.fig5_btn_left')//버튼 prev

    $($BRight).click(function(){
        if($sliderval == $sliderlival*-$liindex){
            $($BRight).css({'opacity':'0','transition':'0.3s'});
        }else{
            $($BRight).css({'opacity':'1','transition':'0.3s'});
            $sliderval -= $sliderlival;
            $($libox).css({'margin-left':$sliderval+"px",'transition':'0.3s'});
        };
    });

    $($BLaft).click(function(){
        if($sliderval == 0){
            $($BLaft).css({'opacity':'0','transition':'0.3s'});
        }else{
            $($BLaft).css({'opacity':'1','transition':'0.3s'});
            $sliderval += $sliderlival
            $($libox).css({'margin-left':$sliderval+"px",'transition':'0.3s'});          
        };
    });
    
    ($BRight,$BLaft).click(function(){
        $($BRight).css({'opacity':'1','transition':'0.3s'});
        $($BLaft).css({'opacity':'1','transition':'0.3s'});
    });
};
function slide5(){
    //****slide5****//
    let $sliderval = Number($('.fig6_ul').css('margin-left').replace(/[^-\d\.]/g, ''));//margin-left 값
    let $sliderlival = Number($('.fig6_columnbox').css('width').replace(/[^-\d\.]/g, ''))+6;//마진값 li width 값
    let $liindex = $('.fig6_ul').children('li').length-6;//보이는 수
    let $libox = $('.fig6_ul')//li 박스
    let $BRight = $('.fig6_btn_right')// 버튼 next
    let $BLaft = $('.fig6_btn_left')//버튼 prev


    $($BRight).click(function(){
        if($sliderval == $sliderlival*-$liindex){
            $($BRight).css({'opacity':'0','transition':'0.3s'});
        }else{
            $($BRight).css({'opacity':'1','transition':'0.3s'});
            $sliderval -= $sliderlival;
            $($libox).css({'margin-left':$sliderval+"px",'transition':'0.3s'});
        };
    });

    $($BLaft).click(function(){
        if($sliderval == 0){
            $($BLaft).css({'opacity':'0','transition':'0.3s'});
        }else{
            $($BLaft).css({'opacity':'1','transition':'0.3s'});
            $sliderval += $sliderlival
            $($libox).css({'margin-left':$sliderval+"px",'transition':'0.3s'});          
        };
    });
    
    ($BRight,$BLaft).click(function(){
        $($BRight).css({'opacity':'1','transition':'0.3s'});
        $($BLaft).css({'opacity':'1','transition':'0.3s'});
    });
};
function slide6(){
    //****slide6****//
    let $sliderval = Number($('.fig6_ul').css('margin-left').replace(/[^-\d\.]/g, ''));//margin-left 값
    let $sliderlival = Number($('.fig6_columnbox').css('width').replace(/[^-\d\.]/g, ''))+6;//마진값 li width 값
    let $liindex = $('.fig6_ul').children('li').length-6;//보이는 수
    let $libox = $('.fig6_ul')//li 박스
    let $BRight = $('.fig6_btn_right')// 버튼 next
    let $BLaft = $('.fig6_btn_left')//버튼 prev


    $($BRight).click(function(){
        if($sliderval == $sliderlival*-$liindex){
            $($BRight).css({'opacity':'0','transition':'0.3s'});
        }else{
            $($BRight).css({'opacity':'1','transition':'0.3s'});
            $sliderval -= $sliderlival;
            $($libox).css({'margin-left':$sliderval+"px",'transition':'0.3s'});
        };
    });

    $($BLaft).click(function(){
        if($sliderval == 0){
            $($BLaft).css({'opacity':'0','transition':'0.3s'});
        }else{
            $($BLaft).css({'opacity':'1','transition':'0.3s'});
            $sliderval += $sliderlival
            $($libox).css({'margin-left':$sliderval+"px",'transition':'0.3s'});          
        };
    });
    
    ($BRight,$BLaft).click(function(){
        $($BRight).css({'opacity':'1','transition':'0.3s'});
        $($BLaft).css({'opacity':'1','transition':'0.3s'});
    });
};
function slide7(){
    //****slide7****//
    let $sliderval = Number($('.fig7_ul').css('margin-left').replace(/[^-\d\.]/g, ''));//margin-left 값
    let $sliderlival = Number($('.fig7_columnbox').css('width').replace(/[^-\d\.]/g, ''))+6;//마진값 li width 값
    let $liindex = $('.fig7_ul').children('li').length-6;//보이는 수
    let $libox = $('.fig7_ul')//li 박스
    let $BRight = $('.fig7_btn_right')// 버튼 next
    let $BLaft = $('.fig7_btn_left')//버튼 prev


    $($BRight).click(function(){
        if($sliderval == $sliderlival*-$liindex){
            $($BRight).css({'opacity':'0','transition':'0.3s'});
        }else{
            $($BRight).css({'opacity':'1','transition':'0.3s'});
            $sliderval -= $sliderlival;
            $($libox).css({'margin-left':$sliderval+"px",'transition':'0.3s'});
        };
    });

    $($BLaft).click(function(){
        if($sliderval == 0){
            $($BLaft).css({'opacity':'0','transition':'0.3s'});
        }else{
            $($BLaft).css({'opacity':'1','transition':'0.3s'});
            $sliderval += $sliderlival
            $($libox).css({'margin-left':$sliderval+"px",'transition':'0.3s'});          
        };
    });
    
    ($BRight,$BLaft).click(function(){
        $($BRight).css({'opacity':'1','transition':'0.3s'});
        $($BLaft).css({'opacity':'1','transition':'0.3s'});
    });
};