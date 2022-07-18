//This is only for use in the medium cpu turn
var logicTurn = false;
//This changes on user selection of number of pieces
var playerGuess = 0;
//This decides if a 2nd player(false) or the cpu(true) takes a turn
var isCPUGame = false;
//This changes the difficulty of the cpu (can be used for more)
var difficulty = "Easy";
const listOfTokens = [
    "nim1", "nim2", "nim3", "nim4",
    "nim5", "nim6", "nim7", "nim8",
    "nim9", "nim10", "nim11", "nim12",
    "nim13", "nim14", "nim15", "nim16",
];
var player1Name;
var player2Name;


function gameOpponentPVP(){
    var btnPVP = document.getElementById("btnPVP");
    btnPVP.style.backgroundColor = 'khaki'
    var btnCPU = document.getElementById("btnCPU");
    btnCPU.style.backgroundColor = 'white'
    isCPUGame = false;
}

function gameOpponentCPU(){
    var btnCPU = document.getElementById("btnCPU");
    btnCPU.style.backgroundColor = 'khaki'
    var btnPVP = document.getElementById("btnPVP");
    btnPVP.style.backgroundColor = 'white'
    isCPUGame = true;
}

function gameDifficulty(diff){
    var btnEasy = document.getElementById("btnEasy");
    var btnMed = document.getElementById("btnMed");
    var btnHard = document.getElementById("btnHard");

    switch(diff){
        case 1:
            btnEasy.style.backgroundColor = 'khaki';
            btnMed.style.backgroundColor = 'white';
            btnHard.style.backgroundColor = 'white';
            difficulty = "Easy";
            break;
        case 2:
            btnEasy.style.backgroundColor = 'white';
            btnMed.style.backgroundColor = 'khaki';
            btnHard.style.backgroundColor = 'white';
            difficulty = "Medium";
            break;
        case 3:
            btnEasy.style.backgroundColor = 'white';
            btnMed.style.backgroundColor = 'white';
            btnHard.style.backgroundColor = 'khaki';
            difficulty = "Hard";
            break;
    }
}

function startGame(){
    player1Name = document.getElementById("playerName1").value;
    player2Name = document.getElementById("playerName2").value;
    location.href = "game.html"
    var playerTurn = document.getElementById("playerTurn");
    playerTurn.innerHTML = player1Name;
}

//Use this for when the player chooses the number of pieces to remove
function playerPieceSelection(playerChoice){
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");

    switch(playerChoice){
        case 1:
            btn1.style.backgroundColor = 'khaki';
            btn2.style.backgroundColor = 'white';
            btn3.style.backgroundColor = 'white';
            playerGuess = playerChoice;
            break;
        case 2:
            btn1.style.backgroundColor = 'white';
            btn2.style.backgroundColor = 'khaki';
            btn3.style.backgroundColor = 'white';
            playerGuess = playerChoice;
            break;
        case 3:
            btn1.style.backgroundColor = 'white';
            btn2.style.backgroundColor = 'white';
            btn3.style.backgroundColor = 'khaki';
            playerGuess = playerChoice;
            break;
    }
}

function endTurn(){
    turnLogic();
}

function removeTokensFromBoard(){
    var temp = 0;
        while(temp != playerGuess){
            var token = listOfTokens.pop();
            document.getElementById(token).style.visibility = "hidden";
            temp += 1;
        }
}

//Turn Logic
function turnLogic(){
    var playerTurnElem = document.getElementById("playerTurn");
    var tokensRemoved = document.getElementById("removedBanner");
    var playerTurn = 0;
    //If playerTurn = 0;
    if(playerTurn == 0){
        // TODO Update Player Turn Banner
        playerTurnElem.innerHTML = "Player 1 Turn";
        //Player 1 Turn
        // TODO Remove PlayerGuess number of tokens from the game board
        if(listOfTokens.length-1 <= 1){
            document.getElementById("playerTurn").innerHTML = "PLAYER 1 WINS";
        }
        else{
            removeTokensFromBoard();
        }
        // TODO Update how many were removed notification
        tokensRemoved.innerHTML = "Player 1 removed: " + playerGuess + " tokens";
        playerTurn = 1;
        logicTurn = false;
    }
    //If playerTurn = 1;
    else{
        // TODO Update Player Turn Banner
        //CPU Turn or Player 2 turn
        if(isCPUGame){
            playerTurn = 0;
            playerTurnElem.innerHTML = "CPU Turn";
            switch(difficulty){
                case "Easy":
                    playerGuess = easyCPUTurn();
                    break;
                case "Medium":
                    playerGuess = medCPUTurn(playerGuess, logicTurn);
                    logicTurn = true;
                    break;
                case "Hard":
                    playerGuess = hardCPUTurn(playerGuess);
                    break;
            }
            if(listOfTokens.length-1 <= 1){
                document.getElementById("playerTurn").innerHTML = "CPU WINS";
            }
            else{
                removeTokensFromBoard();
            }
            tokensRemoved.innerHTML = "CPU removed: " + playerGuess + " tokens";
        }
        else{
            //else Player 2 turn;
            playerTurnElem.innerHTML = "Player 2 Turn";
            // TODO Remove PlayerGuess number of tokens from the game board
            if(listOfTokens.length-1 <= 1){
                document.getElementById("playerTurn").innerHTML = "PLAYER 2 WINS";
            }
            else{
                removeTokensFromBoard();
            }
            // TODO Update how many were removed notification
            tokensRemoved.innerHTML = "Player 2 removed: " + playerGuess + " tokens";
            playerTurn = 0;
        }
    }
}

function easyCPUTurn(){
    //Make a random num between 1 and 3
    var randNum = Math.floor(Math.random * 3) + 1;
    //return the random num
    return randNum;
}

//Determine if it is the correct turn to use logic
function medCPUTurn(playerGuess, useLogic){
    if(useLogic){
        logicTurn = false;
        switch (playerGuess){
            case 1:
                return 3;
            case 2:
                return 2;
            case 3:
                return 1;
        }
    }
    else{
        logicTurn = true;
        return easyCPUTurn();
    }
}

function hardCPUTurn(playerGuess){
    switch (playerGuess){
        case 1:
            return 3;
        case 2:
            return 2;
        case 3:
            return 1;
    }
}

