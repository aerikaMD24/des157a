(function(){
    'use strict';
    console.log('reading js');

    const btns = document.querySelectorAll('button');
    const controlCenter = document.querySelector('#controlCenter');
    const game1 = document.querySelector('#game1');
    const game2 = document.querySelector('#game2');
    const game3 = document.querySelector('#game3');
    const alertBox= document.querySelector('#alertBox');

    // Audio Elements Provided by SoundJay
    const virusDie = new Audio('audio/button-4.mp3');
    const zoomSound = new Audio('audio/camera-focusing-01.mp3');

    // Control Center Navigation

    // Instruction
    setTimeout(function(){
        alertBox.className = 'showing';
        document.querySelector('#alertBox h2').innerHTML = 'Greetings!';
        document.querySelector('#alertBox p').innerHTML = 'It appears that we have some trouble brewing at the agency. Subject #157 has escaped and we need to stop them. Try looking into the database to find out more about them and their potential whereabouts(Sounds provided by SoundJay)';
    }, 1500)

    // Email Button
    btns[0].addEventListener('click', function() {
    })

    // News Button
    btns[1].addEventListener('click', function() {
    })

    // Database Button
    btns[2].addEventListener('click', function() {
        game1.className = 'showing';
        game2.className = 'hidden';
        game3.className = 'hidden';
        controlCenter.className = 'hidden';

        setTimeout(function(){
            const virusAttack = setInterval(createVirus, 500)
            setTimeout(endVirus, 7500);  
            function endVirus() {
            clearInterval(virusAttack);
            }
        }, 5000)
        

        setTimeout(function(){
            alertBox.className = 'showing';
            document.querySelector('#alertBox h2').innerHTML = 'Warning!';
            document.querySelector('#alertBox p').innerHTML = "It appears you're being hacked. Initiatiing Virus Hunter Protocol. Click on the viruses to eject theem from the system";
        }, 6000) // 1000
        
    })

    // CCTV Button
    btns[3].addEventListener('click', function() {
        game1.className = 'hidden';
        game2.className = 'showing';
        game3.className = 'hidden';
        controlCenter.className = 'hidden';

        setTimeout(function(){
            alertBox.className = 'showing';
            document.querySelector('#alertBox h2').innerHTML = 'Hurry!';
            document.querySelector('#alertBox p').innerHTML = "It appears that the hacker is trying to infiltate or entire system but we may have a visual. We've tracked the hacker to this location. Try clicking on different suspects till the hacker reveals themselves. Don't be afraid to click on the same suspect more then once, people can lie after all...";
        }, 1000) // 1000
    })

    // Quit Button
    btns[4].addEventListener('click', function() {
        location.reload();
    })

    // Report Button
    btns[5].addEventListener('click', function() {
        game1.className = 'hidden';
        game2.className = 'hidden';
        game3.className = 'showing';
        controlCenter.className = 'hidden';

        setTimeout(function(){
            alertBox.className = 'showing';
            document.querySelector('#alertBox h2').innerHTML = 'Hurry!';
            document.querySelector('#alertBox p').innerHTML = "It appears that we're almost taken over! Use your spy skills (spam click your keyboard like an expert hacker) to defeat the enemy before time runs out!'";
        }, 1500)

        const timer = document.querySelector('#timer');

    let counter = 36;
    let myInterval = setInterval(countdown, 1000);

    function countdown() {
        if (counter > 0) {
        counter--;
        timer.innerHTML = `${counter}s`;
    } else {
        clearInterval(myInterval)
        if (health != 0){
            setTimeout(function(){
                alertBox.className = 'showing';
                document.querySelector('#alertBox h2').innerHTML = 'Sorry';
                document.querySelector('#alertBox p').innerHTML = "It's too late, you weren't able to hack the systems in time...";
                document.querySelector('#enemyType').innerHTML = "<button class='susButton'>It appears that you have lost</button>"
                susBtn();
            }, 1000) // 1000
        }  
    }
    }

    setTimeout(function(){
        timer.innerHTML = '0s';
    }, 36 * 1000);

    typeWriter();
    })
    

    // SusButton returns user to control
    function susBtn(){
        document.querySelector('.susButton').addEventListener('click', function(){
            game1.className = 'hidden';
            game2.className = 'hidden';
            controlCenter.className = 'showing';
        })
    }
    

    // Alert Box 

    document.querySelector('#alertBtn').addEventListener('click', function(){
        alertBox.className = 'hidden';
    })
    
    // GAME 1 JS

    // If button is pressed, nothing will happen and an errror message will show
    document.querySelector('#fakeButton').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#errorMessage').innerHTML = '*** Sorry, it appears there was an error...'
        console.log(vCount);
    })

    let vCount = 15;
    
    function createVirus() {
        // vCount++;
        
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

        // Virus Reaction on click (turn green and disappears)
        vc.addEventListener('click', function(){
            v.style.backgroundColor = '#8DC18F';
            vle.style.backgroundColor = '#16A14E';
            vre.style.backgroundColor = '#16A14E';
            vm.style.backgroundColor = '#16A14E';
            vm.style.transform = 'rotate(630deg)';

            setTimeout(function(){
            v.style.opacity = '0'
            }, 250)
            setTimeout(function(){
                v.remove();
                }, 251)
            vCount--;
            virusDie.play();

            // Feedback message when viruses are cleared
            if (vCount <= 0) {
                setTimeout(function(){
                    alertBox.className = 'showing';
                    document.querySelector('#alertBox h2').innerHTML = 'Good Job!';
                    document.querySelector('#alertBox p').innerHTML = "It appears <s>some</s> all of the viruses have been handled. <s>Unfortunately, the hacker has managed to get onto the system</s> You have successfully got rid of the intruder and can now proceed as noraml.";
                    document.querySelector('#messageLog p').innerHTML = "<p>You may have gotten rid of my malware, but that's not the end of it. While you were distracted with that I've managed to hack my way into you entire agency's system. Good luck finding me, if only you had a way to <em>spy on me visually</em>. Then maybe you'd have a chance at stopping me! Toodles little agent!</p> <button class='susButton'>Figure out a way to get a visual on the hacker</button>"
                    document.querySelector('#messageLog p').style.color = '#ED4141';
                    susBtn();
                }, 1000)

            }
        })
    }


    // GAME 2 JS

    
    const susM = document.querySelector('#susMessage');

    const notSusMessage = ["It's not me! I'm just acting suspicious for fun. It's the latest TikTok trend you know?", "Shush! I'm a fellow agent working undercover, it's not me!", "Stop bothering me, I'm retired. It's not me you're looking for. Now shoo!", "Fine, fine you caught me! But this is not the end, agent... <br> <button class='susButton'>Try and catch me if you Can!</button>"]
    

    // Zoom-In Sections, the suspects
    const sus = document.querySelectorAll('#suspects div')
    const footage = document.querySelector('#footage');
    const camUI = document.querySelectorAll('#camera img')
    const rec = document.querySelector('#rec');
    const recDot = document.querySelector('#rec div');
    const recP = document.querySelector('#rec p');

    // Zzoom out TEST
    document.querySelector('#zoomOut').addEventListener('click', function(){
        // Zoom Out Footage
        footage.style.width = '100%';
        footage.style.top = '50%';
        footage.style.left = '50%';
        // Cam UI Shrink
        camUI.forEach(function (eachCamUI) {
            eachCamUI.style.width = '150px';
        });
        recDot.style.width = '35px';
        recDot.style.height = '35px';
        recP.style.fontSize = '24px';
        rec.style.right = '40px';
        rec.style.width = '100px';

        document.querySelector('#zoomOut').className = 'hidden';
        susM.className = 'hidden';
        sus.forEach(function (eachSus) {
            eachSus.className = 'showing'
        });
        
    })

    sus.forEach(function (eachSus) {
        eachSus.addEventListener('click', zoomSus);
        // exit function 
    });

    function zoomSus(e) {
        zoomSound.play();
        sus.forEach(function (eachSus) {
            eachSus.className = 'hidden'
        });
        document.querySelector('#zoomOut').className = 'showing';
        camUI.forEach(function (eachCamUI) {
            eachCamUI.style.width = '250px';
        });
        recDot.style.width = '50px';
        recDot.style.height = '50px';
        recP.style.fontSize = '32px';
        rec.style.right = '80px';
        rec.style.width = '130px';

        susM.className = 'showing';
        let susNum = Math.floor(Math.random() * notSusMessage.length);
        susM.innerHTML = notSusMessage[susNum];
        if (susNum == 3) {
            susBtn();
        }
        const sussyBaka = e.target.id;
        switch(sussyBaka) {
            case 'suspect1':
                footage.style.width = '200%';
                footage.style.top = '90%';
                footage.style.left = '90%';
                susM.style.top = '20%';
                susM.style.left = '45%';
                // top: 20%;
                // left: 45%;
                // box-shadow: 20px -8px rgba(20, 50, 50, 0.5);
            break;
            case 'suspect2':
                footage.style.width = '220%';
                footage.style.top = '70%';
                footage.style.left = '50%';
                susM.style.top = '25%';
                susM.style.left = '5%';
                susM.style.boxShadow = '-20px -8px rgba(20, 50, 50, 0.5)'
            break;
            case 'suspect3':
                footage.style.width = '230%';
                footage.style.top = '95%';
                footage.style.left = '0';
                susM.style.top = '15%';
                susM.style.left = '20%';
                susM.style.boxShadow = '-20px -8px rgba(20, 50, 50, 0.5)'
            break;
            case 'suspect4':
                footage.style.width = '200%';
                footage.style.top = '10%';
                footage.style.left = '75%';
                susM.style.top = '7%';
                susM.style.left = '55%';
                susM.style.boxShadow = '20px -8px rgba(20, 50, 50, 0.5)'
            break;
            case 'suspect5':
                footage.style.width = '230%';
                footage.style.top = '0';
                footage.style.left = '0';
                susM.style.top = '20%';
                susM.style.left = '10%';
                susM.style.boxShadow = '-20px -8px rgba(20, 50, 50, 0.5)'
            break;
        }
        
    }


    // GAME 3 JS

    // TYPE BATTLE
    let health = 300;
    document.addEventListener('keydown', function(){
        if (health > 0) {
            health--;;
        } else if (health == 0) {

            setTimeout(function(){
                document.querySelector('#barContainer').innerHTML = 'ACCESS GRANTED';
                document.querySelector('#barContainer').style.color = 'lightblue';
                document.querySelector('#barContainer').style.fontSize = '64px';
                setTimeout(function(){
                    alertBox.className = 'showing';
                    document.querySelector('#alertBox h2').innerHTML = 'Congrats';
                    document.querySelector('#alertBox p').innerHTML = "You've managed to hack the system in time! You did it!";
                    document.querySelector('#alertBtn').className = 'susButton';
                    susBtn();
                }, 1000) // 1000
            }, 500)
            
        }


        document.querySelector('#healthBar').style.width = `${(health/300)*100}%`

    })


    let i = 0;
    const text = "Ha. Ha. Ha. Did you really think you can stop me? I'm a master hacker! Anything you do is futile because my algorithims are absoluetly superb. After I frame you as the hacker I'm going to use your agency's database to fuel my goals or world domination. MWAHAHAHA"
    var speed = 80;

    function typeWriter() {
        if (i < text.length) {
            document.querySelector("#enemyType").innerHTML += text[i];
            i++;
            setTimeout(typeWriter, speed);
        }
    }


}())