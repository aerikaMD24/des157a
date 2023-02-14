(function () {

    'use strict';
    console.log('reading js')

    const btn = document.querySelectorAll('button');
    const inputs = document.querySelectorAll('fieldset');
    const formData = document.querySelectorAll('input[type=text]')
    const outputList = document.querySelector('#outputsList');
    const selection = document.querySelector('select');
    console.log(outputList)

    const worldPic = document.querySelector('#worldPic');
    const world = document.querySelector('#world');
    const pic = document.querySelector('#pic');
    const suspect = document.querySelector('#suspect');

    const images = ["images/suspect1.png", "images/suspect2.png", "images/suspect3.png", "images/suspect4.png", "images/suspect5.png", "images/suspect6.png", "images/suspect7.png", "images/suspect8.png", "images/suspect9.png"]

    const desc1o = document.querySelector('#desc1o');
    const desc2o = document.querySelector('#desc2o');
    const desc1s = document.querySelector('#desc1s');
    const desc2s = document.querySelector('#desc2s');
    const desc1a = document.querySelector('#desc1a');
    const desc2a = document.querySelector('#desc2a');

    const radarStory = document.querySelector('#radarStory');
    const officer = document.querySelector('#officerStory');
    const sheriff = document.querySelector('#sheriffStory');
    const agent = document.querySelector('#agentStory');
    const radar = document.querySelector('#radar');

    const welcomeEye = document.querySelector('#welcomeEye');
    const welcome = document.querySelector('#welcome');
    const eye = document.querySelector('#eye');


    btn[0].addEventListener('click', function (e) {
        e.preventDefault();

        inputs[0].className = 'hidden';
        inputs[1].className = 'showFlex';
    })

    btn[1].addEventListener('click', function (e) {
        e.preventDefault();
        inputs[1].className = 'hidden';
        inputs[0].className = 'showFlex';
    })

    btn[2].addEventListener('click', function (e) {
        e.preventDefault();
        inputs[1].className = 'hidden';
        inputs[2].className = 'showFlex';
    })

    btn[3].addEventListener('click', function (e) {
        e.preventDefault();
        inputs[2].className = 'hidden';
        inputs[1].className = 'showFlex';
    })

    btn[4].addEventListener('click', function (e) {
        e.preventDefault();
        processFormData(formData);
    })

    btn[5].addEventListener('click', function (e) {
        e.preventDefault();
        playAgain();
    })

    function processFormData(formData) {
        const words = [];
        let emptyfields = [];
        let counter = 0;
        for (var i = 0; i < formData.length; i++) {
            if (formData[i].value) {
                words.push(formData[i].value);
            } else {
                emptyfields.push(counter);
            }
            counter++;
        }
        if (emptyfields.length > 0) {
            showErrors(formData, emptyfields);
        } else {
            makeMadlib(words);
            story();
            namePic();
            eyes();
            desc();
            inputs[2].className = 'hidden';
            outputList.className = 'showFlex';
        }
    }

    function showErrors(formData, emptyfields) {
        const errorId = formData[emptyfields[0]].id;
        let errorText = `To access the database, all items need to be completed. Please enter the requested information for the field ${errorId}`;
        let errorTextI = errorText.italics();
        welcome.innerHTML = errorTextI;
    }

    function makeMadlib(words) {

        const word0 = document.querySelectorAll('.word0');
        const word1 = document.querySelectorAll('.word1');
        const word2 = document.querySelectorAll('.word2');
        const word3 = document.querySelectorAll('.word3');
        const selected = document.querySelector('#selected');
        const word4 = document.querySelectorAll('.word4');
        const word5 = document.querySelectorAll('.word5');
        const word6 = document.querySelectorAll('.word6');
        const word7 = document.querySelectorAll('.word7');
        const word8 = document.querySelectorAll('.word8');
        const word9 = document.querySelectorAll('.word9');
        const word10 = document.querySelectorAll('.word10');
        const word11 = document.querySelectorAll('.word11');
        const word12 = document.querySelectorAll('.word12');
        const word13 = document.querySelectorAll('.word13');

        for (const eachZero of word0) {
            eachZero.innerHTML = words[0];
        }
        for (const eachOne of word1) {
            eachOne.innerHTML = words[1];
        }
        for (const eachTwo of word2) {
            eachTwo.innerHTML = words[2];
        }
        for (const eachThree of word3) {
            eachThree.innerHTML = words[3];
        }
        selected.innerHTML = selection.value;
        for (const eachFour of word4) {
            eachFour.innerHTML = words[4];
        }
        for (const eachFive of word5) {
            eachFive.innerHTML = words[5];
        }
        for (const eachSix of word6) {
            eachSix.innerHTML = words[6];
        }
        for (const eachSeven of word7) {
            eachSeven.innerHTML = words[7];
        }
        for (const eachEight of word8) {
            eachEight.innerHTML = words[8];
        }
        for (const eachNine of word9) {
            eachNine.innerHTML = words[9];
        }
        for (const eachTen of word10) {
            eachTen.innerHTML = words[10];
        }
        for (const eachEleven of word11) {
            eachEleven.innerHTML = words[11];
        }
        for (const eachTwelve of word12) {
            eachTwelve.innerHTML = words[12];
        }
        for (const eachThirteen of word13) {
            eachThirteen.innerHTML = words[13];
        }



        for (let i = 0; i < formData.length; i++) {
            formData[i].value = '';
        }
    }

    function namePic() {

        suspect.src = images[getRandom(images.length)];
        worldPic.style.height = '525px';
        world.className = 'hidden'
        setTimeout(function () {
            pic.className = 'showBlock';
        }, 1000)
    }

    function getRandom(max) {
        return Math.floor(Math.random() * (max));
    }

    function desc() {

        if (selection.value == 'officer') {
            setTimeout(function () {
                desc1o.className = 'showBlock';
            }, 2000)
            setTimeout(function () {
                desc2o.className = 'showBlock';
            }, 2500)
        } else if (selection.value == 'sheriff') {
            setTimeout(function () {
                desc1s.className = 'showBlock';
            }, 2000)
            setTimeout(function () {
                desc2s.className = 'showBlock';
            }, 2500)
        } else if (selection.value == 'agent') {
            setTimeout(function () {
                desc1a.className = 'showBlock';
            }, 2000)
            setTimeout(function () {
                desc2a.className = 'showBlock';
            }, 2500)
        }
    }

    function story() {

        radarStory.style.width = '560px'
        radarStory.style.top = '500px'
        radar.className = 'hidden'
        if (selection.value == 'officer') {
            setTimeout(function () {
                officer.className = 'showBlock';
            }, 1500)
        } else if (selection.value == 'sheriff') {
            setTimeout(function () {
                sheriff.className = 'showBlock';
            }, 1500)
        } else if (selection.value == 'agent') {
            setTimeout(function () {
                agent.className = 'showBlock';
            }, 1500)
        }
    }

    function eyes() {

        welcomeEye.style.width = '180px'
        welcomeEye.style.height = '180px'
        welcomeEye.style.top = '350px'
        welcomeEye.style.padding = '15px'
        welcome.className = 'hidden'
        setTimeout(function () {
            eye.className = 'showBlock';
        }, 1500)
    }

    function playAgain() {

        outputList.className = 'hidden';
        inputs[0].className = 'showFlex';

        worldPic.style.height = '325px';
        pic.className = 'hidden'
        setTimeout(function () {
            world.className = 'showBlock';
        }, 1000)

        desc1o.className = 'hidden';
        desc2o.className = 'hidden';
        desc1s.className = 'hidden';
        desc2s.className = 'hidden';
        desc1a.className = 'hidden';
        desc2a.className = 'hidden';

        radarStory.style.width = '250px';
        radarStory.style.top = '300px';
        officer.className = 'hidden';
        sheriff.className = 'hidden';
        agent.className = 'hidden';
        setTimeout(function () {
            radar.className = 'showFlex';
        }, 1500)

        welcomeEye.style.width = '370px'
        welcomeEye.style.height = '280px'
        welcomeEye.style.top = '375px'
        welcomeEye.style.padding = '74px'
        eye.className = 'hidden'
        setTimeout(function () {
            welcome.className = 'showBlock';
        }, 1500)

    }

    let i = 0;
    const text = 'Welcome to the Madlibs Database. Please enter the requested information in order to gain access...'
    var speed = 80;

    function typeWriter() {
        if (i < text.length) {
            document.querySelector("#welcome").innerHTML += text[i];
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();

}())