/* Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente. */
//collegamento Vue Js

const app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        slides: [{
            name: "Svezia",
            text: "Lorem Ipsum",
            image: './assets/img/01.jpg'

        }, {
            name: "Svizzera",
            text: "Lorem Ipsum",
            image: './assets/img/02.jpg'

        }, {
            name: "Gran Bretagna",
            text: "Lorem Ipsum",
            image: './assets/img/03.jpg'

        }, {
            name: "Germania",
            text: "Lorem Ipsum",
            image: './assets/img/04.jpg'

        }, {
            name: "Paradise",
            text: "Lorem Ipsum",
            image: './assets/img/05.jpg'

        }, ]
    },
    methods: {
        slideUp() {
            this.counter--;
            console.log(this.counter)
            this.counterControl();
        },
        slideDown() {
            this.counter++;
            this.counterControl();
        },
        counterControl() {
            if (this.counter < 0) {
                this.counter = 4;
            } else if (this.counter > 4) {
                this.counter = 0;
            }
        },
        timedSlide() {
            this.slideDown();
            this.counterControl();
        }
    },
    mounted() {
        setInterval(this.timedSlide, 1000)
    }
})