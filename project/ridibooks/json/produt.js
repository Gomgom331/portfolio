$(document).ready(function () {

    //-------------------오늘 리디의 발견1-------------------//
    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "H마트에서 울다" },
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })
        .done(function (msg) {
            console.log(msg);

            //이미지
            $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(1) > a > .fig2_banner_img > .fig2_banner_book > .fig2_banner_bookimg > .fig2_banner_bookimg2")
                .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
            //소개
            $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(1) > a > .fig2_banner_text")
                .append('<p>' + "세계를 사로잡은 신예 록 뮤지션이" + "<br>" + "털어놓는 가족이야기" + "</p>");
            //제목
            $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(1) > a > .fig2_banner_text")
                .append('<a href="#">' + msg.documents[0].title + "</a>");



            //텍스트 스타일
            $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(1) > a > .fig2_banner_text > p")
                .css({ "fontSize": "16px", "fontWeight": "500", "color": "#141414" });

            $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(1) > a > .fig2_banner_text > a")
                .css({ "fontSize": "14px", "color": "#787878" });

            //배경
            $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(1) > a > .fig2_banner_img > .fig2_banner_bg")
                .css({ "background-color": "#5c1e1d" })
        });


    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "1년 뒤 오늘을 마지막 날로 정해두었습니다" },
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })
        .done(function (msg) {
            console.log(msg);

            //이미지
            $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(2) > a > .fig2_banner_img > .fig2_banner_book > .fig2_banner_bookimg > .fig2_banner_bookimg2")
                .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
            //소개
            $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(2) > a > .fig2_banner_text")
                .append('<p>' + "만약 내 삶이 1년 후 끝난다면?" + "</p>");
            //제목
            $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(2) > a > .fig2_banner_text")
                .append('<a href="#">' + msg.documents[0].title + "</a>");



            //텍스트 스타일
            $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(2) > a > .fig2_banner_text > p")
                .css({ "fontSize": "16px", "fontWeight": "500", "color": "#141414" });

            $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(2) > a > .fig2_banner_text > a")
                .css({ "fontSize": "14px", "color": "#787878" });

            //배경
            $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(2) > a > .fig2_banner_img > .fig2_banner_bg")
                .css({ "background-color": "#9f4343" })

        });


        $.ajax({
            method: "get",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "헤르만 헤세, 음악 위에 쓰다"},
            headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    
        })
            .done(function (msg) {
                console.log(msg);
    
                //이미지
                $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(3) > a > .fig2_banner_img > .fig2_banner_book > .fig2_banner_bookimg > .fig2_banner_bookimg2")
                    .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
                //소개
                $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(3) > a > .fig2_banner_text")
                    .append('<p>' + "음악에 대한 헤세가 쓴 글을"+"<br>"+"아우른 최초의 책" + "</p>");
                //제목
                $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(3) > a > .fig2_banner_text")
                    .append('<a href="#">' + msg.documents[0].title + "</a>");
    
    
    
                //텍스트 스타일
                $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(3) > a > .fig2_banner_text > p")
                    .css({ "fontSize": "16px", "fontWeight": "500", "color": "#141414" });
    
                $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(3) > a > .fig2_banner_text > a")
                    .css({ "fontSize": "14px", "color": "#787878" });
    
                //배경
                $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(3) > a > .fig2_banner_img > .fig2_banner_bg")
                    .css({ "background-color": "#1c6868"})
    
            });


                //-------------------오늘 리디의 발견2-------------------//


                $.ajax({
                    method: "get",
                    url: "https://dapi.kakao.com/v3/search/book?target=title",
                    data: { query: "배움의 기쁨" },
                    headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
            
                })
                    .done(function (msg) {
                        console.log(msg);
            
                        //이미지
                        $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(4) > a > .fig2_banner_img > .fig2_banner_book > .fig2_banner_bookimg > .fig2_banner_bookimg2")
                            .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
                        //소개
                        $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(4) > a > .fig2_banner_text")
                            .append('<p>' + "거친 길바닥을 떠나"+"<br>"+"배움의 기쁨을 알게되기까지의 여정" + "</p>");
                        //제목
                        $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(4) > a > .fig2_banner_text")
                            .append('<a href="#">' + msg.documents[0].title + "</a>");
            
            
            
                        //텍스트 스타일
                        $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(4) > a > .fig2_banner_text > p")
                            .css({ "fontSize": "16px", "fontWeight": "500", "color": "#141414" });
            
                        $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(4) > a > .fig2_banner_text > a")
                            .css({ "fontSize": "14px", "color": "#787878" });
            
                        //배경
                        $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(4) > a > .fig2_banner_img > .fig2_banner_bg")
                            .css({ "background-color": "#245c34"})
                    });
            
            
                $.ajax({
                    method: "get",
                    url: "https://dapi.kakao.com/v3/search/book?target=title",
                    data: { query: "마음의 법칙" },
                    headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
            
                })
                    .done(function (msg) {
                        console.log(msg);
            
                        //이미지
                        $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(5) > a > .fig2_banner_img > .fig2_banner_book > .fig2_banner_bookimg > .fig2_banner_bookimg2")
                            .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
                        //소개
                        $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(5) > a > .fig2_banner_text")
                            .append('<p>' + "사람의 마음은 어떻게 작동하는가?" + "</p>");
                        //제목
                        $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(5) > a > .fig2_banner_text")
                            .append('<a href="#">' + msg.documents[0].title + "</a>");
            
            
            
                        //텍스트 스타일
                        $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(5) > a > .fig2_banner_text > p")
                            .css({ "fontSize": "16px", "fontWeight": "500", "color": "#141414" });
            
                        $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(5) > a > .fig2_banner_text > a")
                            .css({ "fontSize": "14px", "color": "#787878"});
            
                        //배경
                        $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(5) > a > .fig2_banner_img > .fig2_banner_bg")
                            .css({ "background-color": "#59352b" })
            
                    });
            
            
                    $.ajax({
                        method: "get",
                        url: "https://dapi.kakao.com/v3/search/book?target=title",
                        data: { query: "메멘토 모리"},
                        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
                
                    })
                        .done(function (msg) {
                            console.log(msg);
                
                            //이미지
                            $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(6) > a > .fig2_banner_img > .fig2_banner_book > .fig2_banner_bookimg > .fig2_banner_bookimg2")
                                .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");
                            //소개
                            $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(6) > a > .fig2_banner_text")
                                .append('<p>' + "시대의 지성 이어령,"+"<br>"+"이병철 회장의 질문에 답하다" + "</p>");
                            //제목
                            $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(6) > a > .fig2_banner_text")
                                .append('<a href="#">' + msg.documents[0].title + "</a>");
                
                
                
                            //텍스트 스타일
                            $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(6) > a > .fig2_banner_text > p")
                                .css({ "fontSize": "16px", "fontWeight": "500", "color": "#141414" });
                
                            $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(6) > a > .fig2_banner_text > a")
                                .css({ "fontSize": "14px", "color": "#787878" });
                
                            //배경
                            $(".fig2_banner_ul > .fig2_banner_li:nth-of-type(6) > a > .fig2_banner_img > .fig2_banner_bg")
                                .css({ "background-color": "#413631"})
                
                        });


});	