//This is only for use in the medium cpu turn
var logicTurn = false;
//This changes on user selection of number of pieces
var playerGuess = 0;
//This decides if a 2nd player(false) or the cpu(true) takes a turn
var isCPUGame = false;
//This changes the difficulty of the cpu (can be used for more)
var difficulty = "Easy";

//Use this for the onclick to change from a pvp to pvc game
function gameOpponent(){
    //This is hard coded but can be adjusted depending on what the front end looks like
    isCPUGame = true;
}

//Use this for when the player chooses the number of pieces to remove
//Can be changed to just pull the value of the text box or whatever element we use
function playerPieceSelection(playerChoice){
    playerGuess = playerChoice
}

//Player vs Player logic
//Turn Logic
function turnLogic(){
    var playerTurn = 0;
    //If playerTurn = 0;
    if(playerTurn == 0){
        // TODO Update Player Turn Banner
        //Player 1 Turn
        // TODO Remove PlayerGuess number of tokens from the game board
        // TODO Update how many were removed notification
        playerTurn = 1;
        logicTurn = false;
    }
    //If playerTurn = 1;
    else{
        // TODO Update Player Turn Banner

        //CPU Turn or Player 2 turn
        if(isCPUGame){
            playerTurn = 0;
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
        }
        else{
            //else Player 2 turn;
            // TODO Remove PlayerGuess number of tokens from the game board
            // TODO Update how many were removed notification
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

///pvp easy medium and hard
//easy medium and hard gme piece display
//pvp or pvc selection
//win loss?
