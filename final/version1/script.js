(function(){
    'use strict';
    console.log('reading js');

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