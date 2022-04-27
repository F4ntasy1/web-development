const openPopUp = document.getElementsByClassName('open-pop-up');
const popUpClose = document.getElementById('popUpClose');
const popUp = document.getElementById('popUp');
const popUpBackGr = document.getElementById('popUpBackground');
const popUpBody = document.getElementById('popUpBody');

for (let i = 0; i < openPopUp.length; i++) {
    openPopUp[i].addEventListener('click', function(e) {
        popUp.classList.add('pop-up_active');
        popUpBackGr.classList.add('pop-up-background_active');
        popUpBody.classList.add('pop-up_body_active');
    });
}

popUpClose.addEventListener('click', function() {
    popUp.classList.remove('pop-up_active');
    popUpBackGr.classList.remove('pop-up-background_active');
    popUpBody.classList.remove('pop-up_body_active');
});

document.addEventListener('keydown', function(e) {
    if(e.keyCode === 27) 
    {
        popUp.classList.remove('pop-up_active');
        popUpBackGr.classList.remove('pop-up-background_active');
        popUpBody.classList.remove('pop-up_body_active');
    }
});

popUpBackGr.addEventListener('click', function(e) {
    if (e.target === popUpBackGr) {
        popUp.classList.remove('pop-up_active');
        popUpBackGr.classList.remove('pop-up-background_active');
        popUpBody.classList.remove('pop-up_body_active');
    }
})