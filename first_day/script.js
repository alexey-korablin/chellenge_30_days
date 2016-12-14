'use strict';

(function(){
    // all your code here
    let drumKit = function () {
        function playSound (e) {  // Вешаем событие на нажатие клавиши
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);  //сохраняем в константу audio код клавиши
            if ( !audio ) {  // Если нажата клавиша ког которой не был указан в drum kit - прекращаем работу скрипта
                return
            }
            audio.currentTime = 0;  // При каждом событии устанавливаем позиуию для воспроизведения файла на 0-ю секунду,
            audio.play(); // благодаря этому файл воспроизводится снова не дожидаясь окончания предыдущего воспроизведения
            const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            key.classList.add('key__pressed');
        };

        function removeTransition(e) {
            if ( e.propertyName !== 'color') {
                return;
            }
            this.classList.remove('key__pressed');
        }

        const keys = document.querySelectorAll('.key');
        keys.forEach( key => key.addEventListener('transitionend', removeTransition) );

        document.addEventListener('keydown', playSound);
    };
    window.onload = drumKit;
})();