$("#singleCardSpread").click(function () {
    let card = shuffle();
    let num = 0;
    initialization(card); //初始化

    $("#myModalLabel").append("單張牌陣");

    $("<div/>", {
        "class": "col-xs-4 col-sm-4 col-xs-offset-4 col-sm-offset-4",
        "id": "showImage01"
    }).appendTo("#myModalBody");
    $("<img/>", {
        "src": "css/images/tarot/" + card[0][0] + ".jpg",
        "style": "transform: rotate(" + card[1][0] + "deg)",
        "class": "img-responsive"
    }).appendTo("#showImage01");

    $('#myModal').modal('show');

    //補牌
    function plusCard() {
        if (num > 3) {
            return;
        }
        num++;
        if (num === 1) {
            $("#myModalELabel").append("補牌");
        }
        if (num <= 3) {
            $("<div/>", {
                "class": "col-xs-4 col-sm-4",
                "id": `showImagedlc${num}`
            }).appendTo("#myModalExtra");
            $("<img/>", {
                "src": "css/images/tarot/" + card[0][num] + ".jpg",
                "style": "transform: rotate(" + card[1][num] + "deg)",
                "class": "img-responsive"
            }).appendTo(`#showImagedlc${num}`);
            $(`#showImagedlc${num}`).show();
        } else {

        }
    };

    $("#dlcCards").click(plusCard);

    $("#myModalExtra").show();


});

$("#threeCardSpread").click(function () {
    let card = shuffle();
    let num = 0;
    initialization(card);

    $("#myModalLabel").append("三張牌陣");

    for (num = 0; num < 3; num++) {
        drawCard(num)
        console.log(num);
    }

    function drawCard(num) {
        let cardName = cardNames[0][card[0][num].toString()];
        $("<div/>", {
            "class": "col-xs-4 col-sm-4",
            "id": `showImage0${num}`
        }).appendTo("#myModalBody");
        $("<img/>", {
            "src": "css/images/tarot/" + card[0][num] + ".jpg",
            "style": "transform: rotate(" + card[1][num] + "deg)",
            "class": "img-responsive"
        }).appendTo(`#showImage0${num}`);
    };

    $('#myModal').modal('show');

    //補牌
    function plusCard() {
        if (num > 6) {
            return;
        }
        num++;
        if (num === 4) {
            $("#myModalELabel").append("補牌");
        }
        if (num <= 6) {
            $("<div/>", {
                "class": "col-xs-4 col-sm-4",
                "id": `showImagedlc${num}`
            }).appendTo("#myModalExtra");
            $("<img/>", {
                "src": "css/images/tarot/" + card[0][num] + ".jpg",
                "style": "transform: rotate(" + card[1][num] + "deg)",
                "class": "img-responsive"
            }).appendTo(`#showImagedlc${num}`);
            $(`#showImagedlc${num}`).show();
        } else {

        }
    };

    $("#dlcCards").click(plusCard);

    $("#myModalExtra").show();
});


$("#twoChoicesSpread").click(function () {
    let card = shuffle();
    let num = 0;
    initialization(card);

    $("#myModalLabel").append("二擇一牌陣");

    $("<div/>", {
        "class": "col-xs-4 col-sm-4",
        "id": "showImage01"
    }).appendTo("#myModalBody");
    $("<img/>", {
        "src": "css/images/tarot/" + card[0][3] + ".jpg",
        "style": "transform: rotate(" + card[1][3] + "deg)",
        "class": "img-responsive"
    }).appendTo("#showImage01");


    $("<div/>", {
        "class": "col-xs-offset-4 col-sm-offset-4 col-xs-4 col-sm-4",
        "id": "showImage02"
    }).appendTo("#myModalBody");
    $("<img/>", {
        "src": "css/images/tarot/" + card[0][4] + ".jpg",
        "style": "transform: rotate(" + card[1][4] + "deg)",
        "class": "img-responsive"
    }).appendTo("#showImage02");

    $("<div/>", {
        "class": "col-xs-4 col-sm-4",
        "id": "showImage03"
    }).appendTo("#myModalBody");
    $("<img/>", {
        "src": "css/images/tarot/" + card[0][1] + ".jpg",
        "style": "transform: rotate(" + card[1][1] + "deg)",
        "class": "img-responsive"
    }).appendTo("#showImage03");

    $("<div/>", {
        "class": "col-xs-offset-4 col-sm-offset-4 col-xs-4 col-sm-4",
        "id": "showImage04"
    }).appendTo("#myModalBody");
    $("<img/>", {
        "src": "css/images/tarot/" + card[0][2] + ".jpg",
        "style": "transform: rotate(" + card[1][2] + "deg)",
        "class": "img-responsive"
    }).appendTo("#showImage04");

    $("<div/>", {
        "class": "col-xs-4 col-sm-4",
        "text": "選項A"
    }).appendTo("#myModalBody");

    $("<div/>", {
        "class": "col-xs-4 col-sm-4",
        "id": "showImage05"
    }).appendTo("#myModalBody");
    $("<img/>", {
        "src": "css/images/tarot/" + card[0][0] + ".jpg",
        "style": "transform: rotate(" + card[1][0] + "deg)",
        "class": "img-responsive"
    }).appendTo("#showImage05");

    $("<div/>", {
        "class": "col-xs-4 col-sm-4",
        "style": "text-align: right;",
        "text": "選項B"
    }).appendTo("#myModalBody");

    $('#myModal').modal('show');

    //補牌
    function plusCard() {
        if (num > 7) {
            return;
        }
        num++;
        if (num === 5) {
            $("#myModalELabel").append("補牌");
        }
        if (num <= 7) {
            $("<div/>", {
                "class": "col-xs-4 col-sm-4",
                "id": `showImagedlc${num}`
            }).appendTo("#myModalExtra");
            $("<img/>", {
                "src": "css/images/tarot/" + card[0][num] + ".jpg",
                "style": "transform: rotate(" + card[1][num] + "deg)",
                "class": "img-responsive"
            }).appendTo(`#showImagedlc${num}`);
            $(`#showImagedlc${num}`).show();
        } else {

        }
    };

    $("#dlcCards").click(plusCard);

    $("#myModalExtra").show();


});

