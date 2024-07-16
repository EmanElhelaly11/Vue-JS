const { createApp } = Vue;

createApp({
    data() {
        return {
            name: 'Eman',
            age: 22,
            message: 'Hello World!'
        }
    }
}).mount('#app-root')