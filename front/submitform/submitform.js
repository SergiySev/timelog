(function (window) {
    'use strict';

    var div;
    var descField;
    var timeSpentField;
    var submit;
    var event;

    function fireSubmit(desc, time) {
        event.initEvent(SubmitForm.SUBMIT, true, true);
        event.description = desc;
        event.timeSpent = time;
        div.dispatchEvent(event);
    }

    function onSubmit() {
        if(descField.value !== '' && timeSpentField.value !== '') {
            fireSubmit(descField.value, timeSpentField.value);
            descField.value = timeSpentField.value = '';
        }
    }

    function inputField(id, labelText) {
        var label = document.createElement('label');
        label.setAttribute('for', id);
        label.innerText = labelText;

        var input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', id);
        label.appendChild(input);

        return label;
    }

    function build() {
        div.appendChild( inputField('description', 'Description: ') );
        descField = document.getElementById('description');
        div.appendChild( inputField('timeSpent', 'Time Spent: ') );
        timeSpentField = document.getElementById('timeSpent');
        submit = document.createElement('button');
        submit.setAttribute('type', 'submit');
        submit.innerText = 'Submit';
        div.appendChild(submit);
        submit.addEventListener('click', onSubmit);
    }

    function SubmitForm(elemId)
    {
        event = document.createEvent('Event');
        div = document.getElementById(elemId);
        div.classList.add('submitform');

        build();
    }

    function addEvent(event, cb) {
        div.addEventListener(event, cb);
    }
    function removeEvent(event, cb) {
        div.addEventListener(event, cb);
    }

    SubmitForm.SUBMIT = 'SUBMIT';

    SubmitForm.prototype.addEvent = addEvent;
    SubmitForm.prototype.removeEvent = removeEvent;

    window.SubmitForm = SubmitForm;
})(window);