$("#fiveChoicesSpread").click(function () {
    $("#myModalLabel").empty();
    $("#myModalBody").empty();
    $("#myModalELabel").empty();
    $("#myModalExtra").empty();


    var card = shuffle();
    let cardNames = [
        {
            "0": "愚者",
            "1": "魔術師",
            "2": "女祭司",
            "3": "皇后",
            "4": "皇帝",
            "5": "教皇",
            "6": "戀人 ",
            "7": "戰車",
            "8": "力量",
            "9": "隱者",
            "10": "命運之輪",
            "11": "正義 ",
            "12": "吊人",
            "13": "死神",
            "14": "節制",
            "15": "惡魔",
            "16": "塔",
            "17": "星星",
            "18": "月亮",
            "19": "太陽",
            "20": "審判",
            "21": "世界",
            "22": "聖杯一",
            "23": "聖杯二",
            "24": "聖杯三",
            "25": "聖杯四",
            "26": "聖杯五",
            "27": "聖杯六",
            "28": "聖杯七",
            "29": "聖杯八",
            "30": "聖杯九",
            "31": "聖杯十",
            "32": "聖杯侍者",
            "33": "聖杯騎士",
            "34": "聖杯皇后",
            "35": "聖杯國王",
            "36": "金幣一",
            "37": "金幣二",
            "38": "金幣三",
            "39": "金幣四",
            "40": "金幣五",
            "41": "金幣六",
            "42": "金幣七",
            "43": "金幣八",
            "44": "金幣九",
            "45": "金幣十",
            "46": "金幣侍者",
            "47": "金幣騎士",
            "48": "金幣皇后",
            "49": "金幣國王",
            "50": "寶劍一",
            "51": "寶劍二",
            "52": "寶劍三",
            "53": "寶劍四",
            "54": "寶劍五",
            "55": "寶劍六",
            "56": "寶劍七",
            "57": "寶劍八",
            "58": "寶劍九",
            "59": "寶劍十",
            "60": "寶劍侍者",
            "61": "寶劍騎士",
            "62": "寶劍皇后",
            "63": "寶劍國王",
            "64": "權杖一",
            "65": "權杖二",
            "66": "權杖三",
            "67": "權杖四",
            "68": "權杖五",
            "69": "權杖六",
            "70": "權杖七",
            "71": "權杖八",
            "72": "權杖九",
            "73": "權杖十",
            "74": "權杖侍者",
            "75": "權杖騎士",
            "76": "權杖皇后",
            "77": "權杖國王"
        }
    ];

    let card_ud = "";
    if (card[1][0] = 0) {
        card_ud = "正"
    } else if (card[1][0] = 180) {
        card_ud = "逆"
    };
    if (card[1][4] = 0) {
        card_ud = "正"
    } else if (card[1][4] = 180) {
        card_ud = "逆"
    };
    if (card[1][1] = 0) {
        card_ud = "正"
    } else if (card[1][1] = 180) {
        card_ud = "逆"
    };

    let cardName = cardNames[0][card[0][0].toString()] + card_ud;
    let cardName1 = cardNames[0][card[0][1].toString()] + card_ud;
    let cardName4 = cardNames[0][card[0][4].toString()] + card_ud;

    //顯示逆位有問題

    $("#myModalLabel").append("小十字牌陣");

    $("<div/>", {
        "class": "col-xs-offset-4 col-sm-offset-4 col-xs-4 col-sm-4",
        "id": "showImage01"
    }).appendTo("#myModalBody");
    $("<img/>", {
        "src": "css/images/tarot/" + card[0][4] + ".jpg",
        "style": "transform: rotate(" + card[1][4] + "deg)",
        "class": "img-responsive"
    }).appendTo("#showImage01");
    $("<p/>", {
        "class": "card-text text-center",
        "text": cardName4
    }).appendTo("#showImage01");
    $("<div/>", {
        "class": "col-xs-offset-4 col-sm-offset-4 col-xs-4 col-sm-4 ",
        "style": "text-align: center;",
        "text": " "
    }).appendTo("#myModalBody");

    $("<div/>", {
        "class": "col-xs-4 col-sm-4 ",
        "style": "text-align: center;",
        "text": "     "
    }).appendTo("#myModalBody");

    $("<div/>", {
        "class": "col-xs-4 col-sm-4",
        "id": "showImage02"
    }).appendTo("#myModalBody");
    $("<img/>", {
        "src": "css/images/tarot/" + card[0][1] + ".jpg",
        "style": "transform: rotate(" + card[1][1] + "deg)",
        "class": "img-responsive"
    }).appendTo("#showImage02");
    $("<p/>", {
        "class": "card-text text-center",
        "text": cardName1
    }).appendTo("#showImage02");
    $("<div/>", {
        "class": "col-xs-4 col-sm-4",
        "id": "showImage03"
    }).appendTo("#myModalBody");
    $("<img/>", {
        "src": "css/images/tarot/" + card[0][0] + ".jpg",
        "style": "transform: rotate(" + card[1][0] + "deg)",
        "class": "img-responsive"
    }).appendTo("#showImage03");
    $("<p/>", {
        "class": "card-text text-center",
        "text": cardName
    }).appendTo("#showImage03");

    $("<div/>", {
        "class": "col-xs-4 col-sm-4",
        "id": "showImage04"
    }).appendTo("#myModalBody");
    $("<img/>", {
        "src": "css/images/tarot/" + card[0][2] + ".jpg",
        "style": "transform: rotate(" + card[1][2] + "deg)",
        "class": "img-responsive"
    }).appendTo("#showImage04");

    $("<div/>", {
        "class": "col-xs-offset-4 col-sm-offset-4 col-xs-4 col-sm-4",
        "id": "showImage05"
    }).appendTo("#myModalBody");
    $("<img/>", {
        "src": "css/images/tarot/" + card[0][3] + ".jpg",
        "style": "transform: rotate(" + card[1][3] + "deg)",
        "class": "img-responsive"
    }).appendTo("#showImage05");



    $('#myModal').modal('show');


    $("#dlcCards").click(moreCard)


});


