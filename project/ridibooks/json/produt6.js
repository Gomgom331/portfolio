$(document).ready(function(){

        //-------------------리디북스토어 추천-------------------//

    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "우리의 인생이 겨울을 지날 때"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig7_ul > .fig7_columnbox:nth-of-type(1) > a > .fig7_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig7_ul > .fig7_columnbox:nth-of-type(1) > a > .fig7_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig7_ul > .fig7_columnbox:nth-of-type(1) > a > .fig7_text > .fig7_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(1) > a > .fig7_text > .fig7_mark").append("(7)") 
        //평균점수 (평균)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(1) > a > .fig7_text > .fig7_mark > .fig7_number").append("4.6")

        //css
        $(".fig7_bookimg img").attr("width","180");
        $(".fig7_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig7_text > .fig7_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig7_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig7_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig7_mark > .fig7_number").css({"fontSize":"13px","color":"#DC3232"})



    });



    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "오늘도 우울증을 검색한 나에게"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig7_ul > .fig7_columnbox:nth-of-type(2) > a > .fig7_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig7_ul > .fig7_columnbox:nth-of-type(2) > a > .fig7_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig7_ul > .fig7_columnbox:nth-of-type(2) > a > .fig7_text > .fig7_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(2) > a > .fig7_text > .fig7_mark").append("(6)") 
        //평균점수 (평균)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(2) > a > .fig7_text > .fig7_mark > .fig7_number").append("4.8")

        //css
        $(".fig7_bookimg img").attr("width","180");
        $(".fig7_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig7_text > .fig7_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig7_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig7_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig7_mark > .fig7_number").css({"fontSize":"13px","color":"#DC3232"})



    });



    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "우리는 여전히 삶을 사랑하는가"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig7_ul > .fig7_columnbox:nth-of-type(3) > a > .fig7_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig7_ul > .fig7_columnbox:nth-of-type(3) > a > .fig7_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig7_ul > .fig7_columnbox:nth-of-type(3) > a > .fig7_text > .fig7_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(3) > a > .fig7_text > .fig7_mark").append("(4)") 
        //평균점수 (평균)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(3) > a > .fig7_text > .fig7_mark > .fig7_number").append("4")

        //css
        $(".fig7_bookimg img").attr("width","180");
        $(".fig7_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig7_text > .fig7_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig7_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig7_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig7_mark > .fig7_number").css({"fontSize":"13px","color":"#DC3232"})



    });



    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "젊은 ADHD의 슬픔"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig7_ul > .fig7_columnbox:nth-of-type(4) > a > .fig7_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig7_ul > .fig7_columnbox:nth-of-type(4) > a > .fig7_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig7_ul > .fig7_columnbox:nth-of-type(4) > a > .fig7_text > .fig7_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(4) > a > .fig7_text > .fig7_mark").append("(164)") 
        //평균점수 (평균)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(4) > a > .fig7_text > .fig7_mark > .fig7_number").append("4.5")

        //css
        $(".fig7_bookimg img").attr("width","180");
        $(".fig7_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig7_text > .fig7_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig7_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig7_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig7_mark > .fig7_number").css({"fontSize":"13px","color":"#DC3232"})



    });



    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "핵을 들고 도망친 101세 노인"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig7_ul > .fig7_columnbox:nth-of-type(5) > a > .fig7_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig7_ul > .fig7_columnbox:nth-of-type(5) > a > .fig7_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig7_ul > .fig7_columnbox:nth-of-type(5) > a > .fig7_text > .fig7_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(5) > a > .fig7_text > .fig7_mark").append("(62)") 
        //평균점수 (평균)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(5) > a > .fig7_text > .fig7_mark > .fig7_number").append("4.2")

        //css
        $(".fig7_bookimg img").attr("width","180");
        $(".fig7_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig7_text > .fig7_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig7_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig7_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig7_mark > .fig7_number").css({"fontSize":"13px","color":"#DC3232"})



    });


    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "하루를 48시간으로 사는 마법"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig7_ul > .fig7_columnbox:nth-of-type(6) > a > .fig7_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig7_ul > .fig7_columnbox:nth-of-type(6) > a > .fig7_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig7_ul > .fig7_columnbox:nth-of-type(6) > a > .fig7_text > .fig7_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(6) > a > .fig7_text > .fig7_mark").append("(54)") 
        //평균점수 (평균)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(6) > a > .fig7_text > .fig7_mark > .fig7_number").append("4.2")

        //css
        $(".fig7_bookimg img").attr("width","180");
        $(".fig7_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig7_text > .fig7_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig7_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig7_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig7_mark > .fig7_number").css({"fontSize":"13px","color":"#DC3232"})



    });






    //-------------------------------column2





    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "전념"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig7_ul > .fig7_columnbox:nth-of-type(7) > a > .fig7_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig7_ul > .fig7_columnbox:nth-of-type(7) > a > .fig7_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig7_ul > .fig7_columnbox:nth-of-type(7) > a > .fig7_text > .fig7_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(7) > a > .fig7_text > .fig7_mark").append("(32)") 
        //평균점수 (평균)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(7) > a > .fig7_text > .fig7_mark > .fig7_number").append("4.1")

        //css
        $(".fig7_bookimg img").attr("width","180");
        $(".fig7_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig7_text > .fig7_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig7_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig7_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig7_mark > .fig7_number").css({"fontSize":"13px","color":"#DC3232"})



    });



    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "야구에도 3번의 기회가 있다는데"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig7_ul > .fig7_columnbox:nth-of-type(8) > a > .fig7_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig7_ul > .fig7_columnbox:nth-of-type(8) > a > .fig7_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig7_ul > .fig7_columnbox:nth-of-type(8) > a > .fig7_text > .fig7_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(8) > a > .fig7_text > .fig7_mark").append("(4)") 
        //평균점수 (평균)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(8) > a > .fig7_text > .fig7_mark > .fig7_number").append("4.8")

        //css
        $(".fig7_bookimg img").attr("width","180");
        $(".fig7_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig7_text > .fig7_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig7_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig7_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig7_mark > .fig7_number").css({"fontSize":"13px","color":"#DC3232"})



    });



    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "새 마음으로"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig7_ul > .fig7_columnbox:nth-of-type(9) > a > .fig7_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig7_ul > .fig7_columnbox:nth-of-type(9) > a > .fig7_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig7_ul > .fig7_columnbox:nth-of-type(9) > a > .fig7_text > .fig7_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(9) > a > .fig7_text > .fig7_mark").append("(13)") 
        //평균점수 (평균)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(9) > a > .fig7_text > .fig7_mark > .fig7_number").append("4.6")

        //css
        $(".fig7_bookimg img").attr("width","180");
        $(".fig7_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig7_text > .fig7_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig7_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig7_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig7_mark > .fig7_number").css({"fontSize":"13px","color":"#DC3232"})



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
        $(".fig7_ul > .fig7_columnbox:nth-of-type(10) > a > .fig7_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig7_ul > .fig7_columnbox:nth-of-type(10) > a > .fig7_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig7_ul > .fig7_columnbox:nth-of-type(10) > a > .fig7_text > .fig7_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(10) > a > .fig7_text > .fig7_mark").append("(5)") 
        //평균점수 (평균)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(10) > a > .fig7_text > .fig7_mark > .fig7_number").append("4.8")

        //css
        $(".fig7_bookimg img").attr("width","180");
        $(".fig7_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig7_text > .fig7_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig7_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig7_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig7_mark > .fig7_number").css({"fontSize":"13px","color":"#DC3232"})



    });



    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "일을 잘한다는 것"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig7_ul > .fig7_columnbox:nth-of-type(11) > a > .fig7_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig7_ul > .fig7_columnbox:nth-of-type(11) > a > .fig7_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig7_ul > .fig7_columnbox:nth-of-type(11) > a > .fig7_text > .fig7_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(11) > a > .fig7_text > .fig7_mark").append("(147)") 
        //평균점수 (평균)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(11) > a > .fig7_text > .fig7_mark > .fig7_number").append("4.5")

        //css
        $(".fig7_bookimg img").attr("width","180");
        $(".fig7_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig7_text > .fig7_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig7_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig7_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig7_mark > .fig7_number").css({"fontSize":"13px","color":"#DC3232"})



    });


    $.ajax({
        mathod: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "밤의 피크닉"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })

    .done(function (msg) {
        console.log(msg);

        //이미지
        $(".fig7_ul > .fig7_columnbox:nth-of-type(12) > a > .fig7_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
        $(".fig7_ul > .fig7_columnbox:nth-of-type(12) > a > .fig7_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
        $(".fig7_ul > .fig7_columnbox:nth-of-type(12) > a > .fig7_text > .fig7_name").append(msg.documents[0].authors)
        //평점 (인원)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(12) > a > .fig7_text > .fig7_mark").append("(49)") 
        //평균점수 (평균)
        $(".fig7_ul > .fig7_columnbox:nth-of-type(12) > a > .fig7_text > .fig7_mark > .fig7_number").append("4.6")

        //css
        $(".fig7_bookimg img").attr("width","180");
        $(".fig7_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
        $(".fig7_text > .fig7_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

        $(".fig7_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
        $(".fig7_mark").css({"fontSize":"13px","color":"#787878"})
        $(".fig7_mark > .fig7_number").css({"fontSize":"13px","color":"#DC3232"})



    });

});