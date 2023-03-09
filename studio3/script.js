(function(){
    'use strict';
    console.log('reading js')

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

        let gameData = {
            dice: ['images/leaf.png', 'images/apple.png','images/twoApples.png', 'images/threeApples.png'],
            players: ['player 1', 'player 2'],
            score: [0, 0],
            roll1: 0,
            roll2: 0,
            rollSum: 0,
            index: 0,
            gameEnd: 29
        }

        startGame.addEventListener('click', function(){
            // ramdomly set game index
            gameData.index = Math.round(Math.random());  

            document.querySelector('#quit').addEventListener('click', function(){
                location.reload();
            });

            // Show Action Options
            actionArea.className = 'showing';
            
            setUpTurn();
        })

        function setUpTurn() {

            document.querySelector('#roll').addEventListener('click', function(){
                throwDice();
            })
            document.querySelector('#again').className = 'hidden';
            document.querySelector('#roll').className = 'showing';
            document.querySelector('#snake').className = 'hidden';
            document.querySelector('#pass').className = 'showing';
        }

        function throwDice(){
            // get random values from 0-3

            gameData.roll1 = Math.floor(Math.random() * 4);
            gameData.roll2 = Math.floor(Math.random() * 4);
            console.log(`gamedata1 ${gameData.roll1}`);console.log(`gamedata2 ${gameData.roll2}`);
            gameData.rollSum = gameData.roll1 + gameData.roll2;
            gameData.score[gameData.index] += gameData.rollSum;
            console.log(gameData.rollSum)
            showCurrentScore();

            // put dice images on screen (needs to be 1 less than value caue of array index)
            game.innerHTML = `<img src="${gameData.dice[gameData.roll1]}"> 
                                <img src="${gameData.dice[gameData.roll2]}">`;

            

            // if two of the same number is rolled but is not 0 and 0 (eg 11, 22, 33) 
            if (gameData.rollSum === 0) {
                gameData.score[gameData.index] += gameData.rollSum;
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                game.innerHTML += `<p>Sorry, no apples, switch to a new tree and the other player</p>`
                showCurrentScore();
                setTimeout(setUpTurn, 2000)
            // if 0 and 0 were both rolled
            } else if (gameData.roll1 === gameData.roll2 && gameData.rollSum !== 0) {
                document.querySelector('#snake').className = 'showing';
                gameData.score[gameData.index] = 0;
                // ternary operator, that switches players (true/false)
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                console.log(`player1 score: ${gameData.score[0]}`);
                console.log(`player2 score: ${gameData.score[1]}`)

                showCurrentScore();
                setTimeout(setUpTurn, 3000)
            // if neither doubles or zero's are rolled
            } else {
            
                document.querySelector('#again').className = 'showing';
                document.querySelector('#roll').className = 'hidden';
                document.querySelector('#pass').className = 'hidden';


                document.querySelector('#again').addEventListener('click', function(){
                    console.log('again')
                    setUpTurn();
                })

                document.querySelector('#pass').addEventListener('click', function(){
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    setUpTurn();
                })

                checkWinCondition();
            }

            function checkWinCondition() {
                // check winning condition
                if (gameData.score[gameData.index] > gameData.gameEnd) {
                    document.querySelector('#bunnyText').innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

                    document.querySelector('#roll').className = 'hidden';document.querySelector('#pass').className = 'hidden';
                    document.querySelector('#playAgain').className = 'showing';

                    document.querySelector('#playAgain').addEventListener('click', function(){
                        location.reload();
                    });
                    
                } 
                // else {
                //     showCurrentScore();
                // }
            }

            function showCurrentScore(){
                document.querySelector('#score1').innerHTML = gameData.score[0];
                document.querySelector('#score2').innerHTML = gameData.score[1];
                // score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}:${gameData.score[0]}</strong> and <strong>${gameData.players[1]}:${gameData.score[1]}</strong></p>`;
            }
        }

}())