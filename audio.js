var radio = new Audio();
radio.src = '1.mp3';
var button_mus = document.querySelector('.mus');
var button_rewind_minus = document.querySelector('.rewind_minus');
var button_rewind_plus = document.querySelector('.rewind_plus');
var button_volume_minus = document.querySelector('.volume_minus');
var button_volume_plus = document.querySelector('.volume_plus');

button_mus.onclick = function() {
        if (radio.paused == true) {
            radio.play();
            button_mus.innerHTML = 'Pause';
        } else {
            radio.pause();
            button_mus.innerHTML = 'Play';
        }
    }
    // Функции для громкости
button_volume_minus.onclick = function() { //Громкость -10
    if (radio.volume > 0.1) {
        radio.volume -= 0.1; // Шаг изменения громкости
    }

}
button_volume_plus.onclick = function() { //Громкость +10
        if (radio.volume < 1) {
            radio.volume += 0.1; // Шаг изменения громкости
        }
    }
    // Функции для перемотки
button_rewind_minus.onclick = function() { //Перемотка на 10 секунд назад
    radio.currentTime -= 10;
}
button_rewind_plus.onclick = function() { //Перемотка на 10 секунд вперёд
    radio.currentTime += 10;
}