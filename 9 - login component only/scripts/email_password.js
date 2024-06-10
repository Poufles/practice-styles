const button_email = document.querySelector('.email-container')
const button_password = document.querySelector('.password-container')

function next() {
    button_email.classList.remove('pos0')
    button_email.classList.add('pos1')
    button_password.classList.remove('pos1')
    button_password.classList.add('pos0')
    button_email.classList.add('show-password-container')
    button_password.classList.add('show-password-container')
}

function back() {
    button_email.classList.remove('pos1')
    button_email.classList.add('pos0')
    button_password.classList.remove('pos0')
    button_password.classList.add('pos1')
    button_email.classList.remove('show-password-container')
    button_password.classList.remove('show-password-container')
}