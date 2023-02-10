(function(){

    'use strict';
    console.log('reading js')

    const btn = document.querySelectorAll('button');
    const inputs = document.querySelectorAll('fieldset');
    const formData = document.querySelectorAll('input[type=text]')

    // can i do this as a switch statement or something?
    btn[0].addEventListener('click', function(e) {
        e.preventDefault();
        inputs[0].className = 'hidden';
        inputs[1].className = 'showing';
    })

    btn[1].addEventListener('click', function(e) {
        e.preventDefault();
        inputs[1].className = 'hidden';
        inputs[0].className = 'showing';
    })

    btn[2].addEventListener('click', function(e) {
        e.preventDefault();
        // inputs[1].className = 'hidden';
        // inputs[2].className = 'showing';
    })

    btn[3].addEventListener('click', function(e) {
        e.preventDefault();
        inputs[2].className = 'hidden';
        inputs[1].className = 'showing';
    })

    // btn[4].addEventListener('click', function(e){
    //     e.preventDefault();
    //     console.log()
    //     processFormData(formData);
    // })

    function processFormData(formData) {
        const words = [];
        for (var i = 0; i < formData.length; i++) {
            words.push(formData[i].value);
        } 
        makeMadlib(words);
    }

    function makeMadlib(words) {
        const myText = `Here are the words ${words}`
        console.log(myText);

        const myStory = `Last seen in ${words[3]}, the suspect, with multiple counts of ${words[10]}, identity fraud and ${words[11]} laundering is likely to be behind the case of the ${words[2]} missing ${words[8]}. Authorities tried to arrest them but failed when they threw a ${words[12]} in the face of Officer ${words[1]} and then proceeded to escape via stolen ${words[13]}.`

        const storyPara = document.querySelector('#story');
        storyPara.innerHTML = myStory;




        for (let i = 0; i < formData.length; i++) {
            formData[i].value = '';
        }
    }

    // DELETE LATER, PUREY FOR TESTING
    // const testText = 'I am typing this out one character at a time woo';
    // const textSpeed = 50;
    // const storyPara = document.querySelector('#story');
    // function typeWriter() {
    //     for (let i = 0; i < testText.length; i++) {
    //         console.log(testText.length)
    //         storyPara.innerHTML = testText.charAt(i);
    //         setTimeout(typeWriter, textSpeed);
    //     }
    // }
    // typeWriter();
     

    // var i = 0;
    // var txt = 'Lorem ipsum typing effect!'; /* The text */
    // var speed = 50; /* The speed/duration of the effect in milliseconds */
    
    // function typeWriter() {
    //   if (i < txt.length) {
    //     document.getElementById("demo").innerHTML += txt.charAt(i);
    //     i++;
    //     setTimeout(typeWriter, speed);
    //   }
    // }

    

}())