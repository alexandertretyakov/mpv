window.addEventListener('load', function() {
    var $popUp = document.querySelector('.pop-up');
    var $overlay = document.querySelector('.overlay');

    document.querySelector('.column--right').addEventListener('click', function (e) {
        if (e.target.tagName === 'IMG') {
            $overlay.classList.add('open');
            $popUp.classList.add('open');
            $popUp.style.backgroundImage = 'url('+ e.target.dataset.bigImage +')';
        }
    });

    $overlay.addEventListener('click', function () {
        $overlay.classList.remove('open');
        $popUp.classList.remove('open');
    });
});