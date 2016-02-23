(function (window) {
    'use strict';

    var container;
    var title;
    var table;
    var tbody;

    var headerData;

    function build (rows) {
        var sHeader = new ScheduleHeader(headerData);
        tbody.appendChild(sHeader.html());

        rows.forEach( function (row) {
            var sRow = new ScheduleRow(row);
            tbody.appendChild(sRow.html());
        });
        table.appendChild(tbody);
    }

    function ScheduleGrid(rows, titleText) {
        headerData = ['Description', 'Time Spent', 'Date', ''];

        container = document.createElement('div');
        title = document.createElement('h3');
        table = document.createElement('table');
        tbody = document.createElement('tbody');

        container.classList.add('schedule');
        container.appendChild(title);
        container.appendChild(table);
        title.innerText = titleText;

        build(rows);
    }

    function html () {
        return container;
    }

    ScheduleGrid.prototype.html = html;

    window.ScheduleGrid = ScheduleGrid;
})(window);