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
            const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // сохраняем в константу key элемент на котором произошло событие
            key.classList.add('key__pressed');  //добавляем к полученнму элементу класс key__pressed
        }

        function removeColor(e) {  //Функция удаления класса key__pressed по событию
            if ( e.propertyName !== 'color') {  //проверяем есть ли в полученном объекте события свойство со значением color. Если нет, то
                return;  // прекращаем выполнение скрипта
            }
            this.classList.remove('key__pressed'); //Удаляем с текущего элемента класс key__pressed
        }

        const keys = document.querySelectorAll('.key'); //получаем все элементы со страницы с классом key и сохраняем их в константу keys
        keys.forEach( key => key.addEventListener('transitionend', removeColor) ); //для каждого элемента массива keys регистрируем event listener для события transitioned. Событие передаем функции removeColor

        document.addEventListener('keydown', playSound);  //регистрируем event listener для события keydown на всем документе и передаем событие в функцию playSound
    };
    window.onload = drumKit; //Функция drumKit готова к работе после полной загрузки страницы.
})();