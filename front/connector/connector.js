(function (window) {
    'use strict';

    function asyncCall(xhr, cb) {
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    cb(JSON.parse(xhr.responseText));
                } else {
                    console.error(xhr.statusText);
                }
            }
        };
        xhr.onerror = function (e) {
            console.error(xhr.statusText);
        };
    }

    Connector.insert = function (desc, time, cb) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'back/insert.php', true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        asyncCall(xhr, cb);
        xhr.send("description=" + desc + "&timespent=" + time);
    };

    Connector.delete = function (id, cb) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'back/delete.php', true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        asyncCall(xhr, cb);
        xhr.send("id=" + id);
    };

    Connector.select = function (from, cb) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'back/select.php', true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        asyncCall(xhr, cb);
        xhr.send("page=" + from);
    };

    function Connector() {

    }

    window.Connector = Connector;
})(window);
