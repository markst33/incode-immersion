function game(arg1, arg2){

let playerOneHand = 'Scissors';
let playerTwoHand = 'Rock';

if(playerOneHand === playerTwoHand){ //if they match its a draw
    console.log('Draw');
}else{
    switch (playerOneHand) { //check playerOnesHand against playerTwoshand
        case 'Rock':
            if(playerTwoHand === "Paper"){
                console.log('Player Two Wins!');
            }else{
                console.log('Player One Wins!');
            }
          break;
        case 'Paper':
            if(playerTwoHand === 'Scissors'){
                console.log('Player Two Wins!');
            }else{
                console.log('Player One Wins!');
            }
          break;
        case 'Scissors':
            if(playerTwoHand === 'Rock'){
                console.log('Player Two Wins!');
            }else{
                console.log('Player One Wins!');
            }
          break;
        default:
          console.log(`An error occurred`);
      }
}



}

game('Rock', 'Paper');