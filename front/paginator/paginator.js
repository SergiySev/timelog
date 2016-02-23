(function (window) {
    'use strict';

    var ul;
    var currentPage = 1;
    var pages = [];

    var event;

    function removeChildren(node) {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    }

    function firePageChange(page) {
        event.initEvent(Paginator.PAGE_CHANGE, true, true);
        event.page = page;
        ul.dispatchEvent(event);
    }

    function click(ev) {
        var li;

        if (ev.target.nodeName.toLowerCase() === 'li') {
            li = ev.target;
            if (!li.classList.contains('acitve')) {
                var page = parseInt(li.getAttribute('data-page'));
                setActive(page);
                firePageChange(page);
            }
        }
    }


    function setActive(page) {
        pages.forEach(function (li, index) {
            if (index === page - 1) {
                currentPage = page;
                li.classList.add('active');
            } else {
                li.classList.remove('active');
            }
        })
    }

    function getActive() {
        return currentPage;
    }


    function build(count) {
        pages = [];

        removeChildren(ul);
        var i, li;
        for (i = 1; i <= count; i++) {
            li = document.createElement('li');
            li.setAttribute('data-page', i);
            li.innerText = i;
            ul.appendChild(li);
            pages.push(li);
        }
    }


    function addEvent(event, cb) {
        ul.addEventListener(event, cb);
    }

    function removeEvent(event, cb) {
        ul.addEventListener(event, cb);
    }

    function Paginator(element) {
        event = document.createEvent('Event');
        ul = document.createElement('ul');
        ul.classList.add('paginator');

        var holder = document.getElementById(element);
        holder.appendChild(ul);
        ul.addEventListener('click', click);
    }

    Paginator.PAGE_CHANGE = 'PAGE_CHANGE';

    Paginator.prototype.addEvent = addEvent;
    Paginator.prototype.removeEvent = removeEvent;

    Paginator.prototype.build = build;
    Paginator.prototype.setActive = setActive;
    Paginator.prototype.getActive = getActive;

    window.Paginator = Paginator;
})(window);
