// dom-manipulation.js
stringAdder = function($, selector, str) {
  return $(selector).append(str);
}

module.exports = stringAdder;