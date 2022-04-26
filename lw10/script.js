const openPopUpOne = document.getElementById('open_pop-up-1');
const openPopUpTwo = document.getElementById('open_pop-up-2');
const popUpClose = document.getElementById('pop-up_close');
const popUp = document.getElementById('pop-up');
const popUpBackGr = document.getElementById('pop-up-background');
let check = 0;

openPopUpOne.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');
    popUpBackGr.classList.add('active');
});

openPopUpTwo.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');
    popUpBackGr.classList.add('active');
});

popUpClose.addEventListener('click', function() {
    popUp.classList.remove('active');
    popUpBackGr.classList.remove('active');
});

document.addEventListener('keydown', function(e) {
    if(e.keyCode === 27) 
    {
        popUp.classList.remove('active');
        popUpBackGr.classList.remove('active');
    }
});

document.addEventListener('click', function(e) {
    let x = event.clientX;
    let y = event.clientY;
    console.log(x, y)
    check++;
    if ( !(y > 247 && y < 1050 && x > 654 && x < 1294) && (y !== 0 && x !== 0) && (check > 1)) 
    {
        popUp.classList.remove('active');
        popUpBackGr.classList.remove('active');
        check = 0;
    }
})