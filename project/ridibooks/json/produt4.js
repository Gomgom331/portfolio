$(document).ready(function(){

 //-------------------베스트 셀러 1column-------------------//

    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "물고기는 존재하지 않는다" },
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })
    
    .done(function(msg){
        console.log(msg);

            //1 cloumn 이미지
            $(".fig5_category_ul > ol:nth-of-type(1) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_bookimg")
                .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

            //번호

            $(".fig5_category_ul > ol:nth-of-type(1) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booknumber > span")
                .append("1");

            //제목

            $(".fig5_category_ul > ol:nth-of-type(1) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_bookname > a")
                .append(msg.documents[0].title);

            //이름
            $(".fig5_category_ul > ol:nth-of-type(1) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_name > a")
                .append(msg.documents[0].authors);

            //총점
            $(".fig5_category_ul > ol:nth-of-type(1) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_grades")
                .append("4.5")

            //총점 인원수
            $(".fig5_category_ul > ol:nth-of-type(1) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_people")
                .append("(132)")

            //-----------css-----------//

            //이미지//
            $(".fig5_bookimg > a > img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

            //순서//
            $(".fig5_bookbox > .fig5_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

            //제목//
            $(".fig5_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

            //이름//
            $(".fig5_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


            //별모양
            $(".fig5_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

            //총점//
            $(".fig5_grades").css({ "color": "#DC3232", "fontSize": "13px" })

            //총점인원수//
            $(".fig5_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

    })


    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "불편한 편의점" },
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })
    
    .done(function(msg){
        console.log(msg);

            //1 cloumn 이미지
            $(".fig5_category_ul > ol:nth-of-type(1) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_bookimg")
                .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

            //번호

            $(".fig5_category_ul > ol:nth-of-type(1) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booknumber > span")
                .append("2");

            //제목

            $(".fig5_category_ul > ol:nth-of-type(1) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_bookname > a")
                .append(msg.documents[0].title);

            //이름
            $(".fig5_category_ul > ol:nth-of-type(1) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_name > a")
                .append(msg.documents[0].authors);

            //총점
            $(".fig5_category_ul > ol:nth-of-type(1) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_grades")
                .append("4.7")

            //총점 인원수
            $(".fig5_category_ul > ol:nth-of-type(1) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_people")
                .append("(581)")

            //-----------css-----------//

            //이미지//
            $(".fig5_bookimg > a > img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

            //순서//
            $(".fig5_bookbox > .fig5_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

            //제목//
            $(".fig5_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

            //이름//
            $(".fig5_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


            //별모양
            $(".fig5_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

            //총점//
            $(".fig5_grades").css({ "color": "#DC3232", "fontSize": "13px" })

            //총점인원수//
            $(".fig5_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

    })


    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "사람이 있었네" },
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
    })
    
    .done(function(msg){
        console.log(msg);

            //1 cloumn 이미지
            $(".fig5_category_ul > ol:nth-of-type(1) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_bookimg")
                .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

            //번호

            $(".fig5_category_ul > ol:nth-of-type(1) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booknumber > span")
                .append("3");

            //제목

            $(".fig5_category_ul > ol:nth-of-type(1) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_bookname > a")
                .append(msg.documents[0].title);

            //이름
            $(".fig5_category_ul > ol:nth-of-type(1) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_name > a")
                .append(msg.documents[0].authors);

            //총점
            $(".fig5_category_ul > ol:nth-of-type(1) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_grades")
                .append("5.0")

            //총점 인원수
            $(".fig5_category_ul > ol:nth-of-type(1) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_people")
                .append("(21)")

            //-----------css-----------//

            //이미지//
            $(".fig5_bookimg > a > img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

            //순서//
            $(".fig5_bookbox > .fig5_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

            //제목//
            $(".fig5_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

            //이름//
            $(".fig5_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


            //별모양
            $(".fig5_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

            //총점//
            $(".fig5_grades").css({ "color": "#DC3232", "fontSize": "13px" })

            //총점인원수//
            $(".fig5_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

    })

 //-------------------베스트 셀러 2column-------------------//


 $.ajax({
    method: "get",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "삶이 던지는 질문은 언제나 같다" },
    headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
})

.done(function(msg){
    console.log(msg);

        //1 cloumn 이미지
        $(".fig5_category_ul > ol:nth-of-type(2) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_bookimg")
            .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

        //번호

        $(".fig5_category_ul > ol:nth-of-type(2) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booknumber > span")
            .append("4");

        //제목

        $(".fig5_category_ul > ol:nth-of-type(2) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_bookname > a")
            .append(msg.documents[0].title);

        //이름
        $(".fig5_category_ul > ol:nth-of-type(2) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_name > a")
            .append(msg.documents[0].authors);

        //총점
        $(".fig5_category_ul > ol:nth-of-type(2) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_grades")
            .append("4.4")

        //총점 인원수
        $(".fig5_category_ul > ol:nth-of-type(2) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_people")
            .append("(10)")

        //-----------css-----------//

        //이미지//
        $(".fig5_bookimg > a > img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

        //순서//
        $(".fig5_bookbox > .fig5_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

        //제목//
        $(".fig5_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

        //이름//
        $(".fig5_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


        //별모양
        $(".fig5_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

        //총점//
        $(".fig5_grades").css({ "color": "#DC3232", "fontSize": "13px" })

        //총점인원수//
        $(".fig5_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

})


$.ajax({
    method: "get",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "하얀늑대들" },
    headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
})

.done(function(msg){
    console.log(msg);

        //1 cloumn 이미지
        $(".fig5_category_ul > ol:nth-of-type(2) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_bookimg")
            .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

        //번호

        $(".fig5_category_ul > ol:nth-of-type(2) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booknumber > span")
            .append("5");

        //제목

        $(".fig5_category_ul > ol:nth-of-type(2) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_bookname > a")
            .append(msg.documents[0].title);

        //이름
        $(".fig5_category_ul > ol:nth-of-type(2) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_name > a")
            .append(msg.documents[0].authors);

        //총점
        $(".fig5_category_ul > ol:nth-of-type(2) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_grades")
            .append("4.7")

        //총점 인원수
        $(".fig5_category_ul > ol:nth-of-type(2) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_people")
            .append("(3,443)")

        //-----------css-----------//

        //이미지//
        $(".fig5_bookimg > a > img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

        //순서//
        $(".fig5_bookbox > .fig5_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

        //제목//
        $(".fig5_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

        //이름//
        $(".fig5_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


        //별모양
        $(".fig5_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

        //총점//
        $(".fig5_grades").css({ "color": "#DC3232", "fontSize": "13px" })

        //총점인원수//
        $(".fig5_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

})


$.ajax({
    method: "get",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "달러구트 꿈 백화점2" },
    headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
})

.done(function(msg){
    console.log(msg);

        //1 cloumn 이미지
        $(".fig5_category_ul > ol:nth-of-type(2) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_bookimg")
            .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

        //번호

        $(".fig5_category_ul > ol:nth-of-type(2) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booknumber > span")
            .append("6");

        //제목

        $(".fig5_category_ul > ol:nth-of-type(2) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_bookname > a")
            .append(msg.documents[0].title);

        //이름
        $(".fig5_category_ul > ol:nth-of-type(2) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_name > a")
            .append(msg.documents[0].authors);

        //총점
        $(".fig5_category_ul > ol:nth-of-type(2) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_grades")
            .append("4.7")

        //총점 인원수
        $(".fig5_category_ul > ol:nth-of-type(2) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_people")
            .append("(557)")

        //-----------css-----------//

        //이미지//
        $(".fig5_bookimg > a > img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

        //순서//
        $(".fig5_bookbox > .fig5_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

        //제목//
        $(".fig5_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

        //이름//
        $(".fig5_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


        //별모양
        $(".fig5_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

        //총점//
        $(".fig5_grades").css({ "color": "#DC3232", "fontSize": "13px" })

        //총점인원수//
        $(".fig5_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

})

 //-------------------베스트 셀러 2column-------------------//



 $.ajax({
    method: "get",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "이어령의 마지막 수업" },
    headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
})

.done(function(msg){
    console.log(msg);

        //1 cloumn 이미지
        $(".fig5_category_ul > ol:nth-of-type(3) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_bookimg")
            .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

        //번호

        $(".fig5_category_ul > ol:nth-of-type(3) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booknumber > span")
            .append("7");

        //제목

        $(".fig5_category_ul > ol:nth-of-type(3) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_bookname > a")
            .append(msg.documents[0].title);

        //이름
        $(".fig5_category_ul > ol:nth-of-type(3) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_name > a")
            .append(msg.documents[0].authors);

        //총점
        $(".fig5_category_ul > ol:nth-of-type(3) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_grades")
            .append("4.8")

        //총점 인원수
        $(".fig5_category_ul > ol:nth-of-type(3) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_people")
            .append("(67)")

        //-----------css-----------//

        //이미지//
        $(".fig5_bookimg > a > img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

        //순서//
        $(".fig5_bookbox > .fig5_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

        //제목//
        $(".fig5_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

        //이름//
        $(".fig5_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


        //별모양
        $(".fig5_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

        //총점//
        $(".fig5_grades").css({ "color": "#DC3232", "fontSize": "13px" })

        //총점인원수//
        $(".fig5_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

})


$.ajax({
    method: "get",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "어서 오세요, 휴남동 서점입니다" },
    headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
})

.done(function(msg){
    console.log(msg);

        //1 cloumn 이미지
        $(".fig5_category_ul > ol:nth-of-type(3) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_bookimg")
            .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

        //번호

        $(".fig5_category_ul > ol:nth-of-type(3) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booknumber > span")
            .append("8");

        //제목

        $(".fig5_category_ul > ol:nth-of-type(3) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_bookname > a")
            .append(msg.documents[0].title);

        //이름
        $(".fig5_category_ul > ol:nth-of-type(3) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_name > a")
            .append(msg.documents[0].authors);

        //총점
        $(".fig5_category_ul > ol:nth-of-type(3) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_grades")
            .append("4.9")

        //총점 인원수
        $(".fig5_category_ul > ol:nth-of-type(3) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_people")
            .append("(15)")

        //-----------css-----------//

        //이미지//
        $(".fig5_bookimg > a > img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

        //순서//
        $(".fig5_bookbox > .fig5_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

        //제목//
        $(".fig5_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

        //이름//
        $(".fig5_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


        //별모양
        $(".fig5_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

        //총점//
        $(".fig5_grades").css({ "color": "#DC3232", "fontSize": "13px" })

        //총점인원수//
        $(".fig5_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

})


$.ajax({
    method: "get",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "H마트에서 울다" },
    headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
})

.done(function(msg){
    console.log(msg);

        //1 cloumn 이미지
        $(".fig5_category_ul > ol:nth-of-type(3) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_bookimg")
            .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

        //번호

        $(".fig5_category_ul > ol:nth-of-type(3) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booknumber > span")
            .append("9");

        //제목

        $(".fig5_category_ul > ol:nth-of-type(3) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_bookname > a")
            .append(msg.documents[0].title);

        //이름
        $(".fig5_category_ul > ol:nth-of-type(3) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_name > a")
            .append(msg.documents[0].authors);

        //총점
        $(".fig5_category_ul > ol:nth-of-type(3) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_grades")
            .append("4.8")

        //총점 인원수
        $(".fig5_category_ul > ol:nth-of-type(3) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_people")
            .append("(15)")

        //-----------css-----------//

        //이미지//
        $(".fig5_bookimg > a > img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

        //순서//
        $(".fig5_bookbox > .fig5_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

        //제목//
        $(".fig5_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

        //이름//
        $(".fig5_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


        //별모양
        $(".fig5_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

        //총점//
        $(".fig5_grades").css({ "color": "#DC3232", "fontSize": "13px" })

        //총점인원수//
        $(".fig5_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

})











 //-------------------베스트 셀러 4column-------------------//

 $.ajax({
    method: "get",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "묘사의 힘" },
    headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
})

.done(function(msg){
    console.log(msg);

        //1 cloumn 이미지
        $(".fig5_category_ul > ol:nth-of-type(4) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_bookimg")
            .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

        //번호

        $(".fig5_category_ul > ol:nth-of-type(4) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booknumber > span")
            .append("10");

        //제목

        $(".fig5_category_ul > ol:nth-of-type(4) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_bookname > a")
            .append(msg.documents[0].title);

        //이름
        $(".fig5_category_ul > ol:nth-of-type(4) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_name > a")
            .append(msg.documents[0].authors);

        //총점
        $(".fig5_category_ul > ol:nth-of-type(4) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_grades")
            .append("4.6")

        //총점 인원수
        $(".fig5_category_ul > ol:nth-of-type(4) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_people")
            .append("(35)")

        //-----------css-----------//

        //이미지//
        $(".fig5_bookimg > a > img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

        //순서//
        $(".fig5_bookbox > .fig5_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

        //제목//
        $(".fig5_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

        //이름//
        $(".fig5_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


        //별모양
        $(".fig5_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

        //총점//
        $(".fig5_grades").css({ "color": "#DC3232", "fontSize": "13px" })

        //총점인원수//
        $(".fig5_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

})


$.ajax({
    method: "get",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "럭키 드로우" },
    headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
})

.done(function(msg){
    console.log(msg);

        //1 cloumn 이미지
        $(".fig5_category_ul > ol:nth-of-type(4) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_bookimg")
            .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

        //번호

        $(".fig5_category_ul > ol:nth-of-type(4) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booknumber > span")
            .append("11");

        //제목

        $(".fig5_category_ul > ol:nth-of-type(4) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_bookname > a")
            .append(msg.documents[0].title);

        //이름
        $(".fig5_category_ul > ol:nth-of-type(4) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_name > a")
            .append(msg.documents[0].authors);

        //총점
        $(".fig5_category_ul > ol:nth-of-type(4) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_grades")
            .append("4.5")

        //총점 인원수
        $(".fig5_category_ul > ol:nth-of-type(4) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_people")
            .append("(50)")

        //-----------css-----------//

        //이미지//
        $(".fig5_bookimg > a > img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

        //순서//
        $(".fig5_bookbox > .fig5_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

        //제목//
        $(".fig5_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

        //이름//
        $(".fig5_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


        //별모양
        $(".fig5_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

        //총점//
        $(".fig5_grades").css({ "color": "#DC3232", "fontSize": "13px" })

        //총점인원수//
        $(".fig5_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

})


$.ajax({
    method: "get",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "프로젝트 헤일메리" },
    headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
})

.done(function(msg){
    console.log(msg);

        //1 cloumn 이미지
        $(".fig5_category_ul > ol:nth-of-type(4) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_bookimg")
            .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

        //번호

        $(".fig5_category_ul > ol:nth-of-type(4) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booknumber > span")
            .append("12");

        //제목

        $(".fig5_category_ul > ol:nth-of-type(4) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_bookname > a")
            .append(msg.documents[0].title);

        //이름
        $(".fig5_category_ul > ol:nth-of-type(4) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_name > a")
            .append(msg.documents[0].authors);

        //총점
        $(".fig5_category_ul > ol:nth-of-type(4) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_grades")
            .append("4.8")

        //총점 인원수
        $(".fig5_category_ul > ol:nth-of-type(4) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_people")
            .append("(1,250)")

        //-----------css-----------//

        //이미지//
        $(".fig5_bookimg > a > img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

        //순서//
        $(".fig5_bookbox > .fig5_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

        //제목//
        $(".fig5_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

        //이름//
        $(".fig5_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


        //별모양
        $(".fig5_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

        //총점//
        $(".fig5_grades").css({ "color": "#DC3232", "fontSize": "13px" })

        //총점인원수//
        $(".fig5_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

})

//-------------------베스트 셀러 5column-------------------//


$.ajax({
method: "get",
url: "https://dapi.kakao.com/v3/search/book?target=title",
data: { query: "한자와 나오키 1" },
headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
})

.done(function(msg){
console.log(msg);

    //1 cloumn 이미지
    $(".fig5_category_ul > ol:nth-of-type(5) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_bookimg")
        .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

    //번호

    $(".fig5_category_ul > ol:nth-of-type(5) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booknumber > span")
        .append("13");

    //제목

    $(".fig5_category_ul > ol:nth-of-type(5) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_bookname > a")
        .append(msg.documents[0].title);

    //이름
    $(".fig5_category_ul > ol:nth-of-type(5) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_name > a")
        .append(msg.documents[0].authors);

    //총점
    $(".fig5_category_ul > ol:nth-of-type(5) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_grades")
        .append("4.4")

    //총점 인원수
    $(".fig5_category_ul > ol:nth-of-type(5) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_people")
        .append("(511)")

    //-----------css-----------//

    //이미지//
    $(".fig5_bookimg > a > img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

    //순서//
    $(".fig5_bookbox > .fig5_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

    //제목//
    $(".fig5_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

    //이름//
    $(".fig5_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


    //별모양
    $(".fig5_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

    //총점//
    $(".fig5_grades").css({ "color": "#DC3232", "fontSize": "13px" })

    //총점인원수//
    $(".fig5_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

})


$.ajax({
method: "get",
url: "https://dapi.kakao.com/v3/search/book?target=title",
data: { query: "악의 마음을 읽는 자들" },
headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
})

.done(function(msg){
console.log(msg);

    //1 cloumn 이미지
    $(".fig5_category_ul > ol:nth-of-type(5) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_bookimg")
        .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

    //번호

    $(".fig5_category_ul > ol:nth-of-type(5) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booknumber > span")
        .append("14");

    //제목

    $(".fig5_category_ul > ol:nth-of-type(5) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_bookname > a")
        .append(msg.documents[0].title);

    //이름
    $(".fig5_category_ul > ol:nth-of-type(5) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_name > a")
        .append(msg.documents[0].authors);

    //총점
    $(".fig5_category_ul > ol:nth-of-type(5) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_grades")
        .append("4.6")

    //총점 인원수
    $(".fig5_category_ul > ol:nth-of-type(5) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_people")
        .append("(614)")

    //-----------css-----------//

    //이미지//
    $(".fig5_bookimg > a > img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

    //순서//
    $(".fig5_bookbox > .fig5_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

    //제목//
    $(".fig5_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

    //이름//
    $(".fig5_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


    //별모양
    $(".fig5_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

    //총점//
    $(".fig5_grades").css({ "color": "#DC3232", "fontSize": "13px" })

    //총점인원수//
    $(".fig5_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

})


$.ajax({
method: "get",
url: "https://dapi.kakao.com/v3/search/book?target=title",
data: { query: "잘 살아라 그게 최고의 복수다" },
headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
})

.done(function(msg){
console.log(msg);

    //1 cloumn 이미지
    $(".fig5_category_ul > ol:nth-of-type(5) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_bookimg")
        .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

    //번호

    $(".fig5_category_ul > ol:nth-of-type(5) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booknumber > span")
        .append("15");

    //제목

    $(".fig5_category_ul > ol:nth-of-type(5) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_bookname > a")
        .append(msg.documents[0].title);

    //이름
    $(".fig5_category_ul > ol:nth-of-type(5) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_name > a")
        .append(msg.documents[0].authors);

    //총점
    $(".fig5_category_ul > ol:nth-of-type(5) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_grades")
        .append("4.8")

    //총점 인원수
    $(".fig5_category_ul > ol:nth-of-type(5) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_people")
        .append("(4)")

    //-----------css-----------//

    //이미지//
    $(".fig5_bookimg > a > img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

    //순서//
    $(".fig5_bookbox > .fig5_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

    //제목//
    $(".fig5_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

    //이름//
    $(".fig5_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


    //별모양
    $(".fig5_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

    //총점//
    $(".fig5_grades").css({ "color": "#DC3232", "fontSize": "13px" })

    //총점인원수//
    $(".fig5_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

})

//-------------------베스트 셀러 6column-------------------//



$.ajax({
method: "get",
url: "https://dapi.kakao.com/v3/search/book?target=title",
data: { query: "확률적 사고의 힘" },
headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
})

.done(function(msg){
console.log(msg);

    //1 cloumn 이미지
    $(".fig5_category_ul > ol:nth-of-type(6) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_bookimg")
        .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

    //번호

    $(".fig5_category_ul > ol:nth-of-type(6) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booknumber > span")
        .append("16");

    //제목

    $(".fig5_category_ul > ol:nth-of-type(6) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_bookname > a")
        .append(msg.documents[0].title);

    //이름
    $(".fig5_category_ul > ol:nth-of-type(6) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_name > a")
        .append(msg.documents[0].authors);

    //총점
    $(".fig5_category_ul > ol:nth-of-type(6) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_grades")
        .append("0.0")

    //총점 인원수
    $(".fig5_category_ul > ol:nth-of-type(6) > .fig5_contents_page:nth-of-type(1) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_people")
        .append("(0)")

    //-----------css-----------//

    //이미지//
    $(".fig5_bookimg > a > img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

    //순서//
    $(".fig5_bookbox > .fig5_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

    //제목//
    $(".fig5_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

    //이름//
    $(".fig5_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


    //별모양
    $(".fig5_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

    //총점//
    $(".fig5_grades").css({ "color": "#DC3232", "fontSize": "13px" })

    //총점인원수//
    $(".fig5_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

})


$.ajax({
method: "get",
url: "https://dapi.kakao.com/v3/search/book?target=title",
data: { query: "마음의 법칙" },
headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
})

.done(function(msg){
console.log(msg);

    //1 cloumn 이미지
    $(".fig5_category_ul > ol:nth-of-type(6) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_bookimg")
        .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

    //번호

    $(".fig5_category_ul > ol:nth-of-type(6) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booknumber > span")
        .append("17");

    //제목

    $(".fig5_category_ul > ol:nth-of-type(6) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_bookname > a")
        .append(msg.documents[0].title);

    //이름
    $(".fig5_category_ul > ol:nth-of-type(6) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_name > a")
        .append(msg.documents[0].authors);

    //총점
    $(".fig5_category_ul > ol:nth-of-type(6) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_grades")
        .append("4.4")

    //총점 인원수
    $(".fig5_category_ul > ol:nth-of-type(6) > .fig5_contents_page:nth-of-type(2) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_people")
        .append("(5)")

    //-----------css-----------//

    //이미지//
    $(".fig5_bookimg > a > img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

    //순서//
    $(".fig5_bookbox > .fig5_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

    //제목//
    $(".fig5_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

    //이름//
    $(".fig5_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


    //별모양
    $(".fig5_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

    //총점//
    $(".fig5_grades").css({ "color": "#DC3232", "fontSize": "13px" })

    //총점인원수//
    $(".fig5_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

})


$.ajax({
method: "get",
url: "https://dapi.kakao.com/v3/search/book?target=title",
data: { query: "우리가 우리를 우리라고 부를 때" },
headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }
})

.done(function(msg){
console.log(msg);

    //1 cloumn 이미지
    $(".fig5_category_ul > ol:nth-of-type(6) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_bookimg")
        .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

    //번호

    $(".fig5_category_ul > ol:nth-of-type(6) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booknumber > span")
        .append("18");

    //제목

    $(".fig5_category_ul > ol:nth-of-type(6) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_bookname > a")
        .append(msg.documents[0].title);

    //이름
    $(".fig5_category_ul > ol:nth-of-type(6) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_name > a")
        .append(msg.documents[0].authors);

    //총점
    $(".fig5_category_ul > ol:nth-of-type(6) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_grades")
        .append("4.8")

    //총점 인원수
    $(".fig5_category_ul > ol:nth-of-type(6) > .fig5_contents_page:nth-of-type(3) > .fig5_ol > .fig5_book > .fig5_bookbox > .fig5_booktitle > .fig5_markbox > p > .fig5_people")
        .append("(28)")

    //-----------css-----------//

    //이미지//
    $(".fig5_bookimg > a > img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

    //순서//
    $(".fig5_bookbox > .fig5_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

    //제목//
    $(".fig5_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

    //이름//
    $(".fig5_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


    //별모양
    $(".fig5_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

    //총점//
    $(".fig5_grades").css({ "color": "#DC3232", "fontSize": "13px" })

    //총점인원수//
    $(".fig5_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

})

});