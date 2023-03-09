(function(){
    'use strict';
    console.log('reading js');

    // Variables for the House Zoom-ins and Cut-Outs
    const house = document.querySelector('#mainHouse');
    const zoomIns = document.querySelectorAll('section');const cutouts = document.querySelectorAll('.cutout');
    

    // Exit and Go Back buttons
    const exit = document.querySelectorAll('button')[0];
    const goBack = document.querySelectorAll('button')[1];

    // Variables for the Scrapbook Section
    const scrap2 = document.querySelector('#scrapbookTwo');
    const scrap3 = document.querySelector('#scrapbookThree');
    const scrap2P = document.querySelector('#scrapbookTwo p');
    const scrap3P = document.querySelector('#scrapbookThree p');
    // Images
    const img2one = document.querySelector('#twoOne');
    let img2two = document.querySelector('#twoTwo');
    let img3one = document.querySelector('#threeOne');
    let img3two = document.querySelector('#threeTwo');
    let img3three = document.querySelector('#threeThree');
    const imgs = ['images/curtainIn.jpeg', 'images/curtainOut.jpeg', 'images/crux.jpeg', 'images/weights.jpeg', 'images/kitchenTools.jpeg', 'images/kitchenAll.jpeg']

    
    // Function that zooms in on the 5 different sections of the main house picture and then exits accordingly
    zoomIns.forEach(function (eachZoom) {
        eachZoom.addEventListener('click', zoomPhoto);
        exit.addEventListener('click', function() {
            house.style.width = '45%';
            house.style.top = '50%';
            house.style.left = '50%';
            exit.style.display = 'none';
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
            exit.style.display = 'block';
        }, 1000); 
        // make this a switch eventually
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

    cutouts.forEach(function (eachCut) {
        eachCut.addEventListener('click', clickCutout);
        goBack.addEventListener('click', function() {
            scrap2.style.display = 'none';
        })
    });

    function clickCutout(e) {
        const obj = e.target.id;

        switch(obj) {
            case 'hangers':
              // code block
              break;
            case 'laundry':
              // code block
              break;
            case 'toy':
                scrap2.style.display = 'block';
                img2one.src = imgs[1];
                img2two.src = imgs[1];
                scrap2P.innerHTML = 'text';
            break;
            case 'curtains':
                scrap2.style.display = 'block';
                img2one.src = imgs[0];
                img2two.src = imgs[1];
              break;
            case 'trash':
              // code block
              break;
            case 'globe':
                scrap2.style.display = 'block';
                img2one.src = imgs[2];
                img2two.src = imgs[3];
            break;
            case 'ipad':
              // code block
              break;
            case 'plant':
              // code block
              break;
            case 'tree':
                // code block
            break;
            case 'lamp':
              // code block
              break;
            case 'oven':
                scrap2.style.display = 'block';
                img2one.src = imgs[4];
                img2two.src = imgs[5];
                scrap2P.innerHTML = "I once told my mom's frieends that these were all for show and she wass not happy (we don't drink coffee)";
              break;
            case 'chair':
                // code block
            break;
          }

    }

}())