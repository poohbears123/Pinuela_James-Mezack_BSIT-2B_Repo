//variables

var randomLoc = Math.floor(Math.random()*5);
var shipLocation = [randomLoc, randomLoc + 1, randomLoc + 2];

//store locations in an array
var guess;
var hits =  0;
var guesses = 0;

var isSunk = false;

//main game

while(isSunk == false ){
    guess = prompt("Ready, Aim, Fire(enter number)")
    if (guess==null){
        alert("Thanks for playing");
        break;
    }
    guess = parseInt(guess, 10);

    // convert string to number base 10

    if (isNaN(guess)){
        alert("please put a valid number")
        continue;
        // code skip
        // to the next iteration of the loop
    }}

    guesses ++;


    const hitindex = shipLocation.indexOf(guess);
    if (hitindex !== -1)
        alert("hit"); 
        shipLocation.splice(hitindex, 1);
        hits ++;
        if (shipLocation.length === 0){
            isSunk = true;}
    else{
        alert("miss")
    }
//acuracy counter

var accuracy = (guess > 0 ?(hits/guesses)* 100:  0). toFixed(2);
var state = "you sank my battleship at " + guesses + " guesses" + " and your accuracy is " + accuracy + "%"

alert(state)