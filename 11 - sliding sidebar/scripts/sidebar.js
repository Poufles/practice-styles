function menu() {
    const menu_container = document.querySelector('.sidebar-container')

    if (menu_container.style.width !== '300px')
        menu_container.style.width = '300px'
    else menu_container.style.width = '0px'
}