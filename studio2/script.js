(function(){
    'use strict';
    console.log('reading js');

    const house = document.querySelector('#mainHouse');
    const zoomIns = document.querySelectorAll('section');const cutouts = document.querySelectorAll('.cutout');
    const scrap2 = document.querySelector('#scrapbookTwo');

    // Exit and Go Back buttons
    const exit = document.querySelectorAll('button')[0];
    const goBack = document.querySelectorAll('button')[1];

    
    // Function that zooms in on the 5 different sections of the main house picture and then exits accordingly
    zoomIns.forEach(function (eachZoom) {
        eachZoom.addEventListener('click', zoomPhoto);
        exit.addEventListener('click', function() {
            house.style.width = '45%';
            house.style.top = '50%';
            house.style.left = '50%';
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
            // house.style.width = '45%';
            // house.style.top = '50%';
            // house.style.left = '50%';
            // cutouts.forEach(function (eachCut) {
            //     eachCut.style.display = 'none';
            // })
            // for (let i = 0; i < zoomIns.length; i++) {
            //     zoomIns[i].style.display = 'block';
            // }
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
                // code block
            break;
            case 'curtains':
                scrap2.style.display = 'block';
              break;
            case 'trash':
              // code block
              break;
            case 'globe':
                // code block
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
              // code block
              break;
            case 'chair':
                // code block
            break;
 
          }

    }

}())