(function(){
    'use strict';
    console.log('reading js')

    // Buttons
    const startGame = document.querySelector('#startgame');
    const quit = document.querySelector('#quit');
    const roll = document.querySelector('#roll');
    const pass = document.querySelector('#pass');
    const playAgain = document.querySelector('#playAgain');

    // Game Elements
    const game = document.querySelector('#game');
    const actionArea = document.querySelector('#actions');
    const mouseText = document.querySelector('#mouseText');
    const bunnyText = document.querySelector('#bunnyText');
    const rules = document.querySelector('#rules');
    const snake = document.querySelector('#snake');
    const score1 = document.querySelector('#score1');
    const score2 = document.querySelector('#score2');

    // Audio Elements
    const hissSnake = new Audio('audio/hissSnake.m4a');
    const shakeTree = new Audio('audio/shakeTree.m4a');
    const awMan = new Audio('audio/awMan.m4a');
    const yay = new Audio('audio/yay.m4a');


        let gameData = {
            dice: ['images/leaf.png', 'images/apple.png','images/twoApples.png', 'images/threeApples.png'],
            players: ['player 1', 'player 2'],
            score: [0, 0],
            roll1: 0,
            roll2: 0,
            rollSum: 0,
            index: 0,
            gameEnd: 22
        }

        startGame.addEventListener('click', function(){
            rules.className = 'hidden';
            // ramdomly set game index
            gameData.index = Math.round(Math.random());  

            // Shows which player is playing
            if (gameData.index === 0) {
                mouseText.className = 'showing';
            } else {
                bunnyText.className = 'showing';
            }

            quit.addEventListener('click', function(){
                location.reload();
            });

            // Shows Action Options
            actionArea.className = 'showing';
        
            setUpTurn();
        })

        function showPlayers() {
            if (gameData.index === 0) {
                bunnyText.className = 'hidden';
                mouseText.className = 'showing';
            } else {
                mouseText.className = 'hidden';
                bunnyText.className = 'showing';
            }
        }

        function setUpTurn() {

            // NOTE this got commented out
            // document.querySelector('#again').className = 'hidden';
            roll.className = 'showing';
            snake.className = 'hidden';
            pass.className = 'showing';

            roll.addEventListener('click', function(){
                shakeTree.play();
                throwDice();
            })

            // NOTE this got added
            pass.addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showPlayers();
            })
        }

        function throwDice(){
            // get random values from 0-3

            gameData.roll1 = Math.floor(Math.random() * 4);
            gameData.roll2 = Math.floor(Math.random() * 4);

            // put dice images on screen
            game.innerHTML = `<img src="${gameData.dice[gameData.roll1]}"> 
            <img src="${gameData.dice[gameData.roll2]}">`;

            gameData.rollSum = gameData.roll1 + gameData.roll2;          

            // if two of the same number is rolled but is not 0 and 0 (eg 11, 22, 33) 
            if (gameData.rollSum === 0) {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                game.innerHTML += `<p><em>Sorry, no apples here, switch!<em></p>`;
                awMan.play();
                showPlayers();
                showCurrentScore();

            // if 0 and 0 were both rolled
            } else if (gameData.roll1 === gameData.roll2 && gameData.rollSum !== 0) {
                snake.className = 'showing';
                hissSnake.play();
                gameData.score[gameData.index] = 0;
                // ternary operator, that switches players (true/false)
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);

                showCurrentScore();
                
                // Hide snake after delay
                setTimeout(function(){
                    snake.className = 'hidden';
                    showPlayers();
                }, 3000)

            // if neither doubles or zero's are rolled
            } else {

                gameData.score[gameData.index] += gameData.rollSum;

                checkWinCondition();
               
            }

            function checkWinCondition() {
                // check winning condition
                if (gameData.score[gameData.index] > gameData.gameEnd) {
                    yay.play();
                    showPlayers();
                    if (gameData.index === 0) {
                        mouseText.innerHTML = 'Big Cheese Won!';
                    } else {
                        bunnyText.innerHTML = 'Lil Tooth Won!';
                    }
                    // document.querySelector('#bunnyText').innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

                    roll.className = 'hidden';
                    pass.className = 'hidden';
                    playAgain.className = 'showing';

                    playAgain.addEventListener('click', function(){
                        location.reload();
                    });
                    showCurrentScore();
                } 
                else {
                    showCurrentScore();
                }
            }

            function showCurrentScore(){
                score1.innerHTML = gameData.score[0];
                score2.innerHTML = gameData.score[1];
            }
        }

}())