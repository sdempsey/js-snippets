/**
 * logs elements that are wider than the viewport
 * useful for finding those elements that are
 * causing unintended horizontal scroll
 */
var docWidth = document.documentElement.offsetWidth,
    elements = document.querySelectorAll('*');

[].forEach.call( elements, function(el) {
    if (el.offsetWidth > docWidth) {
        console.log(el);
    }
});