$("#testCardSpread").click(function () {
    let card = shuffle();
    let num = 0;
    initialization(card);



    $("#myModalLabel").append("測試牌陣");


    for (num = 0; num < 9; num++) {
        drawCard(num);
        console.log(num)
    }

    function drawCard(num) {
        let values = [1, 3, 4, 5, 7];
        if (values.includes(num)) {
            $("<div/>", {
                "class": "col-xs-4 col-sm-4",
                "id": `showImage0${num}`
            }).appendTo("#myModalBody");
            $("<img/>", {
                "src": "css/images/tarot/" + card[0][num] + ".jpg",
                "style": "transform: rotate(" + card[1][num] + "deg)",
                "class": "img-responsive"
            }).appendTo(`#showImage0${num}`);

        } else {
            $("<div/>", {
                "class": "col-xs-4 col-sm-4",
                "id": `showImage0${num}`
            }).appendTo("#myModalBody");
            $("<img/>", {
                "src": "css/images/tarot/" + "none.png",
                "style": "transform: rotate(" + card[1][num] + "deg)",
                "class": "img-responsive"
            }).appendTo(`#showImage0${num}`);
        }
    };

    $('#myModal').modal('show');

    //補牌
    function plusCard() {
        if (num > 12) {
            return;
        }
        num++;
        if (num == 10) {
            $("#myModalELabel").append("補牌");
        }
        if (num <= 12) {
            $("<div/>", {
                "class": "col-xs-4 col-sm-4",
                "id": `showImagedlc${num}`
            }).appendTo("#myModalExtra");
            $("<img/>", {
                "src": "css/images/tarot/" + card[0][num] + ".jpg",
                "style": "transform: rotate(" + card[1][num] + "deg)",
                "class": "img-responsive"
            }).appendTo(`#showImagedlc${num}`);
            $(`#showImagedlc${num}`).show();
        } else {

        }
    };

    $("#dlcCards").click(plusCard);
    $("#myModalExtra").show();


});


