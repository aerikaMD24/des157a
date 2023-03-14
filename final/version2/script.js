(function(){
    'use strict';
    console.log('reading js');

    // TEMP TESTING
    const btns = document.querySelectorAll('button');
    const game1 = document.querySelector('#game1');
    const game2 = document.querySelector('#game2');
    const game3 = document.querySelector('#game3');
    const testing = document.querySelector('#testing');

    btns[0].addEventListener('click', function() {
        game1.className = 'showing';
        game2.className = 'hidden';
        game3.className = 'hidden';
        testing.className = 'hidden';
    })

    btns[1].addEventListener('click', function() {
        game1.className = 'hidden';
        game2.className = 'showing';
        game3.className = 'hidden';
        testing.className = 'hidden';
        console.log()
    })

    btns[2].addEventListener('click', function() {
        game1.className = 'hidden';
        game2.className = 'hidden';
        game3.className = 'showing';
        testing.className = 'hidden';
    })

    btns[3].addEventListener('click', function() {
        console.log('x');
        game1.className = 'hidden';
        game2.className = 'hidden';
        game3.className = 'hidden';
        testing.className = 'showing';
    })

    // game 1 stuff
    // const virus = document.querySelector('#virus');

    // function getHacked() {
    //     // instead set interval and have them randomy appear on screen 
    //     setTimeout(function(){
    //         virus.style.left = Math.floor(Math.random() * 900 + 1);
    //         virus.style.top = Math.floor(Math.random() * 300 + 1);
    //         console.log('yo')
    //     }, 5000)
    // }

    function placeV() {
        let virus = document.createElement("div");
        virus.className = 'virus'
        game1.appendChild(virus);
        virus.style.left = `${Math.floor(Math.random() * 100)}%`;
        virus.style.top = `${Math.floor(Math.random() * 100)}%`;
        // virus.style.width = Math.floor(Math.random() * 300 + 1);
        // console.log(Math.floor(Math.random() * 100))

        virus.addEventListener('click', function(){
            virus.className = 'hidden';
        })
        // virus.forEach(function (eachVirus) {
        //     eachVirus.addEventListener('click', function(){
        //         virus.className = 'hidden';
        //     });
        // });
    }

    const virusAttack = setInterval(placeV, 2000)

    function endVirus() {
        clearInterval(virusAttack);
    }

    setTimeout(endVirus, 20000)

    placeV();
    


    // Zoom-In Sections, the suspects
    const sus = document.querySelectorAll('#suspects div')
    const footage = document.querySelector('#footage');
    const camUI = document.querySelectorAll('#camera img')
    const rec = document.querySelector('#rec');
    const recDot = document.querySelector('#rec div');
    const recP = document.querySelector('#rec p');

    sus.forEach(function (eachSus) {
        eachSus.addEventListener('click', zoomSus);
        // exit function 
    });

    function zoomSus(e) {
        camUI.forEach(function (eachCamUI) {
            eachCamUI.style.width = '250px';
        });
        recDot.style.width = '50px';
        recDot.style.height = '50px';
        recP.style.fontSize = '32px';
        rec.style.right = '80px';
        rec.style.width = '130px';
        const sussyBaka = e.target.id;
        switch(sussyBaka) {
            case 'suspect1':
                console.log('fuck')
                footage.style.width = '200%';
                footage.style.top = '90%';
                footage.style.left = '90%';
//                 width: 200%;
//    position: absolute;
//    top: 90%;
//    left: 90%;
            break;
            case 'suspect2':
                
            break;
            case 'suspect3':
                
            break;
            case 'suspect4':
                
            break;
            case 'suspect5':
                
            break;
        }
    }



}())