$(document).ready(function () {


    //-----------------지금 많이 읽고 있는책/베스트셀러---------------------//
    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "달러구트 꿈 백화점2" },
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })

        .done(function (msg) {
            console.log(msg);

            //1 cloumn 이미지
            $(".fig3_category_ul > ol:nth-of-type(1) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_bookimg")
                .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

            //번호

            $(".fig3_category_ul > ol:nth-of-type(1) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booknumber > span")
                .append("1");

            //제목

            $(".fig3_category_ul > ol:nth-of-type(1) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_bookname > a")
                .append(msg.documents[0].title);

            //이름
            $(".fig3_category_ul > ol:nth-of-type(1) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_name > a")
                .append(msg.documents[0].authors);

            //총점
            $(".fig3_category_ul > ol:nth-of-type(1) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_grades")
                .append("4.7")

            //총점 인원수
            $(".fig3_category_ul > ol:nth-of-type(1) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_people")
                .append("(557)")

            //-----------css-----------//

            //이미지//
            $(".fig3_bookimg > a> img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

            //순서//
            $(".fig3_bookbox > .fig3_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

            //제목//
            $(".fig3_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

            //이름//
            $(".fig3_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


            //별모양
            $(".fig3_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

            //총점//
            $(".fig3_grades").css({ "color": "#DC3232", "fontSize": "13px" })

            //총점인원수//
            $(".fig3_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

        })



    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "해리 포터와 마법사의 돌" },
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })

        .done(function (msg) {
            console.log(msg);

            //1 cloumn 이미지
            $(".fig3_category_ul > ol:nth-of-type(1) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_bookimg")
                .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

            //번호

            $(".fig3_category_ul > ol:nth-of-type(1) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booknumber > span")
                .append("2");

            //제목

            $(".fig3_category_ul > ol:nth-of-type(1) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_bookname > a")
                .append(msg.documents[0].title);

            //이름
            $(".fig3_category_ul > ol:nth-of-type(1) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_name > a")
                .append(msg.documents[0].authors);

            //총점
            $(".fig3_category_ul > ol:nth-of-type(1) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_grades")
                .append("4.8")

            //총점 인원수
            $(".fig3_category_ul > ol:nth-of-type(1) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_people")
                .append("(700)")

            //-----------css-----------//

            //이미지//
            $(".fig3_bookimg > a> img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

            //순서//
            $(".fig3_bookbox > .fig3_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

            //제목//
            $(".fig3_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

            //이름//
            $(".fig3_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


            //별모양
            $(".fig3_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

            //총점//
            $(".fig3_grades").css({ "color": "#DC3232", "fontSize": "13px" })

            //총점인원수//
            $(".fig3_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

        })



    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "하얀 늑대들" },
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })

        .done(function (msg) {
            console.log(msg);

            //1 cloumn 이미지
            $(".fig3_category_ul > ol:nth-of-type(1) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_bookimg")
                .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

            //번호

            $(".fig3_category_ul > ol:nth-of-type(1) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booknumber > span")
                .append("3");

            //제목

            $(".fig3_category_ul > ol:nth-of-type(1) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_bookname > a")
                .append(msg.documents[0].title);

            //이름
            $(".fig3_category_ul > ol:nth-of-type(1) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_name > a")
                .append(msg.documents[0].authors);

            //총점
            $(".fig3_category_ul > ol:nth-of-type(1) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_grades")
                .append("4.5")

            //총점 인원수
            $(".fig3_category_ul > ol:nth-of-type(1) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_people")
                .append("(430)")

            //-----------css-----------//

            //이미지//
            $(".fig3_bookimg > a> img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

            //순서//
            $(".fig3_bookbox > .fig3_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

            //제목//
            $(".fig3_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

            //이름//
            $(".fig3_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


            //별모양
            $(".fig3_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

            //총점//
            $(".fig3_grades").css({ "color": "#DC3232", "fontSize": "13px" })

            //총점인원수//
            $(".fig3_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

        })


    //-----------------2column---------------------//



    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "무의식은 답을 알고있다" },
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })

        .done(function (msg) {
            console.log(msg);

            //1 cloumn 이미지
            $(".fig3_category_ul > ol:nth-of-type(2) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_bookimg")
                .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

            //번호

            $(".fig3_category_ul > ol:nth-of-type(2) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booknumber > span")
                .append("4");

            //제목

            $(".fig3_category_ul > ol:nth-of-type(2) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_bookname > a")
                .append(msg.documents[0].title);

            //이름
            $(".fig3_category_ul > ol:nth-of-type(2) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_name > a")
                .append(msg.documents[0].authors);

            //총점
            $(".fig3_category_ul > ol:nth-of-type(2) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_grades")
                .append("4.2")

            //총점 인원수
            $(".fig3_category_ul > ol:nth-of-type(2) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_people")
                .append("(211)")

            //-----------css-----------//

            //이미지//
            $(".fig3_bookimg > a> img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

            //순서//
            $(".fig3_bookbox > .fig3_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

            //제목//
            $(".fig3_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

            //이름//
            $(".fig3_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


            //별모양
            $(".fig3_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

            //총점//
            $(".fig3_grades").css({ "color": "#DC3232", "fontSize": "13px" })

            //총점인원수//
            $(".fig3_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

        })



    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "타이탄의 도구들" },
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })

        .done(function (msg) {
            console.log(msg);

            //1 cloumn 이미지
            $(".fig3_category_ul > ol:nth-of-type(2) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_bookimg")
                .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

            //번호

            $(".fig3_category_ul > ol:nth-of-type(2) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booknumber > span")
                .append("5");

            //제목

            $(".fig3_category_ul > ol:nth-of-type(2) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_bookname > a")
                .append(msg.documents[0].title);

            //이름
            $(".fig3_category_ul > ol:nth-of-type(2) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_name > a")
                .append(msg.documents[0].authors);

            //총점
            $(".fig3_category_ul > ol:nth-of-type(2) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_grades")
                .append("4.1")

            //총점 인원수
            $(".fig3_category_ul > ol:nth-of-type(2) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_people")
                .append("(95)")

            //-----------css-----------//

            //이미지//
            $(".fig3_bookimg > a> img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

            //순서//
            $(".fig3_bookbox > .fig3_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

            //제목//
            $(".fig3_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

            //이름//
            $(".fig3_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


            //별모양
            $(".fig3_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

            //총점//
            $(".fig3_grades").css({ "color": "#DC3232", "fontSize": "13px" })

            //총점인원수//
            $(".fig3_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

        })



    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "럭키 드로우" },
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })

        .done(function (msg) {
            console.log(msg);

            //1 cloumn 이미지
            $(".fig3_category_ul > ol:nth-of-type(2) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_bookimg")
                .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

            //번호

            $(".fig3_category_ul > ol:nth-of-type(2) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booknumber > span")
                .append("6");

            //제목

            $(".fig3_category_ul > ol:nth-of-type(2) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_bookname > a")
                .append(msg.documents[0].title);

            //이름
            $(".fig3_category_ul > ol:nth-of-type(2) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_name > a")
                .append(msg.documents[0].authors);

            //총점
            $(".fig3_category_ul > ol:nth-of-type(2) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_grades")
                .append("4.3")

            //총점 인원수
            $(".fig3_category_ul > ol:nth-of-type(2) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_people")
                .append("(97)")

            //-----------css-----------//

            //이미지//
            $(".fig3_bookimg > a> img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

            //순서//
            $(".fig3_bookbox > .fig3_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

            //제목//
            $(".fig3_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

            //이름//
            $(".fig3_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


            //별모양
            $(".fig3_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

            //총점//
            $(".fig3_grades").css({ "color": "#DC3232", "fontSize": "13px" })

            //총점인원수//
            $(".fig3_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

        })


    //-----------------3column---------------------//



    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "프로젝트 헤일메리"},
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })

        .done(function (msg) {
            console.log(msg);

            //1 cloumn 이미지
            $(".fig3_category_ul > ol:nth-of-type(3) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_bookimg")
                .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

            //번호

            $(".fig3_category_ul > ol:nth-of-type(3) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booknumber > span")
                .append("7");

            //제목

            $(".fig3_category_ul > ol:nth-of-type(3) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_bookname > a")
                .append(msg.documents[0].title);

            //이름
            $(".fig3_category_ul > ol:nth-of-type(3) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_name > a")
                .append(msg.documents[0].authors);

            //총점
            $(".fig3_category_ul > ol:nth-of-type(3) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_grades")
                .append("4.1")

            //총점 인원수
            $(".fig3_category_ul > ol:nth-of-type(3) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_people")
                .append("(57)")

            //-----------css-----------//

            //이미지//
            $(".fig3_bookimg > a> img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

            //순서//
            $(".fig3_bookbox > .fig3_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

            //제목//
            $(".fig3_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

            //이름//
            $(".fig3_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


            //별모양
            $(".fig3_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

            //총점//
            $(".fig3_grades").css({ "color": "#DC3232", "fontSize": "13px" })

            //총점인원수//
            $(".fig3_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

        })



    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "불편한 편의점" },
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })

        .done(function (msg) {
            console.log(msg);

            //1 cloumn 이미지
            $(".fig3_category_ul > ol:nth-of-type(3) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_bookimg")
                .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

            //번호

            $(".fig3_category_ul > ol:nth-of-type(3) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booknumber > span")
                .append("8");

            //제목

            $(".fig3_category_ul > ol:nth-of-type(3) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_bookname > a")
                .append(msg.documents[0].title);

            //이름
            $(".fig3_category_ul > ol:nth-of-type(3) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_name > a")
                .append(msg.documents[0].authors);

            //총점
            $(".fig3_category_ul > ol:nth-of-type(3) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_grades")
                .append("4.6")

            //총점 인원수
            $(".fig3_category_ul > ol:nth-of-type(3) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_people")
                .append("(180)")

            //-----------css-----------//

            //이미지//
            $(".fig3_bookimg > a> img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

            //순서//
            $(".fig3_bookbox > .fig3_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

            //제목//
            $(".fig3_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

            //이름//
            $(".fig3_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


            //별모양
            $(".fig3_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

            //총점//
            $(".fig3_grades").css({ "color": "#DC3232", "fontSize": "13px" })

            //총점인원수//
            $(".fig3_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

        })



    $.ajax({
        method: "get",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "물고기는 존재하지 않는다" },
        headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

    })

        .done(function (msg) {
            console.log(msg);

            //1 cloumn 이미지
            $(".fig3_category_ul > ol:nth-of-type(3) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_bookimg")
                .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

            //번호

            $(".fig3_category_ul > ol:nth-of-type(3) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booknumber > span")
                .append("9");

            //제목

            $(".fig3_category_ul > ol:nth-of-type(3) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_bookname > a")
                .append(msg.documents[0].title);

            //이름
            $(".fig3_category_ul > ol:nth-of-type(3) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_name > a")
                .append(msg.documents[0].authors);

            //총점
            $(".fig3_category_ul > ol:nth-of-type(3) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_grades")
                .append("4.3")

            //총점 인원수
            $(".fig3_category_ul > ol:nth-of-type(3) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_people")
                .append("(234)")

            //-----------css-----------//

            //이미지//
            $(".fig3_bookimg > a> img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

            //순서//
            $(".fig3_bookbox > .fig3_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

            //제목//
            $(".fig3_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

            //이름//
            $(".fig3_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


            //별모양
            $(".fig3_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

            //총점//
            $(".fig3_grades").css({ "color": "#DC3232", "fontSize": "13px" })

            //총점인원수//
            $(".fig3_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

        })





//-------------------------------------------------------------2page--------------------------------------------------------------//


$.ajax({
    method: "get",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "듄 1권" },
    headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

})

    .done(function (msg) {
        console.log(msg);

        //1 cloumn 이미지
        $(".fig3_category_ul > ol:nth-of-type(4) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_bookimg")
            .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

        //번호

        $(".fig3_category_ul > ol:nth-of-type(4) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booknumber > span")
            .append("10");

        //제목

        $(".fig3_category_ul > ol:nth-of-type(4) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_bookname > a")
            .append(msg.documents[0].title);

        //이름
        $(".fig3_category_ul > ol:nth-of-type(4) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_name > a")
            .append(msg.documents[0].authors);

        //총점
        $(".fig3_category_ul > ol:nth-of-type(4) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_grades")
            .append("4.7")

        //총점 인원수
        $(".fig3_category_ul > ol:nth-of-type(4) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_people")
            .append("(557)")

        //-----------css-----------//

        //이미지//
        $(".fig3_bookimg > a> img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

        //순서//
        $(".fig3_bookbox > .fig3_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

        //제목//
        $(".fig3_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

        //이름//
        $(".fig3_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


        //별모양
        $(".fig3_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

        //총점//
        $(".fig3_grades").css({ "color": "#DC3232", "fontSize": "13px" })

        //총점인원수//
        $(".fig3_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

    })



$.ajax({
    method: "get",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "신경끄기의 기술" },
    headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

})

    .done(function (msg) {
        console.log(msg);

        //1 cloumn 이미지
        $(".fig3_category_ul > ol:nth-of-type(4) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_bookimg")
            .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

        //번호

        $(".fig3_category_ul > ol:nth-of-type(4) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booknumber > span")
            .append("11");

        //제목

        $(".fig3_category_ul > ol:nth-of-type(4) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_bookname > a")
            .append(msg.documents[0].title);

        //이름
        $(".fig3_category_ul > ol:nth-of-type(4) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_name > a")
            .append(msg.documents[0].authors);

        //총점
        $(".fig3_category_ul > ol:nth-of-type(4) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_grades")
            .append("4.8")

        //총점 인원수
        $(".fig3_category_ul > ol:nth-of-type(4) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_people")
            .append("(700)")

        //-----------css-----------//

        //이미지//
        $(".fig3_bookimg > a> img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

        //순서//
        $(".fig3_bookbox > .fig3_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

        //제목//
        $(".fig3_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

        //이름//
        $(".fig3_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


        //별모양
        $(".fig3_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

        //총점//
        $(".fig3_grades").css({ "color": "#DC3232", "fontSize": "13px" })

        //총점인원수//
        $(".fig3_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

    })



$.ajax({
    method: "get",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "10년 후 100배 오를 암호화폐에 투자하라" },
    headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

})

    .done(function (msg) {
        console.log(msg);

        //1 cloumn 이미지
        $(".fig3_category_ul > ol:nth-of-type(4) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_bookimg")
            .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

        //번호

        $(".fig3_category_ul > ol:nth-of-type(4) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booknumber > span")
            .append("12");

        //제목

        $(".fig3_category_ul > ol:nth-of-type(4) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_bookname > a")
            .append(msg.documents[0].title);

        //이름
        $(".fig3_category_ul > ol:nth-of-type(4) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_name > a")
            .append(msg.documents[0].authors);

        //총점
        $(".fig3_category_ul > ol:nth-of-type(4) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_grades")
            .append("4.5")

        //총점 인원수
        $(".fig3_category_ul > ol:nth-of-type(4) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_people")
            .append("(430)")

        //-----------css-----------//

        //이미지//
        $(".fig3_bookimg > a> img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

        //순서//
        $(".fig3_bookbox > .fig3_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

        //제목//
        $(".fig3_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

        //이름//
        $(".fig3_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


        //별모양
        $(".fig3_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

        //총점//
        $(".fig3_grades").css({ "color": "#DC3232", "fontSize": "13px" })

        //총점인원수//
        $(".fig3_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

    })


//-----------------2column---------------------//



$.ajax({
    method: "get",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "악의 마음을 읽는 자들" },
    headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

})

    .done(function (msg) {
        console.log(msg);

        //1 cloumn 이미지
        $(".fig3_category_ul > ol:nth-of-type(5) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_bookimg")
            .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

        //번호

        $(".fig3_category_ul > ol:nth-of-type(5) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booknumber > span")
            .append("13");

        //제목

        $(".fig3_category_ul > ol:nth-of-type(5) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_bookname > a")
            .append(msg.documents[0].title);

        //이름
        $(".fig3_category_ul > ol:nth-of-type(5) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_name > a")
            .append(msg.documents[0].authors);

        //총점
        $(".fig3_category_ul > ol:nth-of-type(5) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_grades")
            .append("4.2")

        //총점 인원수
        $(".fig3_category_ul > ol:nth-of-type(5) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_people")
            .append("(211)")

        //-----------css-----------//

        //이미지//
        $(".fig3_bookimg > a> img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

        //순서//
        $(".fig3_bookbox > .fig3_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

        //제목//
        $(".fig3_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

        //이름//
        $(".fig3_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


        //별모양
        $(".fig3_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

        //총점//
        $(".fig3_grades").css({ "color": "#DC3232", "fontSize": "13px" })

        //총점인원수//
        $(".fig3_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

    })



$.ajax({
    method: "get",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "내 마음을 나도 모를 때"},
    headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

})

    .done(function (msg) {
        console.log(msg);

        //1 cloumn 이미지
        $(".fig3_category_ul > ol:nth-of-type(5) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_bookimg")
            .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

        //번호

        $(".fig3_category_ul > ol:nth-of-type(5) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booknumber > span")
            .append("14");

        //제목

        $(".fig3_category_ul > ol:nth-of-type(5) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_bookname > a")
            .append(msg.documents[0].title);

        //이름
        $(".fig3_category_ul > ol:nth-of-type(5) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_name > a")
            .append(msg.documents[0].authors);

        //총점
        $(".fig3_category_ul > ol:nth-of-type(5) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_grades")
            .append("4.1")

        //총점 인원수
        $(".fig3_category_ul > ol:nth-of-type(5) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_people")
            .append("(95)")

        //-----------css-----------//

        //이미지//
        $(".fig3_bookimg > a> img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

        //순서//
        $(".fig3_bookbox > .fig3_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

        //제목//
        $(".fig3_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

        //이름//
        $(".fig3_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


        //별모양
        $(".fig3_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

        //총점//
        $(".fig3_grades").css({ "color": "#DC3232", "fontSize": "13px" })

        //총점인원수//
        $(".fig3_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

    })



$.ajax({
    method: "get",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "이화 한국어 3-1" },
    headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

})

    .done(function (msg) {
        console.log(msg);

        //1 cloumn 이미지
        $(".fig3_category_ul > ol:nth-of-type(5) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_bookimg")
            .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

        //번호

        $(".fig3_category_ul > ol:nth-of-type(5) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booknumber > span")
            .append("15");

        //제목

        $(".fig3_category_ul > ol:nth-of-type(5) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_bookname > a")
            .append(msg.documents[0].title);

        //이름
        $(".fig3_category_ul > ol:nth-of-type(5) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_name > a")
            .append(msg.documents[0].authors);

        //총점
        $(".fig3_category_ul > ol:nth-of-type(5) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_grades")
            .append("4.3")

        //총점 인원수
        $(".fig3_category_ul > ol:nth-of-type(5) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_people")
            .append("(97)")

        //-----------css-----------//

        //이미지//
        $(".fig3_bookimg > a> img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

        //순서//
        $(".fig3_bookbox > .fig3_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

        //제목//
        $(".fig3_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

        //이름//
        $(".fig3_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


        //별모양
        $(".fig3_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

        //총점//
        $(".fig3_grades").css({ "color": "#DC3232", "fontSize": "13px" })

        //총점인원수//
        $(".fig3_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

    })


//-----------------3column---------------------//



$.ajax({
    method: "get",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "기묘한 러브레터"},
    headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

})

    .done(function (msg) {
        console.log(msg);

        //1 cloumn 이미지
        $(".fig3_category_ul > ol:nth-of-type(6) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_bookimg")
            .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

        //번호

        $(".fig3_category_ul > ol:nth-of-type(6) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booknumber > span")
            .append("16");

        //제목

        $(".fig3_category_ul > ol:nth-of-type(6) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_bookname > a")
            .append(msg.documents[0].title);

        //이름
        $(".fig3_category_ul > ol:nth-of-type(6) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_name > a")
            .append(msg.documents[0].authors);

        //총점
        $(".fig3_category_ul > ol:nth-of-type(6) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_grades")
            .append("4.1")

        //총점 인원수
        $(".fig3_category_ul > ol:nth-of-type(6) > .fig3_contents_page:nth-of-type(1) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_people")
            .append("(57)")

        //-----------css-----------//

        //이미지//
        $(".fig3_bookimg > a> img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

        //순서//
        $(".fig3_bookbox > .fig3_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

        //제목//
        $(".fig3_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

        //이름//
        $(".fig3_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


        //별모양
        $(".fig3_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

        //총점//
        $(".fig3_grades").css({ "color": "#DC3232", "fontSize": "13px" })

        //총점인원수//
        $(".fig3_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

    })



$.ajax({
    method: "get",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "시작의 기술" },
    headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

})

    .done(function (msg) {
        console.log(msg);

        //1 cloumn 이미지
        $(".fig3_category_ul > ol:nth-of-type(6) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_bookimg")
            .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

        //번호

        $(".fig3_category_ul > ol:nth-of-type(6) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booknumber > span")
            .append("17");

        //제목

        $(".fig3_category_ul > ol:nth-of-type(6) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_bookname > a")
            .append(msg.documents[0].title);

        //이름
        $(".fig3_category_ul > ol:nth-of-type(6) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_name > a")
            .append(msg.documents[0].authors);

        //총점
        $(".fig3_category_ul > ol:nth-of-type(6) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_grades")
            .append("4.6")

        //총점 인원수
        $(".fig3_category_ul > ol:nth-of-type(6) > .fig3_contents_page:nth-of-type(2) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_people")
            .append("(180)")

        //-----------css-----------//

        //이미지//
        $(".fig3_bookimg > a> img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

        //순서//
        $(".fig3_bookbox > .fig3_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

        //제목//
        $(".fig3_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

        //이름//
        $(".fig3_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


        //별모양
        $(".fig3_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

        //총점//
        $(".fig3_grades").css({ "color": "#DC3232", "fontSize": "13px" })

        //총점인원수//
        $(".fig3_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

    })



$.ajax({
    method: "get",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "죽여마땅한 사람들" },
    headers: { Authorization: "KakaoAK 140804493baf6a956eb92eb1d1661e4a" }

})

    .done(function (msg) {
        console.log(msg);

        //1 cloumn 이미지
        $(".fig3_category_ul > ol:nth-of-type(6) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_bookimg")
            .append('<a href="#">' + "<img src='" + msg.documents[0].thumbnail + "'/>" + "</a>");

        //번호

        $(".fig3_category_ul > ol:nth-of-type(6) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booknumber > span")
            .append("18");

        //제목

        $(".fig3_category_ul > ol:nth-of-type(6) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_bookname > a")
            .append(msg.documents[0].title);

        //이름
        $(".fig3_category_ul > ol:nth-of-type(6) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_name > a")
            .append(msg.documents[0].authors);

        //총점
        $(".fig3_category_ul > ol:nth-of-type(6) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_grades")
            .append("4.3")

        //총점 인원수
        $(".fig3_category_ul > ol:nth-of-type(6) > .fig3_contents_page:nth-of-type(3) > .fig3_ol > .fig3_book > .fig3_bookbox > .fig3_booktitle > .fig3_markbox > p > .fig3_people")
            .append("(234)")

        //-----------css-----------//

        //이미지//
        $(".fig3_bookimg > a> img").css({ "width": "100%", "height": "100%", "object-fit": "cover", "border-radius": "5px" })

        //순서//
        $(".fig3_bookbox > .fig3_booknumber > span").css({ "fontSize": "18px", "fontWeight": "500", "color": "#141414" })

        //제목//
        $(".fig3_bookname > a").css({ "color": "#141414", "fontSize": "16px", "fontWeight": "500", "overflow": "hidden", "textOverflow": "ellipsis" });

        //이름//
        $(".fig3_name > a").css({ "color": "#787878", "fontSize": "14px", "fontWeight": "400", "lineHeight": "25px" });


        //별모양
        $(".fig3_mark > .starmark").css({ "color": "#DC3232", "fontSize": "11px", "margin": "0 2px 0 0px" })

        //총점//
        $(".fig3_grades").css({ "color": "#DC3232", "fontSize": "13px" })

        //총점인원수//
        $(".fig3_people").css({ "color": "#787878", "fontSize": "13px", "margin": "0 0 0 1px" })

    })






});
