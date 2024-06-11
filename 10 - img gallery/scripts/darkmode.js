function darkmode() {
    const dark_mode_circle = document.querySelector('.button-dark');
    const dark_mode_button = document.querySelector('.dark-mode-container');
    const main_tag = document.querySelector('main')
    const header_tag = document.querySelector('header')
    const gallery_image = document.querySelectorAll('.gallery-img')

    if (dark_mode_circle.classList.contains('dark-mode-circle')) {
        dark_mode_circle.classList.remove('dark-mode-circle')
        dark_mode_button.classList.remove('dark-mode-button')
        main_tag.classList.remove('dark-main')
        header_tag.classList.remove('dark-banner')
        for (let iter = 0; iter < gallery_image.length; iter++) {
            gallery_image[iter].classList.remove('dark-image')
        }
    } else {
        dark_mode_circle.classList.add('dark-mode-circle')
        dark_mode_button.classList.add('dark-mode-button')
        main_tag.classList.add('dark-main')
        header_tag.classList.add('dark-banner')
        for (let iter = 0; iter < gallery_image.length; iter++) {
            gallery_image[iter].classList.add('dark-image')
        }
    }
}