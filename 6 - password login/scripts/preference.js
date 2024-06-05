const preference = document.querySelector('.preference');
const preference_ball = document.querySelector('.preference-ball');
const eye_visible = document.querySelector('.feather-eye');
const eye_hidden = document.querySelector('.feather-eye-off');
const password = document.querySelector('#password');

function preference_clicked () {
    if (preference_ball.classList.contains('preference-no')) {
        preference_ball.classList.remove('preference-no');
        preference_ball.classList.add('preference-yes');
    } else {
        preference_ball.classList.remove('preference-yes');
        preference_ball.classList.add('preference-no');
    }
}

function eye_button () {
    if (!eye_visible.classList.contains('hidden')) {
        console.log('Enter 1st');
        eye_visible.classList.add('hidden');
        eye_hidden.classList.remove('hidden');
        password.type = 'password';
        return;
    }
    
    if (!eye_hidden.classList.contains('hidden')) {
        console.log('Enter 2nd');
        eye_hidden.classList.add('hidden');
        eye_visible.classList.remove('hidden');
        password.type = 'text';
        return;
    }
}