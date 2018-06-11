'use strict';

(function(){
   const controls = document.querySelectorAll('.controls input');

   console.log(controls.length);

    function changeHandler(e) {
        const suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    controls.forEach(ctrl => ctrl.addEventListener('change', changeHandler));
    controls.forEach(ctrl => ctrl.addEventListener('mousemove', changeHandler));

})();