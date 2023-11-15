const { createApp } = Vue

createApp({
    data () {
        return {
            message: 'Ciao, sono un titolo!',
            immagine: 'https://unsplash.it/600/400?image=613'
        }
    }
}).mount('#app')