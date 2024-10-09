
ludo = () => {
const Player1 = Math.floor(Math.random()*6)+1;
const Player1dice = `img/dice${Player1}.png`
document.getElementById('check1').setAttribute('src',Player1dice);
const Player2 = Math.floor(Math.random()*6)+1;
const Player2dice = `img/dice${Player2}.png`
document.getElementById('check2').setAttribute('src',Player2dice);

if(Player1>Player2){
    document.querySelector('h1').innerHTML = "Player1 Won :)";
}
else if(Player1<Player2){
    document.querySelector('h1').innerHTML = "Player2 Won :)";
}
else if(Player1==Player2){
    document.querySelector('h1').innerHTML = "Draw The Match :)";
}
}