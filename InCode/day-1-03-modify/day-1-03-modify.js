function game(arg1, arg2){

    let playerOneHand = 'Scissors';
    let playerTwoHand = 'Rock';
    
    if(playerOneHand === playerTwoHand){ //if they match its a draw
        return('Draw');
    }else{
        switch (playerOneHand) { //check playerOnesHand against playerTwoshand
            case 'Rock':
                if(playerTwoHand === "Paper"){
                    return('Player Two Wins!');
                }else{
                    return('Player One Wins!');
                }
              break;
            case 'Paper':
                if(playerTwoHand === 'Scissors'){
                    return('Player Two Wins!');
                }else{
                    return('Player One Wins!');
                }
              break;
            case 'Scissors':
                if(playerTwoHand === 'Rock'){
                    return('Player Two Wins!');
                }else{
                    return('Player One Wins!');
                }
              break;
            default:
                return(`An error occurred`);
          }
    }
    
    
    
    }
    
    game('Rock', 'Paper');