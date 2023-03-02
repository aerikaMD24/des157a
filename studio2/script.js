(function(){
    'use strict';
    console.log('reading js');

    const house = document.querySelector('#houseBack');
    const zoomIns = document.querySelectorAll('#zoomIns section');
    const exit = document.querySelector('button');
    const testImg = document.querySelector('img');
    const scrap = document.querySelector('#scrapbook');

    console.log(zoomIns)

    zoomIns.forEach(function (eachZoom) {
        eachZoom.addEventListener('click', zoomPhoto);
        exit.addEventListener('click', function() {
            house.style.backgroundSize = 'contain';
            house.style.backgroundPosition = 'center';
            testImg.style.display = 'none';
            scrap.classList = 'hidden'
        })
        // eachZoom.addEventListener('mouseleave', function(){
        //     house.style.backgroundSize = 'contain';
        //     house.style.backgroundPosition = 'center';
        // })
    });

    testImg.addEventListener('click', function() {
        console.log('imag eclicked');
        scrap.className = 'showing';
    })



    function zoomPhoto(event) {
        const sect = event.target.id; 
        console.log(sect);
        // make this a switch eventually
        if (sect == 'roof') {
            house.style.backgroundSize = 'auto';
            house.style.backgroundPosition = '60% 23%';
        }
        else if (sect == 'middle') {
            house.style.backgroundSize = 'auto';
            house.style.backgroundPosition = '60% 55%';
            testImg.style.display = 'block';
            
        }
        else if (sect == 'bottom') {
            house.style.backgroundSize = 'auto';
            house.style.backgroundPosition = '60% 85%';
        }
    }

    // document.addEventListener('mousemove', reportPos);

    // function reportPos(event) {
    //     const xPos = event.clientX;
    //     const yPos = event.clientY;
    //     console.log(`Left: ${xPos}px Top: ${yPos}px`);
    // }

}())