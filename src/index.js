document.addEventListener('DOMContentLoaded', () => {
    import(/* webpackChunkName: "Home" */ './home')
        .then((src) => {
            console.log('Home.js is loaded.');
            src.default();
        })
        .catch((err) => console.log('Error loading Home.js', err));
});
