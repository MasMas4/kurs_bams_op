document.querySelector('.btn-menu').addEventListener('click', function() {
    const menu = document.querySelector('.menu');

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('visible');
        console.log("vis");
    } else {
        menu.classList.remove('visible');
        menu.classList.add('hidden');
        console.log("hid");
    }
});