/*
*   Remove Class - IE8+
*   element.removeClass('selector');
*/
Element.prototype.removeClass = function(selector) {
    if (this.classList) {
        this.classList.remove(selector);
    } else {
        this.className = this.className.replace(new RegExp('(^|\\b)' + selector.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
}