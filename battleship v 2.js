//variables
var randomLoc = Math.floor(Math.random()*5);

var location1 = randomLoc;
var location2 =location1 + 1;
var location3 = location2 + 1;

var guess;
var hits =  0;
var guesses = 0;

var isSunk = false;

while(isSunk == false ){
    guess = prompt("Ready, Aim, Fire(enter number)")
    if (guess==null){
        alert("Thanks for playing");
        break;
    }

    if (guess <0 || guess >6){
        alert ("please put a valid number")
    }
    else{ guesses = guesses + 1 
        if (guess == location1|| guess == location2 || guess == location3){
            hits += 1;
            if (hits == 3 ){
                isSunk = true;
                alert (" you sank my ship")
            }else{
                alert("hit")
            }}else{
                alert("miss")
            }
        }
    }
var accuracy = (guess > 0 ?(hits/guesses)* 100:  0). toFixed(2);
var state = "you sank my battleship at " + guesses + " guesses" + " and your accuracy is " + accuracy + "%"

alert(state)