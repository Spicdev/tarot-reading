

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

console.log(cutCards());




/*function cutCards() {
    // 創建一個78張牌的數組
    let deck = Array.from({ length: 78 }, (_, i) => i + 1);

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






let i = 0;

function changeText() {
    i++;
    $("#counts").html(`共計:${i}`);
    $("#counts").css('color', 'green');
}
$('#plus').click(changeText);










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

/*let cardNames = [
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
let cardName = cardNames[0][card[0][num].toString()] ;*/

//補牌 舊版
let addCardddd = function () {

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

    $("#dlcCards").one('click', function () {


        $("<div/>", {
            "class": "col-xs-4 col-sm-4",
            "id": "showImagedlc02"
        }).appendTo("#myModalExtra");
        $("<img/>", {
            "src": "css/images/tarot/" + card[0][2] + ".jpg",
            "style": "transform: rotate(" + card[1][2] + "deg)",
            "class": "img-responsive"
        }).appendTo("#showImagedlc02");


        $("#dlcCards").one('click', function () {
            $("<div/>", {
                "class": "col-xs-4 col-sm-4",
                "id": "showImagedlc03"
            }).appendTo("#myModalExtra");
            $("<img/>", {
                "src": "css/images/tarot/" + card[0][3] + ".jpg",
                "style": "transform: rotate(" + card[1][3] + "deg)",
                "class": "img-responsive"
            }).appendTo("#showImagedlc03");

        })
    })

}
