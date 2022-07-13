var logicTurn = false;
var playerGuess = 0;
var isCPUGame = false;

//Player vs Player logic
//Turn Logic
function logicTurn(){
    var playerTurn = 0;
    //If playerTurn = 0;
    if(playerTurn == 0){
        //Player 1 Turn
        playerTurn = 1;
    }
    //If playerTurn = 1;
    else{
        //If isCPUGame run cpu turn;
        if(isCPUGame){
            //Do CPU Turn
            //Switch for difficulty
        }
        else{
            //else run player 2 turn;
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
