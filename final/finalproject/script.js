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
        const virusAttack = setInterval(createVirus, 2000)
        setTimeout(endVirus, 20000);
        function endVirus() {
            clearInterval(virusAttack);
        }
    })

    btns[1].addEventListener('click', function() {
        game1.className = 'hidden';
        game2.className = 'showing';
        game3.className = 'hidden';
        testing.className = 'hidden';
        console.log(lol)
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


    // v.addEventListener('click', function(){
    // v.style.backgroundColor = '#8DC18F';
    // vle.style.backgroundColor = '#16A14E';
    // vre.style.backgroundColor = '#16A14E';
    // vm.style.backgroundColor = '#16A14E';
    // vm.style.transform = 'rotate(630deg)';
    // setTimeout(function(){
    // v.style.opacity = '0'
    // }, 500)
    // })

    function createVirus() {
        // Create Virus Elements
        let v = document.createElement("div");
        v.className = 'virus';
        let vle = document.createElement("div");
        vle.className = 'vlEye';
        let vre = document.createElement("div");
        vre.className = 'vrEye';
        let vm = document.createElement("div");
        vm.className = 'vMouth'; 
        let vc = document.createElement("div");
        vc.className = 'vContainer';

        let size = Math.floor(Math.random() * 150) + 150;

        v.appendChild(vc);
        vc.appendChild(vle);
        vc.appendChild(vre);
        vc.appendChild(vm);

        // Randomized location and sizes
        game1.appendChild(v);
        let l = Math.floor(Math.random() * 80);
        let r = Math.floor(Math.random() * 80);
        console.log(`Left:${l} Top:${r}`)
        v.style.left = `${l}%`;
        v.style.top = `${r}%`;

        v.style.width = `${size}px`;
        v.style.height = `${size}px`;
        vc.style.width = `${size}px`;
        vc.style.height = `${size}px`;
        vle.style.width = `${size/6}px`;
        vle.style.height = `${size/3}px`;
        vre.style.width = `${size/6}px`;
        vre.style.height = `${size/3}px`;
        vm.style.width = `${size/3}px`;
        vm.style.height = `${size * (2/3)}px`;

        // Virus Reaction on click (turn green)
        vc.addEventListener('click', function(){
            v.style.backgroundColor = '#8DC18F';
            vle.style.backgroundColor = '#16A14E';
            vre.style.backgroundColor = '#16A14E';
            vm.style.backgroundColor = '#16A14E';
            vm.style.transform = 'rotate(630deg)';

            setTimeout(function(){
            v.style.opacity = '0'
            }, 250)
        })
    }

    // function placeV() {
    //     let virus = document.createElement("div");
    //     let size = Math.floor(Math.random() * 150) + 150
    //     virus.className = 'virus'
    //     game1.appendChild(virus);
    //     virus.style.left = `${Math.floor(Math.random() * 100)}%`;
    //     virus.style.top = `${Math.floor(Math.random() * 100)}%`;
    //     virus.style.width = `${size}px`;
    //     virus.style.height = `${size}px`;


    //     virus.addEventListener('click', function(){
    //         virus.className = 'hidden';
    //     })
    //     // virus.forEach(function (eachVirus) {
    //     //     eachVirus.addEventListener('click', function(){
    //     //         virus.className = 'hidden';
    //     //     });
    //     // });
    // }

    

    

    

    
    


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


    // TYPE BATTLE
    let health = 100;
    console.log(health)
    document.addEventListener('keydown', function(){
        if (health > 0) {
            health--;;
            // health = 0;
        } else if (health == 0) {

            setTimeout(function(){
                game3.innerHTML = 'ACCESS GRANTED';
                game3.style.fontSize = '64px';
                game3.style.padding = '50px';
            }, 500)
            
        }


        document.querySelector('#healthBar').style.width = `${(health/100)*100}%`
        console.log(health)

    })

    

    

}())