const blockSet = document.getElementById('blockSet');
const button = document.getElementById('button');
const errorMsg = document.getElementById('errorMsg');

function addNewBlockUser(userName, userEmail, userActive, userAgreement) {
    const div = document.createElement('div');
    const name = document.createElement('p');
    const email = document.createElement('p');
    const activity = document.createElement('p');
    const agreement = document.createElement('p');
    const image = document.createElement('img');
    image.src = 'images/avatar.svg';

    const nameNode = document.createTextNode(userName);
    const emailNode = document.createTextNode(userEmail);
    const activityNode = document.createTextNode(userActive);
    const agreementNode = document.createTextNode(userAgreement);

    name.classList.add('block-set_block-text');
    email.classList.add('block-set_block-text');
    activity.classList.add('block-set_block-text');
    agreement.classList.add('block-set_block-text');
    image.classList.add('block-set_block-avatar');
    div.classList.add('block-set_block');

    name.appendChild(nameNode);
    email.appendChild(emailNode);
    activity.appendChild(activityNode);
    agreement.appendChild(agreementNode);

    div.appendChild(image);
    div.appendChild(name);
    div.appendChild(email);
    div.appendChild(activity);
    div.appendChild(agreement);

    blockSet.appendChild(div);
}

let $number = 0;
let $checkEmails = false;
async function createFetch() {
    const response = await fetch('./service/formProcessing.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify($number),
    });
    const json = await response.json();
    console.log(json.name, json.email, json.activity, json.agreement, json.document);
    
    $number++;

    if (json.document === true)
    {
        errorMsg.classList.remove('error-message_active');
        if (json.name !== null && json.email !== null && json.activity !== null && json.agreement !== null)
        {
            $checkEmails = true;
            addNewBlockUser(json.name, json.email, json.activity, json.agreement);
        }
        createFetch();
    }
    else if (json.document === false && $checkEmails === false)
    {
        errorMsg.classList.add('error-message_active');
    }
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    createFetch();
})