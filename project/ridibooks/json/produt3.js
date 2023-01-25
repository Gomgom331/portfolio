$(document).ready(function () {

    //-------------------새로 나온책-------------------//
    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "H마트에서 울다" },
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })
        .done(function (msg) {
            console.log(msg);

            //이미지
            $(".fig4_ul > .fig4_columnbox:nth-of-type(1) > a > .fig4_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
            $(".fig4_ul > .fig4_columnbox:nth-of-type(1) > a > .fig4_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
            $(".fig4_ul > .fig4_columnbox:nth-of-type(1) > a > .fig4_text > .fig4_name").append(msg.documents[0].authors)
            //평점 (인원)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(1) > a > .fig4_text > .fig4_mark").append("(13)") 
            //평균점수 (평균)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(1) > a > .fig4_text > .fig4_mark > .fig4_number").append("4.8")

            //css
            $(".fig4_bookimg img").attr("width","180");
            $(".fig4_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
            $(".fig4_text > .fig4_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

            $(".fig4_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
            $(".fig4_mark").css({"fontSize":"13px","color":"#787878"})
            $(".fig4_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



        });


    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "당신이 살았던 날들" },
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })
        .done(function (msg) {
            console.log(msg);

            //이미지
            $(".fig4_ul > .fig4_columnbox:nth-of-type(2) > a > .fig4_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
            $(".fig4_ul > .fig4_columnbox:nth-of-type(2) > a > .fig4_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
            $(".fig4_ul > .fig4_columnbox:nth-of-type(2) > a > .fig4_text > .fig4_name").append(msg.documents[0].authors)
            //평점 (인원)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(2) > a > .fig4_text > .fig4_mark").append("(9)") 
            //평균점수 (평균)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(2) > a > .fig4_text > .fig4_mark > .fig4_number").append("4.2")

            //css
            $(".fig4_bookimg img").attr("width","180");
            $(".fig4_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
            $(".fig4_text > .fig4_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

            $(".fig4_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
            $(".fig4_mark").css({"fontSize":"13px","color":"#787878"})
            $(".fig4_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



        });



    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "밥을 먹다가 생각이 났어" },
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })
        .done(function (msg) {
            console.log(msg);

            //이미지
            $(".fig4_ul > .fig4_columnbox:nth-of-type(3) > a > .fig4_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
            $(".fig4_ul > .fig4_columnbox:nth-of-type(3) > a > .fig4_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
            $(".fig4_ul > .fig4_columnbox:nth-of-type(3) > a > .fig4_text > .fig4_name").append(msg.documents[0].authors)
            //평점 (인원)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(3) > a > .fig4_text > .fig4_mark").append("(24)") 
            //평균점수 (평균)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(3) > a > .fig4_text > .fig4_mark > .fig4_number").append("4.4")

            //css
            $(".fig4_bookimg img").attr("width","180");
            $(".fig4_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
            $(".fig4_text > .fig4_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

            $(".fig4_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
            $(".fig4_mark").css({"fontSize":"13px","color":"#787878"})
            $(".fig4_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



        });


    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "백만장자와 승려" },
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })
        .done(function (msg) {
            console.log(msg);

            //이미지
            $(".fig4_ul > .fig4_columnbox:nth-of-type(4) > a > .fig4_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
            $(".fig4_ul > .fig4_columnbox:nth-of-type(4) > a > .fig4_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
            $(".fig4_ul > .fig4_columnbox:nth-of-type(4) > a > .fig4_text > .fig4_name").append(msg.documents[0].authors)
            //평점 (인원)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(4) > a > .fig4_text > .fig4_mark").append("(34)") 
            //평균점수 (평균)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(4) > a > .fig4_text > .fig4_mark > .fig4_number").append("4.7")

            //css
            $(".fig4_bookimg img").attr("width","180");
            $(".fig4_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
            $(".fig4_text > .fig4_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

            $(".fig4_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
            $(".fig4_mark").css({"fontSize":"13px","color":"#787878"})
            $(".fig4_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



        });


    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "봄이다,살아보자" },
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })
        .done(function (msg) {
            console.log(msg);

            //이미지
            $(".fig4_ul > .fig4_columnbox:nth-of-type(5) > a > .fig4_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
            $(".fig4_ul > .fig4_columnbox:nth-of-type(5) > a > .fig4_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
            $(".fig4_ul > .fig4_columnbox:nth-of-type(5) > a > .fig4_text > .fig4_name").append(msg.documents[0].authors)
            //평점 (인원)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(5) > a > .fig4_text > .fig4_mark").append("(11)") 
            //평균점수 (평균)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(5) > a > .fig4_text > .fig4_mark > .fig4_number").append("4.5")

            //css
            $(".fig4_bookimg img").attr("width","180");
            $(".fig4_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
            $(".fig4_text > .fig4_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

            $(".fig4_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
            $(".fig4_mark").css({"fontSize":"13px","color":"#787878"})
            $(".fig4_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



        });


    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "빅데이터 사용설명서"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })
        .done(function (msg) {
            console.log(msg);

            //이미지
            $(".fig4_ul > .fig4_columnbox:nth-of-type(6) > a > .fig4_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
            $(".fig4_ul > .fig4_columnbox:nth-of-type(6) > a > .fig4_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
            $(".fig4_ul > .fig4_columnbox:nth-of-type(6) > a > .fig4_text > .fig4_name").append(msg.documents[0].authors)
            //평점 (인원)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(6) > a > .fig4_text > .fig4_mark").append("(14)") 
            //평균점수 (평균)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(6) > a > .fig4_text > .fig4_mark > .fig4_number").append("4.2")

            //css
            $(".fig4_bookimg img").attr("width","180");
            $(".fig4_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
            $(".fig4_text > .fig4_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

            $(".fig4_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
            $(".fig4_mark").css({"fontSize":"13px","color":"#787878"})
            $(".fig4_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



        });


    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "메멘토 모리" },
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })
        .done(function (msg) {
            console.log(msg);

            //이미지
            $(".fig4_ul > .fig4_columnbox:nth-of-type(7) > a > .fig4_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
            $(".fig4_ul > .fig4_columnbox:nth-of-type(7) > a > .fig4_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
            $(".fig4_ul > .fig4_columnbox:nth-of-type(7) > a > .fig4_text > .fig4_name").append(msg.documents[0].authors)
            //평점 (인원)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(7) > a > .fig4_text > .fig4_mark").append("(34)") 
            //평균점수 (평균)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(7) > a > .fig4_text > .fig4_mark > .fig4_number").append("4.7")

            //css
            $(".fig4_bookimg img").attr("width","180");
            $(".fig4_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
            $(".fig4_text > .fig4_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

            $(".fig4_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
            $(".fig4_mark").css({"fontSize":"13px","color":"#787878"})
            $(".fig4_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



        });



    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "메이 머스크: 여자는 계획을 세운다"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })
        .done(function (msg) {
            console.log(msg);

            //이미지
            $(".fig4_ul > .fig4_columnbox:nth-of-type(8) > a > .fig4_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
            $(".fig4_ul > .fig4_columnbox:nth-of-type(8) > a > .fig4_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
            $(".fig4_ul > .fig4_columnbox:nth-of-type(8) > a > .fig4_text > .fig4_name").append(msg.documents[0].authors)
            //평점 (인원)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(8) > a > .fig4_text > .fig4_mark").append("(0)") 
            //평균점수 (평균)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(8) > a > .fig4_text > .fig4_mark > .fig4_number").append("0")

            //css
            $(".fig4_bookimg img").attr("width","180");
            $(".fig4_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
            $(".fig4_text > .fig4_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

            $(".fig4_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
            $(".fig4_mark").css({"fontSize":"13px","color":"#787878"})
            $(".fig4_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



        });

    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "로어 세트 : 신을 죽인 여자"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })
        .done(function (msg) {
            console.log(msg);

            //이미지
            $(".fig4_ul > .fig4_columnbox:nth-of-type(9) > a > .fig4_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
            $(".fig4_ul > .fig4_columnbox:nth-of-type(9) > a > .fig4_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
            $(".fig4_ul > .fig4_columnbox:nth-of-type(9) > a > .fig4_text > .fig4_name").append(msg.documents[0].authors)
            //평점 (인원)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(9) > a > .fig4_text > .fig4_mark").append("(0)") 
            //평균점수 (평균)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(9) > a > .fig4_text > .fig4_mark > .fig4_number").append("0")

            //css
            $(".fig4_bookimg img").attr("width","180");
            $(".fig4_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
            $(".fig4_text > .fig4_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

            $(".fig4_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
            $(".fig4_mark").css({"fontSize":"13px","color":"#787878"})
            $(".fig4_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



        });

    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "오르는 주식을 사들이는 차트매매법"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })
        .done(function (msg) {
            console.log(msg);

            //이미지
            $(".fig4_ul > .fig4_columnbox:nth-of-type(10) > a > .fig4_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
            $(".fig4_ul > .fig4_columnbox:nth-of-type(10) > a > .fig4_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
            $(".fig4_ul > .fig4_columnbox:nth-of-type(10) > a > .fig4_text > .fig4_name").append(msg.documents[0].authors)
            //평점 (인원)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(10) > a > .fig4_text > .fig4_mark").append("(0)") 
            //평균점수 (평균)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(10) > a > .fig4_text > .fig4_mark > .fig4_number").append("0")

            //css
            $(".fig4_bookimg img").attr("width","180");
            $(".fig4_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
            $(".fig4_text > .fig4_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

            $(".fig4_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
            $(".fig4_mark").css({"fontSize":"13px","color":"#787878"})
            $(".fig4_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



        });


    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "어서 오세요, 휴남동 서점입니다"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })
        .done(function (msg) {
            console.log(msg);

            //이미지
            $(".fig4_ul > .fig4_columnbox:nth-of-type(11) > a > .fig4_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
            $(".fig4_ul > .fig4_columnbox:nth-of-type(11) > a > .fig4_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
            $(".fig4_ul > .fig4_columnbox:nth-of-type(11) > a > .fig4_text > .fig4_name").append(msg.documents[0].authors)
            //평점 (인원)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(11) > a > .fig4_text > .fig4_mark").append("(24)") 
            //평균점수 (평균)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(11) > a > .fig4_text > .fig4_mark > .fig4_number").append("4.8")

            //css
            $(".fig4_bookimg img").attr("width","180");
            $(".fig4_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
            $(".fig4_text > .fig4_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

            $(".fig4_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
            $(".fig4_mark").css({"fontSize":"13px","color":"#787878"})
            $(".fig4_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



        });


    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "당신 엄마가 당신보다 잘하는 게임"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })
        .done(function (msg) {
            console.log(msg);

            //이미지
            $(".fig4_ul > .fig4_columnbox:nth-of-type(12) > a > .fig4_bookimg").append("<img src='" + msg.documents[0].thumbnail + "'/>")
            $(".fig4_ul > .fig4_columnbox:nth-of-type(12) > a > .fig4_text > h3").append('<a href="#">'+msg.documents[0].title+'</a>')
            $(".fig4_ul > .fig4_columnbox:nth-of-type(12) > a > .fig4_text > .fig4_name").append(msg.documents[0].authors)
            //평점 (인원)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(12) > a > .fig4_text > .fig4_mark").append("(1)") 
            //평균점수 (평균)
            $(".fig4_ul > .fig4_columnbox:nth-of-type(12) > a > .fig4_text > .fig4_mark > .fig4_number").append("0.2")

            //css
            $(".fig4_bookimg img").attr("width","180");
            $(".fig4_text > h3 > a").css({"fontSize":"16px","fontWeight":"500","color":"#141414"});
            $(".fig4_text > .fig4_name").css({"color":"#787878","fontSize":"14px","margin-top":"10px","margin-bottom":"10px"});

            $(".fig4_mark > svg").css({"color":"#DC3232","fontSize":"11px"})
            $(".fig4_mark").css({"fontSize":"13px","color":"#787878"})
            $(".fig4_mark > .fig4_number").css({"fontSize":"13px","color":"#DC3232"})



        });
});	