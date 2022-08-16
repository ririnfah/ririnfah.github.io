// const txtElement = ['Manusia', 'Yang', 'Ingin', 'Bermanfaat', 'Sepanjang', 'Hidup'];
const txtElement = ['Saya adalah seorang manusia yang ingin bermanfaat sepanjang hidup'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function tik() {

    if (count == txtElement.length) {
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-tik').textContent = words;

    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(tik, 200);


})();
