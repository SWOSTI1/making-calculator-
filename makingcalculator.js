let display = document.getElementById('screen');

const show = (n) => {
    display.value += n;
}

const wipe = () => {
    display.value = '';
}

const calc = () => {
    display.value = eval(display.value);
}