//洗牌
function shuffle() {
    let card = [
        [],
        []
    ];
    let i, tmp, ran;
    for (i = 0; i < 78; i++) {
        card[0][i] = i;
        card[1][i] = Math.floor((Math.random() * 2));
        if (card[1][i] == 1) {
            card[1][i] = 180;
        }
    }
    for (i = 0; i < 78; i++) {
        ran = Math.floor((Math.random() * 78));
        tmp = card[0][i];
        card[0][i] = card[0][ran];
        card[0][ran] = tmp;
    }
    return card;
};

//初始化
function initialization() {
    $("#myModalLabel").empty();
    $("#myModalBody").empty();
    $("#myModalELabel").empty();
    $("#myModalExtra").empty();
}

//切牌
function cutCards() {

    // 生成三兩個切點，用於切割牌堆
    let stack1 = Math.floor(Math.random() * 78);
    let stack2 = stack1 + Math.floor(Math.random() * (78 - stack1));

    // 切割牌堆
    let card1 = card.slice(0, stack1);
    let card2 = card.slice(stack1, stack2);
    let card3 = card.slice(stack2);

    // 將三份牌堆合併到一起
    let finalStack = [...card3, ...card1, ...card2];

    return finalStack;
}

//牌的名字
let cardNames = [
    {
        "0": "魔術師",
        "1": "女祭司",
        "2": "皇后",
        "3": "皇帝",
        "4": "教皇",
        "5": "戀人 ",
        "6": "戰車",
        "7": "力量",
        "8": "隱者",
        "9": "命運之輪",
        "10": "正義 ",
        "11": "吊人",
        "12": "死神",
        "13": "節制",
        "14": "惡魔",
        "15": "塔",
        "16": "星星",
        "17": "月亮",
        "18": "太陽",
        "19": "審判",
        "20": "世界",
        "21": "愚者",
        "22": "錢幣一",
        "23": "錢幣二",
        "24": "錢幣三",
        "25": "錢幣四",
        "26": "錢幣五",
        "27": "錢幣六",
        "28": "錢幣七",
        "29": "錢幣八",
        "30": "錢幣九",
        "31": "錢幣十",
        "32": "錢幣侍者",
        "33": "錢幣騎士",
        "34": "錢幣皇后",
        "35": "錢幣國王",
        "36": "聖杯一",
        "37": "聖杯二",
        "38": "聖杯三",
        "39": "聖杯四",
        "40": "聖杯五",
        "41": "聖杯六",
        "42": "聖杯七",
        "43": "聖杯八",
        "44": "聖杯九",
        "45": "聖杯十",
        "46": "聖杯侍者",
        "47": "聖杯騎士",
        "48": "聖杯皇后",
        "49": "聖杯國王",
        "50": "權杖一",
        "51": "權杖二",
        "52": "權杖三",
        "53": "權杖四",
        "54": "權杖五",
        "55": "權杖六",
        "56": "權杖七",
        "57": "權杖八",
        "58": "權杖九",
        "59": "權杖十",
        "60": "權杖侍者",
        "61": "權杖騎士",
        "62": "權杖皇后",
        "63": "權杖國王",
        "64": "寶劍一",
        "65": "寶劍二",
        "66": "寶劍三",
        "67": "寶劍四",
        "68": "寶劍五",
        "69": "寶劍六",
        "70": "寶劍七",
        "71": "寶劍八",
        "72": "寶劍九",
        "73": "寶劍十",
        "74": "寶劍侍者",
        "75": "寶劍騎士",
        "76": "寶劍皇后",
        "77": "寶劍國王"
    }
];

//放牌的
function drawCard() {
    for (num = 0; num < 2; num++) {
        $("<div/>", {
            "class": "col-xs-4 col-sm-4 col-xs-offset-4 col-sm-offset-4",
            "id": "showImage01"
        }).appendTo("#myModalBody");
        $("<img/>", {
            "src": "css/images/tarot/" + card[0][num] + ".jpg",
            "style": "transform: rotate(" + card[1][num] + "deg)",
            "class": "img-responsive"
        }).appendTo("#showImage01");
    }
}