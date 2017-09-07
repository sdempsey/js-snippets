/*
*   Has Class - IE8+
*   if (element.hasClass('selector')) { do stuff; }
*/
Element.prototype.hasClass = function(selector) {
    if (this.classList) {
        return this.classList.contains(selector);

    } else {
        return new RegExp('(^| )' + selector + '( |$)', 'gi').test(this.className);
    }
}