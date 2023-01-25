$(document).ready(function(){

        //-------------------MD'S PICK-------------------//

    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "부의 인문학"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig6_ul > .fig6_columnbox:nth-of-type(1) > a > .fig6_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig6_ul > .fig6_columnbox:nth-of-type(1) > a > .fig6_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig6_ul > .fig6_columnbox:nth-of-type(1) > a > .fig6_text > .fig6_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(1) > a > .fig6_text > .fig6_mark").append("(0)") 
        //평균점수 (평균)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(1) > a > .fig6_text > .fig6_mark > .fig6_number").append("0.0")

        //css
        $(".fig6_bookimg img").attr("width","180");
        $(".fig6_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig6_text > .fig6_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig6_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig6_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig6_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



    });



    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "자해를 하는 마음"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig6_ul > .fig6_columnbox:nth-of-type(2) > a > .fig6_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig6_ul > .fig6_columnbox:nth-of-type(2) > a > .fig6_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig6_ul > .fig6_columnbox:nth-of-type(2) > a > .fig6_text > .fig6_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(2) > a > .fig6_text > .fig6_mark").append("(1)") 
        //평균점수 (평균)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(2) > a > .fig6_text > .fig6_mark > .fig6_number").append("4")

        //css
        $(".fig6_bookimg img").attr("width","180");
        $(".fig6_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig6_text > .fig6_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig6_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig6_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig6_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



    });



    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "나에게 다정해지기로 했습니다"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig6_ul > .fig6_columnbox:nth-of-type(3) > a > .fig6_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig6_ul > .fig6_columnbox:nth-of-type(3) > a > .fig6_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig6_ul > .fig6_columnbox:nth-of-type(3) > a > .fig6_text > .fig6_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(3) > a > .fig6_text > .fig6_mark").append("(2)") 
        //평균점수 (평균)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(3) > a > .fig6_text > .fig6_mark > .fig6_number").append("4.5")

        //css
        $(".fig6_bookimg img").attr("width","180");
        $(".fig6_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig6_text > .fig6_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig6_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig6_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig6_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



    });



    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "어서 오세요, 휴남동 서점입니다"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig6_ul > .fig6_columnbox:nth-of-type(4) > a > .fig6_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig6_ul > .fig6_columnbox:nth-of-type(4) > a > .fig6_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig6_ul > .fig6_columnbox:nth-of-type(4) > a > .fig6_text > .fig6_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(4) > a > .fig6_text > .fig6_mark").append("(15)") 
        //평균점수 (평균)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(4) > a > .fig6_text > .fig6_mark > .fig6_number").append("4.9")

        //css
        $(".fig6_bookimg img").attr("width","180");
        $(".fig6_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig6_text > .fig6_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig6_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig6_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig6_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



    });



    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "웰씽킹"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig6_ul > .fig6_columnbox:nth-of-type(5) > a > .fig6_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig6_ul > .fig6_columnbox:nth-of-type(5) > a > .fig6_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig6_ul > .fig6_columnbox:nth-of-type(5) > a > .fig6_text > .fig6_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(5) > a > .fig6_text > .fig6_mark").append("(9)") 
        //평균점수 (평균)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(5) > a > .fig6_text > .fig6_mark > .fig6_number").append("4.6")

        //css
        $(".fig6_bookimg img").attr("width","180");
        $(".fig6_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig6_text > .fig6_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig6_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig6_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig6_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



    });


    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "55부터는 시간관을 바꿔야 산다"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig6_ul > .fig6_columnbox:nth-of-type(6) > a > .fig6_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig6_ul > .fig6_columnbox:nth-of-type(6) > a > .fig6_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig6_ul > .fig6_columnbox:nth-of-type(6) > a > .fig6_text > .fig6_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(6) > a > .fig6_text > .fig6_mark").append("(0)") 
        //평균점수 (평균)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(6) > a > .fig6_text > .fig6_mark > .fig6_number").append("0.0")

        //css
        $(".fig6_bookimg img").attr("width","180");
        $(".fig6_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig6_text > .fig6_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig6_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig6_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig6_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



    });






    //-------------------------------column2





    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "일의 철학"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig6_ul > .fig6_columnbox:nth-of-type(7) > a > .fig6_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig6_ul > .fig6_columnbox:nth-of-type(7) > a > .fig6_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig6_ul > .fig6_columnbox:nth-of-type(7) > a > .fig6_text > .fig6_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(7) > a > .fig6_text > .fig6_mark").append("(14)") 
        //평균점수 (평균)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(7) > a > .fig6_text > .fig6_mark > .fig6_number").append("3.3")

        //css
        $(".fig6_bookimg img").attr("width","180");
        $(".fig6_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig6_text > .fig6_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig6_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig6_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig6_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



    });



    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "돈의 속성"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig6_ul > .fig6_columnbox:nth-of-type(8) > a > .fig6_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig6_ul > .fig6_columnbox:nth-of-type(8) > a > .fig6_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig6_ul > .fig6_columnbox:nth-of-type(8) > a > .fig6_text > .fig6_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(8) > a > .fig6_text > .fig6_mark").append("(926)") 
        //평균점수 (평균)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(8) > a > .fig6_text > .fig6_mark > .fig6_number").append("4.6")

        //css
        $(".fig6_bookimg img").attr("width","180");
        $(".fig6_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig6_text > .fig6_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig6_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig6_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig6_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



    });



    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "강방천의 관점"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig6_ul > .fig6_columnbox:nth-of-type(9) > a > .fig6_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig6_ul > .fig6_columnbox:nth-of-type(9) > a > .fig6_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig6_ul > .fig6_columnbox:nth-of-type(9) > a > .fig6_text > .fig6_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(9) > a > .fig6_text > .fig6_mark").append("(59)") 
        //평균점수 (평균)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(9) > a > .fig6_text > .fig6_mark > .fig6_number").append("4.6")

        //css
        $(".fig6_bookimg img").attr("width","180");
        $(".fig6_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig6_text > .fig6_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig6_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig6_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig6_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



    });



    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "우리, 이토록 작은 존재들을 위하여"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig6_ul > .fig6_columnbox:nth-of-type(10) > a > .fig6_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig6_ul > .fig6_columnbox:nth-of-type(10) > a > .fig6_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig6_ul > .fig6_columnbox:nth-of-type(10) > a > .fig6_text > .fig6_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(10) > a > .fig6_text > .fig6_mark").append("(5)") 
        //평균점수 (평균)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(10) > a > .fig6_text > .fig6_mark > .fig6_number").append("4.8")

        //css
        $(".fig6_bookimg img").attr("width","180");
        $(".fig6_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig6_text > .fig6_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig6_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig6_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig6_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



    });



    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "나는 어쩌다 명왕성을 죽였나"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig6_ul > .fig6_columnbox:nth-of-type(11) > a > .fig6_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig6_ul > .fig6_columnbox:nth-of-type(11) > a > .fig6_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig6_ul > .fig6_columnbox:nth-of-type(11) > a > .fig6_text > .fig6_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(11) > a > .fig6_text > .fig6_mark").append("(58)") 
        //평균점수 (평균)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(11) > a > .fig6_text > .fig6_mark > .fig6_number").append("4.4")

        //css
        $(".fig6_bookimg img").attr("width","180");
        $(".fig6_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig6_text > .fig6_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig6_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig6_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig6_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



    });


    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "타인을 읽는 말"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig6_ul > .fig6_columnbox:nth-of-type(12) > a > .fig6_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig6_ul > .fig6_columnbox:nth-of-type(12) > a > .fig6_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig6_ul > .fig6_columnbox:nth-of-type(12) > a > .fig6_text > .fig6_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(12) > a > .fig6_text > .fig6_mark").append("(29)") 
        //평균점수 (평균)
        $(".fig6_ul > .fig6_columnbox:nth-of-type(12) > a > .fig6_text > .fig6_mark > .fig6_number").append("4.2")

        //css
        $(".fig6_bookimg img").attr("width","180");
        $(".fig6_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig6_text > .fig6_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig6_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig6_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig6_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



    });

});