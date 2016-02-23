(function (window) {
    'use strict';

    var tr;
    var desc;
    var time;
    var date;
    var del;
    var delButton;
    var event;

    function fireDeleteRow(id) {
        event.initEvent(Scheduler.DELETE_ROW, true, true);
        event.id = id;
        tr.dispatchEvent(event);
    }

    function onDelete(e) {
        var button = e.target;
        fireDeleteRow( parseInt(button.getAttribute('data-id')));
    }

    function build (cells) {
        desc.innerText = cells.description;
        time.innerText = cells.timespent;
        date.innerText = cells.date;
        delButton.innerText = 'Delete';
        delButton.setAttribute('data-id', cells.id);

        delButton.addEventListener('click', onDelete);
        del.appendChild(delButton);
        tr.appendChild(desc);
        tr.appendChild(time);
        tr.appendChild(date);
        tr.appendChild(del);
    }

    function ScheduleRow(cels) {
        event  = document.createEvent('Event');

        tr = document.createElement('tr');
        desc = document.createElement('td');
        time = document.createElement('td');
        date = document.createElement('td');
        del = document.createElement('td');
        delButton = document.createElement('button');

        build(cels)
    }

    function html() {
        return tr;
    }

    ScheduleRow.prototype.html = html;

    window.ScheduleRow = ScheduleRow;
})(window);
