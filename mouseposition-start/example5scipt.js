(function () {
    'use strict';

    const container = document.querySelector('#container');
    const hotspots = document.querySelectorAll('#container div');
    const theImg = document.querySelector('div img');
    const exit = document.querySelector('button');

    hotspots.forEach(function (eachSpot) {
        eachSpot.addEventListener('mouseover', zoomPhoto);
        exit.addEventListener('click', function() {
            theImg.className = 'start'
        })
    });

    function zoomPhoto(event) {
        const thisCorner = event.target.id; 
        console.log(thisCorner);
        switch(thisCorner) {
            case 'topleft': theImg.className = 'topleft'; break
            case 'topright': theImg.className = 'topright'; break
            case 'bottomleft': theImg.className = 'bottomLeft'; break
            case 'bottomright': theImg.className = 'bottomright'; break
            case 'center': theImg.className = 'center'; break
        }
    }

    document.addEventListener('mousemove', reportPos);

    function reportPos(event) {
        const xPos = event.clientX;
        const yPos = event.clientY;
        console.log(`Left: ${xPos}px Top: ${yPos}px`);
    }




})();