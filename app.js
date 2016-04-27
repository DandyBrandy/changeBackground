$(document).ready(function(){
    $("a").on("click", function() {
       changeBackgroundColor();
    });
});

var changeBackgroundColor = function() {
    var red = Math.floor(Math.random() * 255 + 1);
    var green = Math.floor(Math.random() * 255 + 1);
    var blue = Math.floor(Math.random() * 255 + 1);

    var randomColorResult = "rgb(" + red + "," + green + "," + blue + ")";
    var colorTextValues = "rgb " + red + " " + green + " " + blue;

    var displayColorValues = document.getElementById("colorValues");
    displayColorValues.innerHTML = colorTextValues;

    document.getElementById("colorValues").style.display = "block";

    if(red > 150 && blue > 150){
        document.getElementById("colorValues").style.color = "#000000";
    }
    else if(red > 150 && green > 150) {
        document.getElementById("colorValues").style.color = "#000000";
    }
    else if(blue > 150 && green > 150) {
        document.getElementById("colorValues").style.color = "#000000";
    }
    else {
        document.getElementById("colorValues").style.color = "#FFFFFF";
    }

    $("#background").animate({backgroundColor: randomColorResult}, 200);
};


