"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const triggerElement = document.getElementById('typewriter');
    const elements = document.querySelectorAll('.element');
    
    // Включаем анимацию для элементов через 2 секунды после загрузки triggerElement
    setTimeout(() => {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }, index * 100); // Задержка 500 мс между элементами
        });
    }, 2500); // Задержка 2000 мс (2 секунды)
});


document.addEventListener('DOMContentLoaded', function () {
    // Typewriter для логотипа
    const logoTypewriter = new Typewriter('#typewriter', {
        autoStart: true,
        cursor: '|'
    });

    logoTypewriter
        .typeString('Web Street')
        .start();
});
    // Меню бургер
    const iconMenu = document.querySelector('.menu_icon');
    const menuBody = document.querySelector('.menu_body');
    if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        });
    }

    // Прокрутка при клике
    const menuLinks = document.querySelectorAll('.menu_link');
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if (menuLink && document.querySelector(menuLink)) {
                const gotoBlock = document.querySelector(menuLink);

                if (iconMenu.classList.contains('_active')) {
                    document.body.classList.remove('_lock');
                    iconMenu.classList.remove('_active');
                    menuBody.classList.remove('_active');
                }

                gotoBlock.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                e.preventDefault();
            }
        }
    }