const openPopUp = document.getElementsByClassName('open-pop-up');
const popUpClose = document.getElementById('popUpClose');
const popUp = document.getElementById('popUp');
const popUpBackGr = document.getElementById('popUpBackground');
const popUpBody = document.getElementById('popUpBody');

const popUpName = document.getElementById('popUpName');
const popUpEmail = document.getElementById('popUpEmail');
const popUpActive = document.getElementById('popUpActive');

const popUpButton = document.getElementById('popUpButton');

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
    popUp.classList.remove('pop-up_active');
    popUpBackGr.classList.remove('pop-up-background_active');
    popUpBody.classList.remove('pop-up_body_active');
})

popUpButton.addEventListener('click', (event) => {
    event.preventDefault();
    const elemName = document.getElementsByClassName('pop-up_form-name')[0];
    const elemEmail = document.getElementsByClassName('pop-up_form-email')[0];
    const elemActivity = document.getElementsByClassName('pop-up_form-activity')[0];
    const elemCheckbox = document.getElementsByClassName('pop-up-checkbox')[0];

    const name = elemName.value;
    const email = elemEmail.value;
    const activity = elemActivity.value;
    const checkbox = elemCheckbox.checked;

    let emailCorrect = true;
    if (email === "" || email.replace(/[0-9@.]/gi, "") === "" || email.replace(/[^.]/gi, "") === "")
    {
        emailCorrect = false;
    }
    else
    {
        let count = 0;
        for (let i = 0; i < email.length; i++)
        {
            if (email[i] === "@")
            {
                count++;
                if (email[i+1] === "" || email[i+1] === undefined)
                {
                    emailCorrect = false;
                    break;
                }
            }
            if (email[i] === "." && (i === 0 || i === email.length - 1))
            {
                emailCorrect = false;
                break;
            }
        }
        if (count !== 1)
        {
            emailCorrect = false;
        }
    }

    let nameCorrect = true;
    if (name.replace(/[a-zA-Zа-яА-Я]/gi, "") !== "" || name === "")
    {
        nameCorrect = false;
    }
    
    let activityCorrect = true;
    if (!activity)
    {
        activityCorrect = false;
    }
    if (nameCorrect === true && emailCorrect === true && activityCorrect === true)
    {
        fetchCreate();
    }

    if (!nameCorrect)
    {
        popUpName.classList.add('pop-up_form-name_active');
    }
    else
    {
        popUpName.classList.remove('pop-up_form-name_active');
    }
    if (!emailCorrect)
    {
        popUpEmail.classList.add('pop-up_form-email_active');
    }
    else
    {
        popUpEmail.classList.remove('pop-up_form-email_active');
    }
    if (!activityCorrect)
    {
        popUpActive.classList.add('pop-up_form-activity_active');
    }
    else
    {
        popUpActive.classList.remove('pop-up_form-activity_active');
    }

    function fetchCreate() {
        const userData = {
            name: name,
            email: email,
            activity: activity,
            checkbox: checkbox,
        };
        const response = fetch('./service/formProcessing.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(userData),
        })
        .then(response => {
            if (!response.ok)
            {
                popUpName.classList.add('pop-up_form-name_active-error');
                popUpEmail.classList.add('pop-up_form-email_active-error');
                popUpActive.classList.add('pop-up_form-activity_active-error');

                const popUpCheckbox = document.getElementById('popUpCheckbox');
                popUpCheckbox.classList.add('pop-up_checkbox_active');

                const popUpButton = document.getElementById('popUpButton');
                popUpButton.classList.add('pop-up_button_active');

                const popUpHeader = document.getElementById('popUpHeader');
                popUpHeader.classList.add('pop-up_header_active');

                const popUpErrorText = document.getElementById('popUpErrorText');
                popUpErrorText.classList.add('pop-up_error-status_active');
            }
            else
            {
                popUp.classList.remove('pop-up_active');
                popUpBackGr.classList.remove('pop-up-background_active');
                popUpBody.classList.remove('pop-up_body_active');
            }
        });
    }
})