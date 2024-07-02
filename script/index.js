const App = Vue.createApp({
    setup() {
        const message = Vue.ref('Hello Vue!');
        const start = Vue.ref('Start');
        const footerMsg = Vue.ref('Information about the site goes here...');
        return { message, start, footerMsg };
    }
});