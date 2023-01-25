$(document).ready(function(){
    btnOn();
});

function btnOn(){
    let $dropbutton = $('.footer_nav_row2_row1'); //버튼
    let $dropbox = $('.Entrepreneur_btn_box');//slide   

    $dropbutton.click(function(){
        $dropbox.toggle(300);
    });

};


