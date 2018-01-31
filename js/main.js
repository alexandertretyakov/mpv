window.addEventListener('load', function() {
    var $popUp = document.querySelector('.pop-up');
    var $overlay = document.querySelector('.overlay');

    document.querySelectorAll('.column--right img')[0].addEventListener('click', function () {
        $overlay.style.display = 'block';
        $popUp.style.display = 'block';
        $popUp.style.backgroundImage = 'url(https://oxvo.ru/wp-content/uploads/2016/08/The-Secret-Life-of-Pets-2-2.jpg)';
    });

    document.querySelectorAll('.column--right img')[1].addEventListener('click', function () {
        $overlay.style.display = 'block';
        $popUp.style.display = 'block';
        $popUp.style.backgroundImage = 'url(https://pmcvariety.files.wordpress.com/2013/06/the-secret-life-of-pets.jpg?w=1000&h=562&crop=1)';
    });

    document.querySelectorAll('.column--right img')[2].addEventListener('click', function () {
        $overlay.style.display = 'block';
        $popUp.style.display = 'block';
        $popUp.style.backgroundImage = 'url(http://zenitbol.ru/_nw/171/43331998.jpg)';
    });

    document.querySelectorAll('.column--right img')[3].addEventListener('click', function () {
        $overlay.style.display = 'block';
        $popUp.style.display = 'block';
        $popUp.style.backgroundImage = 'url(http://cn1.nevsedoma.com.ua/images/2009/104/1/animalsG.jpg)';
    });

    $overlay.addEventListener('click', function () {
        $overlay.style.display = 'none';
        $popUp.style.display = 'none';
    });
});