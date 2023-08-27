/*$("#singleCardSpread").click(function () {
    $("#myModalLabel").empty();
    $("#myModalBody").empty();
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
});


$("#threeCardSpread").click(function () { //fivecards' practice
    $("#myModalLabel").empty();
    $("#myModalBody").empty();

    var card = shuffle();

    $("#myModalLabel").append("五張牌陣");

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
        "id": "showImage04"
    }).appendTo("#myModalBody");
    $("<img/>", {
        "src": "css/images/tarot/" + card[0][3] + ".jpg",
        "style": "transform: rotate(" + card[1][3] + "deg)",
        "class": "img-responsive"
    }).appendTo("#showImage04");

    $("<div/>", {
        "class": "col-xs-4 col-sm-4",
        "id": "showImage05"
    }).appendTo("#myModalBody");
    $("<img/>", {
        "src": "css/images/tarot/" + card[0][4] + ".jpg",
        "style": "transform: rotate(" + card[1][4] + "deg)",
        "class": "img-responsive"
    }).appendTo("#showImage05");



    $('#myModal').modal('show');
});

$("#twoChoicesSpread").click(function () {
    $("#myModalLabel").empty();
    $("#myModalBody").empty();

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
});

//洗牌
function shuffle() {
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
//切牌， 將78張牌隨機分成三疊，用132的方式疊起來，然後取出底牌。
function cut(){
    let origin = [];
    for (i = 0; i < 78; i++){
    origin.push(i + 1);

}}
 let aArray = [];
    let bArray = [];
    let cArray = [];
    let ran = 5
let lastCard = [78]

for (let i=0; i<5; i++){
aArray[i] = origin[i];
}
for (let i = ran; i<oringin.length; i++){
    bArray[i-ran] = oringin[i]
}

resultArray = [...bArray, ...cArray, ...aArray]
let bottom = resultArray[78]


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