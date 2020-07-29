export class ToggleNavbar {
    constructor() {
        this.menuButton = document.querySelector('.nav-toggle');
        this.navLinks = document.querySelector('.nav-links');
        this.scrollLinks = document.querySelectorAll('.scroll-link');
    }

    toggleMenu() {
        this.menuButton.addEventListener('click', () => {
            this.navLinks.classList.toggle('show-links');
        });
    };

    scroll() {
        this.scrollLinks.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                this.navLinks.classList.remove('show-links');

                const id = e.target.getAttribute('href').slice(1);
                const element = document.getElementById(id);
                let position = element.offsetTop;

                window.scrollTo({
                    left: 0,
                    top: position,
                    behavior: 'smooth'
                })
            });
        });
    };
}

export class ShowSlides {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.prevBtn = document.querySelector('.slider-button-up');
        this.nextBtn = document.querySelector('.slider-button-down');
    }
    
    show() {
        this.slides.forEach((slide, index) => {
            slide.style.top = `${index * 100}%`;
        })

        let counter = 0;

        this.nextBtn.addEventListener('click', () => {
            counter++
            this.carousel(counter);
        });

        this.prevBtn.addEventListener('click', () => {
            counter--
            this.carousel(counter);
        });
    }

    carousel(counter) {
        if (counter === this.slides.length) {
            counter = 0
        }

        if (counter < 0) {
            counter = this.slides.length - 1
        }

        this.slides.forEach(slide => {
            slide.style.transform = `translateY(-${counter * 100}%)`
        });
    };
}

export class ChangeNavbar {
    constructor() {
        this.navbar = document.querySelector('.navbar-main');
        this.navLinks = document.querySelector('.nav-links');
    }

    changeColor() {
        window.addEventListener('scroll', () => {
            const scrollHeight = window.pageYOffset;
            const mainHeight = document.getElementById('header').getBoundingClientRect().height;

            if (scrollHeight >= mainHeight - 57) {
                this.navbar.classList.add('change-color');
                this.navLinks.classList.add('change-links-container');
            } else if (scrollHeight <= mainHeight -57) {
                this.navbar.classList.remove('change-color');
                this.navLinks.classList.remove('change-links-container');
            }
        });
    }
}
        
