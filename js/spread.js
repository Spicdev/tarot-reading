$("#singleCardSpread").click(function () {
    $("#myModalLabel").empty();
    $("#myModalBody").empty();
    $("#myModalELabel").empty();
    $("#myModalExtra").empty();
    var card = shuffle();

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

    //
    $("#dlcCards").one('click', function () {

        $("#myModalELabel").append("補牌");

        $("<div/>", {
            "class": "col-xs-4 col-sm-4",
            "id": "showImagedlc01"
        }).appendTo("#myModalExtra");
        $("<img/>", {
            "src": "css/images/tarot/" + card[0][1] + ".jpg",
            "style": "transform: rotate(" + card[1][1] + "deg)",
            "class": "img-responsive"
        }).appendTo("#showImagedlc01");

        $("#dlcCards").one('click', function ()  {
        

            $("<div/>", {
                "class": "col-xs-4 col-sm-4",
                "id": "showImagedlc02"
            }).appendTo("#myModalExtra");
            $("<img/>", {
                "src": "css/images/tarot/" + card[0][2] + ".jpg",
                "style": "transform: rotate(" + card[1][2] + "deg)",
                "class": "img-responsive"
            }).appendTo("#showImagedlc02");

        
            $("#dlcCards").one('click', function ()  {
                $("<div/>", {
                    "class": "col-xs-4 col-sm-4",
                    "id": "showImagedlc03"
                }).appendTo("#myModalExtra");
                $("<img/>", {
                    "src": "css/images/tarot/" + card[0][3] + ".jpg",
                    "style": "transform: rotate(" + card[1][3] + "deg)",
                    "class": "img-responsive"
                }).appendTo("#showImagedlc03");

            }) }) })


    $("#bottom").click(function (){


    
    })
        
    });     







$("#threeCardSpread").click(function () { 
    $("#myModalLabel").empty();
    $("#myModalBody").empty();
    $("#myModalELabel").empty();
    $("#myModalExtra").empty();

    var card = shuffle();

    $("#myModalLabel").append("三張牌陣");

    $("<div/>", {
        "class": "col-xs-4 col-sm-4",
        "id": "showImage01"
    }).appendTo("#myModalBody");
    $("<img/>", {
        "src": "css/images/tarot/" + card[0][0] + ".jpg",
        "style": "transform: rotate(" + card[1][0] + "deg)",
        "class": "img-responsive"
    }).appendTo("#showImage01");


    $("<div/>", {
        "class": "col-xs-4 col-sm-4",
        "id": "showImage02"
    }).appendTo("#myModalBody");
    $("<img/>", {
        "src": "css/images/tarot/" + card[0][1] + ".jpg",
        "style": "transform: rotate(" + card[1][1] + "deg)",
        "class": "img-responsive"
    }).appendTo("#showImage02");

    $("<div/>", {
        "class": "col-xs-4 col-sm-4",
        "id": "showImage03"
    }).appendTo("#myModalBody");
    $("<img/>", {
        "src": "css/images/tarot/" + card[0][2] + ".jpg",
        "style": "transform: rotate(" + card[1][2] + "deg)",
        "class": "img-responsive"
    }).appendTo("#showImage03");

    $("<div/>", {
        "class": "col-xs-4 col-sm-4",
        "style": "text-align: center;",
        "text": "過去"
    }).appendTo("#myModalBody");

    $("<div/>", {
        "class": "col-xs-4 col-sm-4",
        "style": "text-align: center;",
        "text": "現在"
    }).appendTo("#myModalBody");

    $("<div/>", {
        "class": "col-xs-4 col-sm-4",
        "style": "text-align: center;",
        "text": "未來"
    }).appendTo("#myModalBody");

 $('#myModal').modal('show');

 //
 $("#dlcCards").one('click', function () {

    $("#myModalELabel").append("補牌");

    $("<div/>", {
        "class": "col-xs-4 col-sm-4",
        "id": "showImagedlc01"
    }).appendTo("#myModalExtra");
    $("<img/>", {
        "src": "css/images/tarot/" + card[0][3] + ".jpg",
        "style": "transform: rotate(" + card[1][3] + "deg)",
        "class": "img-responsive"
    }).appendTo("#showImagedlc01");

    $("#dlcCards").one('click', function ()  {
    

        $("<div/>", {
            "class": "col-xs-4 col-sm-4",
            "id": "showImagedlc02"
        }).appendTo("#myModalExtra");
        $("<img/>", {
            "src": "css/images/tarot/" + card[0][4] + ".jpg",
            "style": "transform: rotate(" + card[1][4] + "deg)",
            "class": "img-responsive"
        }).appendTo("#showImagedlc02");

    
        $("#dlcCards").one('click', function ()  {
            $("<div/>", {
                "class": "col-xs-4 col-sm-4",
                "id": "showImagedlc03"
            }).appendTo("#myModalExtra");
            $("<img/>", {
                "src": "css/images/tarot/" + card[0][5] + ".jpg",
                "style": "transform: rotate(" + card[1][5] + "deg)",
                "class": "img-responsive"
            }).appendTo("#showImagedlc03");

        }) }) })


 $("#bottom").click(function (){

});


});


