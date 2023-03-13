(function(){
    'use strict';
    console.log('reading js');

    // Variables for the House Zoom-ins and Cut-Outs
    const house = document.querySelector('#mainHouse');
    const zoomIns = document.querySelectorAll('section');
    const cutouts = document.querySelectorAll('.cutout');
    

    // Exit and Go Back buttons
    const goBack = document.querySelectorAll('button')[0];
    const exitA = document.querySelectorAll('button')[1];
    const exitB = document.querySelectorAll('button')[2];

    // Variables for the Scrapbook Section
    const scrapA = document.querySelector('#scrapbookA');
    const scrapB = document.querySelector('#scrapbookB');
    const scrapAP = document.querySelector('#scrapbookA p');
    const scrapBP = document.querySelector('#scrapbookB p');
    const scrapAh2 = document.querySelector('#scrapbookA h2');
    const scrapBh2 = document.querySelector('#scrapbookB h2');
    // Images
    let img2A = document.querySelector('#twoA');
    let img2B = document.querySelector('#twoB');
    let img3A = document.querySelector('#threeA');
    let img3B = document.querySelector('#threeB');
    let img3C = document.querySelector('#threeC');
    const imgs = ['images/clothesBin.jpeg', 'images/laundry.jpeg', 'images/fit1.jpeg', 'images/fit2.jpeg', 'images/stuffies.jpeg', 'images/balloons.jpeg', 'images/curtainIn.jpeg','images/curtainOut.jpeg', 'images/accessoryBin.jpeg', 'images/pencils.jpeg', 'images/toothbrush.jpeg', 'images/crux.jpeg', 'images/weights.jpeg', 'images/humidifier.jpeg', 'images/tech.jpeg', 'images/techSupport.jpeg', 'images/flowersDecor.jpeg', 'images/flowers.jpeg', 'images/pots.jpeg', 'images/wreath.jpeg', 'images/tree.jpeg', 'images/lamp.jpeg', 'images/flashlight.jpeg', 'images/light.jpeg', 'images/kitchenAll.jpeg', 'images/kitchenStuff.jpeg', 'images/kitchenTools.jpeg', 'images/chairIn.jpeg', 'images/sofa.jpeg', 'images/chairOut.jpeg']

    
    // Function that zooms in on the 5 different sections of the main house picture and then exits accordingly
    zoomIns.forEach(function (eachZoom) {
        eachZoom.addEventListener('click', zoomPhoto);
        goBack.addEventListener('click', function() {
            house.style.width = '45%';
            house.style.top = '50%';
            house.style.left = '50%';
            goBack.style.display = 'none';
            for (let i = 0; i < cutouts.length; i++) {
                cutouts[i].style.display = 'none';
            }
            for (let i = 0; i < zoomIns.length; i++) {
                zoomIns[i].style.display = 'block';
            }
        })
    });

    // Function zooms in on image based on section location: top, midleft, midright, bottomleft and bottomright
    // pictures also appear after a delay (to account for zoom animation)
    // Exit button appears and sections zones disappear
    function zoomPhoto(e) {
        const sect = e.target.id;
        setTimeout(function(){
            goBack.style.display = 'block';
        }, 1000); 

        if (sect == 'top') {
            house.style.width = '200%';
            house.style.top = '130%';
            house.style.left = '50%';
            setTimeout(function(){
                cutouts[0].style.display = 'block';
                cutouts[1].style.display = 'block';
            }, 1000);
        }
        else if (sect == 'midLeft') {
            house.style.width = '200%';
            house.style.top = '10%';
            house.style.left = '80%';
            cutouts[2].style.display = 'block';
            cutouts[3].style.display = 'block'
        }
        else if (sect == 'midRight') {
            house.style.width = '200%';
            house.style.top = '10%';
            house.style.left = '20%';
            cutouts[4].style.display = 'block';
            cutouts[5].style.display = 'block';
            cutouts[6].style.display = 'block';
        }
        else if (sect == 'bottomLeft') {
            house.style.width = '200%';
            house.style.top = '-90%';
            house.style.left = '80%';
            cutouts[7].style.display = 'block';
            cutouts[8].style.display = 'block';
            cutouts[9].style.display = 'block';
        }
        else if (sect == 'bottomRight') {
            house.style.width = '200%';
            house.style.top = '-90%';
            house.style.left = '20%';
            cutouts[10].style.display = 'block';
            cutouts[11].style.display = 'block'
        }
        for (let i = 0; i < zoomIns.length; i++) {
            zoomIns[i].style.display = 'none';
        }
    }


    // Function opens 'scrapbook' when cutout of image is clicked
    cutouts.forEach(function (eachCut) {
        eachCut.addEventListener('click', clickCutout);
        exitA.addEventListener('click', function() {
            scrapA.style.display = 'none';
            scrapB.style.display = 'none';
        })
        exitB.addEventListener('click', function() {
            scrapA.style.display = 'none';
            scrapB.style.display = 'none';
        })
    });

    // Function specifies photos and texts depending on which cutout was clicked
    function clickCutout(e) {
        const obj = e.target.id;

        switch(obj) {
            case 'laundry':
                scrapA.style.display = 'block';
                img2A.src = imgs[0];
                img2B.src = imgs[1];
                scrapAP.innerHTML = "Not ony are th content of my closets pink, but the boxes containing them are too. (Yes those are ikea cabinets lol) I'd apprciate the pink laundry bin mor if I saw it more often but alas I'm terrible with putting away clothes properly and it often gets buried under them";
                scrapAh2.innerHTML = 'Pink Clothes deserve Pink Containers';
              break;
            case 'hangers':
                scrapA.style.display = 'block';
                img2A.src = imgs[2];
                img2B.src = imgs[3];
                scrapAP.innerHTML = 'Some favorite pink outfits of mine that I wore recently. I definitely have a lot more, and not just clothes but accessories too. What can I say? Pink has always been my favorite';
                scrapAh2.innerHTML = 'Dressed like Barbie (Or Elle Woods)';
              break;
            case 'toy':
                scrapA.style.display = 'block';
                img2A.src = imgs[4];
                img2B.src = imgs[5];
                scrapAP.innerHTML = 'My Stuff Toy Collection :D Pink edition lol. Also a picture of old balloons from a recent birthday party (mine). I bet th balloons are still around cause no one in my family likes popping balloons.';
                scrapAh2.innerHTML = "It's my (pink) Party...";
            break;
            case 'curtains':
                scrapA.style.display = 'block';
                img2A.src = imgs[6];
                img2B.src = imgs[7];
                scrapAP.innerHTML = 'We were considering getting pink blinds or pink shutters before intalling the curtains. And who, knows? We still might. These curtains are for the living room and outfoor patio and I have yet to put and permanemnt window accessory for my own room so...';
                scrapAh2.innerHTML = 'Curtain call for Curtains';
              break;
            case 'trash':
                scrapB.style.display = 'block';
                img3A.src = imgs[8];
                img3B.src = imgs[9];
                img3C.src = imgs[10];
                scrapBP.innerHTML = "Or maybe I can contain them. In various pink containers. I feel like half of these are from Daiso. Differnt containers for some hair accessories (Note pink hairband), stationary and toothbrush (which is also pink)";
                scrapBh2.innerHTML = "I can't contain it";
              break;
            case 'globe':
                scrapB.style.display = 'block';
                img3A.src = imgs[11];
                img3B.src = imgs[12];
                img3C.src = imgs[13];
                scrapBP.innerHTML = 'Some Extra stuff I did not know how to categorize. My pink globe (I used to be obssesed with maps and therefore globes as a kid, I could draw a somwhat decent world map from memory), humidfier (new), a pink crucifix which was, and some pink weights (that go unused rip)';
                scrapBh2.innerHTML = 'Extra Pink';
            break;
            case 'ipad':
                scrapA.style.display = 'block';
                img2A.src = imgs[14];
                img2B.src = imgs[15];
                scrapAP.innerHTML = "What's funny to me about this is that you can see that I not only have new pink technology (Ipad, Laptop) but an old on too. Do kids even know what a Nintndo DS is nowadays? Anyways my favorite color has not changed at all";
                scrapAh2.innerHTML = 'Thankyou Apple for Pink Tech Options';
              break;
            case 'plant':
                scrapB.style.display = 'block';
                img3A.src = imgs[16];
                img3B.src = imgs[17];
                img3C.src = imgs[18];
                scrapBP.innerHTML = "So those pot were spraypainted and to be honest we got the wrong shade of pink but it's too late now to fix that. Then there's real pink flowers outside and then fake pink flowers inside.";
                scrapBh2.innerHTML = 'Petty Pink Plowers';
              break;
            case 'tree':
                scrapA.style.display = 'block';
                img2A.src = imgs[19];
                img2B.src = imgs[20];
                scrapAP.innerHTML = "Yes, that is a pink Santa next to our Pink Christmas tree. Our relatives were impressed except my younger cousins who were scared of dol Santa in general. The Christmas Wreath is also pink and to be honest there was even more decorations but I got too lazy to find the pictures whoops";
                scrapAh2.innerHTML = "I've been dreaming of a Pink Christmas";
            break;
            case 'lamp':
                scrapB.style.display = 'block';
                img3A.src = imgs[21];
                img3B.src = imgs[22];
                img3C.src = imgs[23];
                scrapBP.innerHTML = "Like the lamp with a pink tutu? it's actually my dad's (mom's request). Then there's the pink decoration on the ceiling light and my trusty flashlight (which I probably got from Daiso).";
                scrapBh2.innerHTML = 'Pink Light';
              break;
            case 'oven':
                scrapB.style.display = 'block';
                img3A.src = imgs[24];
                img3B.src = imgs[25];
                img3C.src = imgs[26];
                scrapBP.innerHTML = "Funny story I once told my mom's friends the pink tools were show which to b fair they were at the time cause they had yet to be used (or washed). She was not happy about that. That coffee maker is also unused by the way. Our family doesn't drink coffee, my mom just thought it was cute";
                scrapBh2.innerHTML = 'Pink for Show';
              break;
            case 'chair':
                scrapB.style.display = 'block';
                img3A.src = imgs[27];
                img3B.src = imgs[28];
                img3C.src = imgs[29];
                scrapBP.innerHTML = "When my mom was younger heer favorite color was red. After she had me it became pink and not that lovee of that color has spread to the ret of the furniture. Which I don't mind cause again it's my favorite color but it sure is somthing everyone notices when they visit our house.";
                scrapBh2.innerHTML = "'Wow your house is really pink'";
            break;
          }

    }

}())