window.addEventListener('load', function() {
    document.querySelectorAll('.column--right img')[0].addEventListener('click', function () {
        document.querySelector('.pop-up').style.backgroundImage = 'url(images/house.png)';
    });
});