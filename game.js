
var gamePattern =[];

var userClickedPattern = [];
var buttonColors = ["red","blue","green","yellow"];

var randomChoosenColor = buttonColors[nextSequence()];
gamePattern.push(randomChoosenColor);

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);

    return randomNumber;
}



$("#" + randomChoosenColor).click(function(){

    $("#" + randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var s = new Audio("sounds/" + randomChoosenColor +".mp3");
    s.play();


})

for(var i = 0; i < buttonColors.length; i++){

    $("#" + buttonColors[i]).click(function (){
        var userChoosenColor = $("#" + buttonColors[i]).attr("id");
        userClickedPattern.push(userChoosenColor);


    }
    )
}

console.log(userClickedPattern);