$("#twoChoicesSpread").click(function () {
    $("#myModalLabel").empty();
    $("#myModalBody").empty();
    $("#myModalELabel").empty();
    $("#myModalExtra").empty();

    var card = shuffle();

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

        //
        $("#dlcCards").one('click', function () {

            $("#myModalELabel").append("補牌");
    
            $("<div/>", {
                "class": "col-xs-4 col-sm-4",
                "id": "showImagedlc01"
            }).appendTo("#myModalExtra");
            $("<img/>", {
                "src": "css/images/tarot/" + card[0][5] + ".jpg",
                "style": "transform: rotate(" + card[1][5] + "deg)",
                "class": "img-responsive"
            }).appendTo("#showImagedlc01");
    
            $("#dlcCards").one('click', function ()  {
            
    
                $("<div/>", {
                    "class": "col-xs-4 col-sm-4",
                    "id": "showImagedlc02"
                }).appendTo("#myModalExtra");
                $("<img/>", {
                    "src": "css/images/tarot/" + card[0][6] + ".jpg",
                    "style": "transform: rotate(" + card[1][6] + "deg)",
                    "class": "img-responsive"
                }).appendTo("#showImagedlc02");
    
            
                $("#dlcCards").one('click', function ()  {
                    $("<div/>", {
                        "class": "col-xs-4 col-sm-4",
                        "id": "showImagedlc03"
                    }).appendTo("#myModalExtra");
                    $("<img/>", {
                        "src": "css/images/tarot/" + card[0][7] + ".jpg",
                        "style": "transform: rotate(" + card[1][7] + "deg)",
                        "class": "img-responsive"
                    }).appendTo("#showImagedlc03");
    
                }) }) })

    $("#bottom").click(function (){

    });

});

