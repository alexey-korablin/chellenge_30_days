'use strict';

(function(){
    // all your code here
    let drumKit = function () {
        document.addEventListener('keydown', function (e) {  // Вешаем событие на нажатие клавиши
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);  //сохраняем в константу audio код клавиши
            if ( !audio ) {  // Если нажата клавиша ког которой не был указан в drum kit - прекращаем работу скрипта
                return
            }
            console.log(audio);
            audio.currentTime = 0;  // При каждом событии устанавливаем позиуию для воспроизведения файла на 0-ю секунду,
            audio.play(); // благодаря этому файл воспроизводится снова не дожидаясь окончания предыдущего воспроизведения
            const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            console.log(key);
            key.classList.add('key__pressed');
            setTimeout(function() {
                key.classList.remove('key__pressed');
            }, 70)
        });
    };
    window.onload = drumKit;
})();