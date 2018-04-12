function lightsWidget (rootLights) {
    const lightsLamp = document.querySelector(rootLights);
    const lamps = lightsLamp.querySelectorAll('.lights__circle');
    const btnEn = lightsLamp.querySelector('.lights__switch');
    const red = lamps[0];
    const yellow = lamps[1];
    const green = lamps[2];

    red.onclick = redToggleLamp;
    yellow.onclick = yellowToggleLamp;
    green.onclick = greenToggleLamp;
    btnEn.onclick = btnToggleSwitch;

   function btnToggleSwitch() {
       btnEn.classList.toggle('btnEnabled');
   }

   function redToggleLamp() {
               red.classList.toggle('red');
               yellow.classList.remove('yellow');
               green.classList.remove('green');
   }

   function yellowToggleLamp() {
               yellow.classList.toggle('yellow');
               green.classList.remove('green');
               red.classList.remove('red');
   }
   function greenToggleLamp() {
               green.classList.toggle('green');
               red.classList.remove('red');
               yellow.classList.remove('yellow');
   }
}

lightsWidget('#lights_1');
