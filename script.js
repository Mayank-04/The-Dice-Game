let randomNum1 = Math.floor(Math.random() * 6) + 1  ;
let randomNum2 = Math.floor(Math.random() * 6) + 1  ;

let randomImg1 = "images/" + `dice${randomNum1}` + ".png";
let randomImg2 = "images/" + `dice${randomNum2}` + ".png";

document.getElementsByTagName("img")[0].setAttribute("src",randomImg1);
document.getElementsByTagName("img")[1].setAttribute("src",randomImg2);

if(randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
}
else if(randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}
