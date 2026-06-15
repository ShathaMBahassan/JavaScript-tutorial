


let isAutoPlay= false;
let intervalId;

function autoPlay(){
    if(!isAutoPlay){
        intervalId = setInterval(function(){
        const playerMove = game();
        scissorsRockPaper(playerMove)} , 1000) 

        isAutoPlay = true;
    }else{
        clearInterval(intervalId);
        isAutoPlay=false;
        console.log("STOP")
    }

    
}



function game(){    
            const randomNumber=Math.random();

            if(randomNumber >=0 && randomNumber <1/3){
                
                computerMove = 'rock';

            } else if (randomNumber >=1/3 && randomNumber <2/3){
                
                computerMove  ='paper';
            } else {
                
                computerMove='scissors';
            }    
            
            return computerMove;
        }

        game();
        
        function compare(computerMove, user){
            console.log("-----------");
            console.log(`user: ${user}`);
            console.log(`computer ${computerMove}`);
            let result = document.querySelector('.js-result');

            
            
            if( computerMove === user){
                result.innerHTML = 'You Tie';
                console.log(result);
            } else if (computerMove === 'rock' && user === 'paper' ) {
                result.innerHTML  = 'You win';
                console.log(result);
            } else if (computerMove === 'rock' && user === 'scissors'){
                result.innerHTML  = 'You lose';
                console.log(result);
            } else if (computerMove === 'scissors' && user === 'paper'){
                result.innerHTML  = 'You lose';
                console.log(result);
            }else if (computerMove === 'scissors' && user === 'rock'){
                result.innerHTML  = 'You win';
                console.log(result);
            }else if (computerMove === 'paper' && user === 'rock'){
                result.innerHTML  = 'You lose';
                console.log(result);
            }else if (computerMove === 'paper' && user === 'scissors'){
                result.innerHTML  = 'You win';
                console.log(result);
            }

            
        }

        function scissorsRockPaper(userChoice){

        let inp = document.querySelector(".js-inp");
        
        const computerMove = game();

        inp.innerHTML = `You <img src="images/${userChoice}.png" class="move-icon"> 
        and computer <img class="move-icon" src="images/${computerMove}.png"> `;


        let resultGame = compare(computerMove, userChoice);
        
        }