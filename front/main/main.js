(function (window) {
    'use strict';

    var paginator;
    var scheduler;
    var submitform;
    var notifier;

    function submitData(desc, time) {
        Connector.insert(desc, time, function (resp) {
            showPageData(paginator.getActive());
            notifier.showHint(resp.description + ' added!');
        });
    }

    function showPageData(page) {
        Connector.select(page, function (resp) {
            paginator.build(resp.paginator.total);
            paginator.setActive(resp.paginator.current);

            scheduler.build(resp.data);
        });
    }

    function deleteRow(id) {
        Connector.delete(id, function (resp) {
            notifier.showHint(resp.msg);
            showPageData(paginator.getActive());
        });
    }

    window.onload = function (e) {
        paginator = new Paginator('pagination');
        scheduler = new Scheduler('scheduler');
        submitform = new SubmitForm('submitform');
        notifier = new Notifier('notifier');

        submitform.addEvent(SubmitForm.SUBMIT, function (e) {
            submitData(e.description, e.timeSpent);
        });

        paginator.addEvent(Paginator.PAGE_CHANGE, function (e) {
            showPageData(e.page)
        });

        scheduler.addEvent(Scheduler.DELETE_ROW, function (e) {
            deleteRow(e.id);
        });

        showPageData(1);
    };

})(window);
