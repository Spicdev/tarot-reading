$("#singleCardSpread").click(function () {
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

$("#threeCardSpread").click(function () {
    $("#myModalLabel").empty();
    $("#myModalBody").empty();

    var card = shuffle();

    $("#myModalLabel").append("時間之流牌陣");

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
        "text": "A"
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
        "text": "B"
    }).appendTo("#myModalBody");

    $('#myModal').modal('show');
});

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