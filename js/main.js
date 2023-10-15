class Nav {
    constructor() {
        this.burgerBtn = document.querySelector('#burger-menu');
        this.burgerOutline = document.querySelector('#burger-menu');
        this.burgerBars = document.querySelector('#burger-menu__bars');
        this.navMenu = document.querySelector('#nav');
        this.body = document.querySelector('body');

        // this.setBurgerBars();
    }    

    addEventsListeners() {
        this.burgerBtn.addEventListener('click', e => {
            this.navMenu.classList.toggle('nav--active');

            if(this.navMenu.classList.contains('nav--active')) {
                this.burgerBars.classList.add('burger-menu__bars--active');
                this.burgerOutline.classList.add('burger-menu--active');
            } else {
                this.burgerBars.classList.remove('burger-menu__bars--active');
                this.burgerOutline.classList.remove('burger-menu--active');
            }

        });
    }
}

const nav = new Nav();
nav.addEventsListeners();