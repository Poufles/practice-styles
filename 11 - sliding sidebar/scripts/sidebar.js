function menu() {
    const menu_container = document.querySelector('.sidebar-container')
    const overlay = document.querySelector('.overlay')

    if (menu_container.style.width !== '300px')
        menu_container.style.width = '300px'
    else menu_container.style.width = '0px'

    if (overlay.style.display === 'block')
        overlay.style.display = 'none'
    else overlay.style.display = 'block'
}