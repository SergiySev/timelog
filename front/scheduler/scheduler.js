(function (window) {
    'use strict';

    var container;

    function removeChildren(node) {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    }


    function build(data) {
        removeChildren(container);

        Object.keys(data).forEach(function (item) {
            var sGrid = new ScheduleGrid(data[item], item);
            container.appendChild(sGrid.html());
        })
    }

    function addEvent(event, cb) {
        container.addEventListener(event, cb);
    }

    function removeEvent(event, cb) {
        container.addEventListener(event, cb);
    }

    function Scheduler(element) {
        container = document.createElement('ul');
        container.classList.add('schedule-list');
        var holder = document.getElementById(element);
        holder.appendChild(container);
    }

    Scheduler.DELETE_ROW = 'DELETE_ROW';

    Scheduler.prototype.addEvent = addEvent;
    Scheduler.prototype.removeEvent = removeEvent;

    Scheduler.prototype.build = build;

    window.Scheduler = Scheduler;
})(window);
