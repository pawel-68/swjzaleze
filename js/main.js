class Nav {
    constructor() {
        this.burgerBtn = document.querySelector('#burger-menu');
        this.burgerOutline = document.querySelector('#burger-menu');
        this.burgerBars = document.querySelector('#burger-menu__bars');
        this.navMenu = document.querySelector('#nav');
        this.body = document.querySelector('body');

        this.menuItems = document.querySelectorAll('#main-menu__list li');
    }    

    addEventsListeners = () => {
        this.burgerBtn.addEventListener('click', e => {
            this.navMenu.classList.toggle('nav--active');

            if(this.navMenu.classList.contains('nav--active')) {
                this.burgerBars.classList.add('burger-menu__bars--active');
                this.burgerOutline.classList.add('burger-menu--active');
                
                this.showMenuItems();
            } else {
                this.hideMenuItems();
                this.burgerBars.classList.remove('burger-menu__bars--active');
                this.burgerOutline.classList.remove('burger-menu--active');

            }

        });
    }

    showMenuItems = () => {
        let i=0;
        this.menuItems.forEach(item => {
            console.log(item.firstChild);
            item.classList.add('visible');
            item.style.transitionDelay = (i += 0.1) + 's';
        });
    }

    hideMenuItems = () => {
        this.menuItems.forEach(item => {
            item.classList.remove('visible');
            item.style = '';
        })
    }
}

const nav = new Nav();
nav.addEventsListeners();