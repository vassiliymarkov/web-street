document.addEventListener('DOMContentLoaded', function () {
    // Typewriter для логотипа
    const logoTypewriter = new Typewriter('#typewriter', {
        autoStart: true,
        cursor: '|'
    });

    logoTypewriter
        .typeString('Web Street')
        .callFunction(() => {
            console.log('Typewriter animation completed.');
            startFirstScreenAnimations();
        })
        .start();

    // Функция для запуска анимации элементов первого экрана
    function startFirstScreenAnimations() {
        const elements = document.querySelectorAll('.first_screen');

        if (elements.length === 0) {
            console.error("No elements with class 'first_screen' found.");
            return;
        }

        console.log("Animation will start in 2.5 seconds.");

        setTimeout(() => {
            console.log("Starting animation for elements.");
            elements.forEach((element, index) => {
                setTimeout(() => {
                    console.log(`Animating element ${index + 1}`);
                    element.style.opacity = 1;
                    element.style.transform = 'translateY(0)';
                }, index * 0); // Задержка 100 мс между элементами
            });
        }, 1000); // Задержка 2.5 секунд
   1 }

    
    // Меню бургер
    const iconMenu = document.querySelector('.menu_icon');
    const menuBody = document.querySelector('.menu_body');
    if (iconMenu) {
        iconMenu.addEventListener("click", function () {
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
            if (menuLink.hash) {
                const gotoBlock = document.querySelector(menuLink.hash);

                if (gotoBlock) {
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
    }
});
