(function (window) {

    var div;
    var timer;


    function showHint(msg) {
        div.classList.remove('hide');
        div.innerText = msg;
        clearTimeout(timer);

        timer = setTimeout(function () {
            div.classList.add('hide');
            div.innerText = '';
        }, 1500);
    }

    function Notifier(elemId) {
        div = document.getElementById(elemId);
        div.classList.add('notifier');
        div.classList.add('hide');
    }

    Notifier.prototype.showHint = showHint;

    window.Notifier = Notifier;
})(window)