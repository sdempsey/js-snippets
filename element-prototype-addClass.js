/*
*   Add Class - IE8+
*   element.addClass('selector');
*/
Element.prototype.addClass = function(selector) {

    if (this.classList) {
        this.classList.add(selector);
    } else {
        this.className += ' ' + selector;
    }
}