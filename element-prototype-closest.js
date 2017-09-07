/**
 * matches the closest parent of a given selector
 * works just like jQuery.closest() but without
 * the jQuery dependency
 */
Element.prototype.closest = function(selector) {
    //var parent = foo.closest('.selector');

    var el = this,
        matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

    while (el) {
        if (matchesSelector.bind(el)(selector)) {
            return el;
        } else {
            el = el.parentElement;
        }
    }
    return false;
};