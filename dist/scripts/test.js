(function (window, document, ironDOM, undefined) {
  'use strict';

  var listItem = document.querySelector('li'),
      listItems = document.querySelectorAll('li'),
      mytoggleIDelem = document.querySelector('#toggleClass'),
      mytoggleClassElem = document.querySelectorAll('.toggleClass'),
      myButton = document.querySelector('#button'),
      myButton2 = document.querySelector('#button2'),
      myButton3 = document.querySelector('#button3');

  myButton.addEventListener("click", function() {
    ironDOM.toggleClass(mytoggleIDelem, ['green']);
    ironDOM.toggleClass(mytoggleIDelem, ['red']);
  });
  myButton2.addEventListener("click", function() {
    ironDOM.multiElements(mytoggleClassElem, function () {
      ironDOM.toggleClass(this, ['green']);
      ironDOM.toggleClass(this, ['red']);
    });
  });
  myButton3.addEventListener("click", function() {
    ironDOM.multiElements(listItems, function () {
      ironDOM.toggleClass(this, ['ironDOM']);
    });
  });

  ironDOM.multiElements(listItems, function () {
    console.log('this: ', this);
    ironDOM.addClass(this, ['ironDOM']);

    if(ironDOM.hasClass(this, ['addClass'])) {
      console.log('found addClass');
      ironDOM.removeClass(this, ['red']);
      ironDOM.addClass(this, ['green']);

    } else if (ironDOM.hasClass(this, ['removeClass'])) {
      console.log('found removeClass');
      ironDOM.removeClass(this, ['red']);
      ironDOM.addClass(this, ['green']);

    } else if (ironDOM.hasClass(this, ['hasClass'])) {
      console.log('found hasClass');
      ironDOM.removeClass(this, ['red']);
      ironDOM.addClass(this, ['green']);

    } else if (ironDOM.hasClass(this, ['toggleClass'])) {
      console.log('found toggleClass');
      ironDOM.removeClass(this, ['red']);
      ironDOM.addClass(this, ['green']);
    }

  });

})(window, document, ironDOM);


