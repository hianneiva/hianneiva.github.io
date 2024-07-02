const App = Vue.createApp({
  setup() {
    const message = Vue.ref('Hello Vue!');
    return {
      message
    };
  }
});