$("#fiveChoicesSpread").click(function () { 
    $("#myModalLabel").empty();
    $("#myModalBody").empty();
    $("#myModalELabel").empty();
    $("#myModalExtra").empty();

    var card = shuffle();

    $("#myModalLabel").append("小十字牌陣");

    $("<div/>", {
        "class": "col-xs-offset-4 col-sm-offset-4 col-xs-4 col-sm-4 ",
        "id": "showImage01"
    }).appendTo("#myModalBody");
    $("<img/>", {
        "src": "css/images/tarot/" + card[0][4] + ".jpg",
        "style": "transform: rotate(" + card[1][4] + "deg)",
        "class": "img-responsive"
    }).appendTo("#showImage01");


        $("<div/>", {
        "class": "col-xs-4 col-sm-4 ",
        "id": "showImage0"
        }).appendTo("#myModalBody");
        $("<img/>", {
        "src": "css/images/tarot/" + 'none' + ".png",
        "style": "transform: rotate 0 deg",
        "class": "img-responsive"
        }).appendTo("#showImage0");

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

        $("<div/>", {
        "class": "col-xs-4 col-sm-4",
        "id": "showImage03"
        }).appendTo("#myModalBody");
        $("<img/>", {
        "src": "css/images/tarot/" + card[0][0] + ".jpg",
        "style": "transform: rotate(" + card[1][0] + "deg)",
        "class": "img-responsive"
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

    
//補牌
    $("#dlcCards").one('click', function () {

        $("#myModalELabel").append(" " + "補牌");

        $("<div/>", {
            "class": "col-xs-4 col-sm-4",
            "id": "showImagedlc01"
        }).appendTo("#myModalExtra");
        $("<img/>", {
            "src": "css/images/tarot/" + card[0][77] + ".jpg",
            "style": "transform: rotate(" + card[1][77] + "deg)",
            "class": "img-responsive"
        }).appendTo("#showImagedlc01");

        $("#dlcCards").one('click', function ()  {
        

            $("<div/>", {
                "class": "col-xs-4 col-sm-4",
                "id": "showImagedlc02"
            }).appendTo("#myModalExtra");
            $("<img/>", {
                "src": "css/images/tarot/" + card[0][76] + ".jpg",
                "style": "transform: rotate(" + card[1][76] + "deg)",
                "class": "img-responsive"
            }).appendTo("#showImagedlc02");

        
        $("#dlcCards").one('click', function ()  {
            $("<div/>", {
                "class": "col-xs-4 col-sm-4",
                "id": "showImagedlc03"
            }).appendTo("#myModalExtra");
            $("<img/>", {
                "src": "css/images/tarot/" + card[0][75] + ".jpg",
                "style": "transform: rotate(" + card[1][75] + "deg)",
                "class": "img-responsive"
            }).appendTo("#showImagedlc03");

            })
        }) 
    })

    $("#button").click(function (){ 

    });
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
}

let shuffleCard = shuffle()


//切牌， 將78張牌隨機分成三疊，用132的方式疊起來，然後取出底牌。
function cut(){
 let aArray = [];
    let bArray = [];
    let cArray = [];
    let ran = 5
let lastCard = [78]

for (let i=0; i<5; i++){
aArray[i] = card[i];
}
for (let i = ran; i<card.length; i++){
    bArray[i-ran] = card[i]
}

resultArray = [...bArray, ...cArray, ...aArray]
let last = resultArray[78]
}

function shuffleCards() {
    // 創建一個78張牌的數組
    let deck = Array.from({length: 78}, (_, i) => i + 1);

    // 將牌堆打亂
    deck.sort(() => Math.random() - 0.5);

    // 生成三個隨機的索引，用於切割牌堆
    let index1 = Math.floor(Math.random() * deck.length);
    let index2 = index1 + Math.floor(Math.random() * (deck.length - index1));

    // 切割牌堆
    let deck1 = deck.slice(0, index1);
    let deck2 = deck.slice(index1, index2);
    let deck3 = deck.slice(index2);

    // 將三份牌堆合併到一起
    let finalDeck = [...deck1, ...deck2, ...deck3];

    return finalDeck;
}

console.log(shuffleCards());





//牌的名字
let cardnames = [
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
   ]


   //補牌

       //
       let addCard = function addC(){

        $("#myModalELabel").append(+ "補牌");

        $("<div/>", {
            "class": "col-xs-4 col-sm-4",
            "id": "showImagedlc01"
        }).appendTo("#myModalExtra");
        $("<img/>", {
            "src": "css/images/tarot/" + card[0][1] + ".jpg",
            "style": "transform: rotate(" + card[1][1] + "deg)",
            "class": "img-responsive"
        }).appendTo("#showImagedlc01");

        $("#dlcCards").one('click', function ()  {
        

            $("<div/>", {
                "class": "col-xs-4 col-sm-4",
                "id": "showImagedlc02"
            }).appendTo("#myModalExtra");
            $("<img/>", {
                "src": "css/images/tarot/" + card[0][2] + ".jpg",
                "style": "transform: rotate(" + card[1][2] + "deg)",
                "class": "img-responsive"
            }).appendTo("#showImagedlc02");

        
            $("#dlcCards").one('click', function ()  {
                $("<div/>", {
                    "class": "col-xs-4 col-sm-4",
                    "id": "showImagedlc03"
                }).appendTo("#myModalExtra");
                $("<img/>", {
                    "src": "css/images/tarot/" + card[0][3] + ".jpg",
                    "style": "transform: rotate(" + card[1][3] + "deg)",
                    "class": "img-responsive"
                }).appendTo("#showImagedlc03");

            }) })

        }


/*let origin = [0,1,2,3,4,  5,6,7,8,9,10]
let aArray = []
let bArray = []
let cArray = []
let ran = 5

for (let i=0; i<5; i++){
aArray[i] = origin[i];
}
for (let i = ran; i<oringin.length; i++){
    bArray[i-ran] = oringin[i]
}*/

//bArray.push(origin[i])

/*let shuffle()=>{
    var card = [
        [],
        []
    ];
    var i, tmp, ran;
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
}


/*function shuffle() {
    // 初始化一個包含兩個空陣列的二維陣列。card[0]用來存放牌的編號，card[1]用來存放牌的狀態（0或180）
    var card = [
        [],
        []
    ];
    var i, tmp, ran;
    
    // 第一個for迴圈是用來為每一張牌分配一個唯一的編號和一個隨機的狀態值
    for (i = 0; i < 78; i++) {
        // 給每張牌分配一個從0到77的編號
        card[0][i] = i;
        
        // 隨機生成一個0或1的值。Math.random()會生成一個0到1的隨機數，乘以2後範圍變成0到2，然後Math.floor會將數字向下取整
        card[1][i] = Math.floor((Math.random() * 2));
        
        // 如果生成的隨機數是1，將牌的狀態值設為180
        if (card[1][i] == 1) {
            card[1][i] = 180;
        }
    }
    
    // 第二個for迴圈是用來打亂牌的順序，實現洗牌的功能
    for (i = 0; i < 78; i++) {
        // 生成一個0到77的隨機數
        ran = Math.floor((Math.random() * 78));
        
        // 將當前牌的編號保存到tmp變數中，以便於後面的交換
        tmp = card[0][i];
        
        // 將隨機選中的牌的編號和當前牌的編號進行交換
        card[0][i] = card[0][ran];
        
        // 將之前保存的當前牌的編號賦值給隨機選中的牌
        card[0][ran] = tmp;
    }
    
    // 回傳洗牌後的結果，該結果包含每張牌的編號和狀態值
    return card;
}*/