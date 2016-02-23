(function (window) {
    'use strict';

    var tr;

    function build (cels) {
        var titleGrid = [];
        cels.forEach( function(item) {
            var th = document.createElement('th');
            th.innerText = item;
            titleGrid.push(th.outerHTML);
        });
        tr.innerHTML = titleGrid.join('');
    }

    function ScheduleHeader(cels) {
        tr = document.createElement('tr');
        build(cels)
    }

    function html() {
        return tr;
    }

    ScheduleHeader.prototype.html = html;

    window.ScheduleHeader = ScheduleHeader;
})(window);