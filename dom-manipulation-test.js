var expect = require('chai').expect;
var domManipulationFunctions = require('./dom-manipulation.js');
var cheerio = require('cheerio');

describe('stringAdder()', function() {
    it('should add a paragraph element with the string "Hello, world!" to the mydiv div element ', function() {
      // EVERYTHING BELOW IS SETUP FOR THE TEST
      //These variables contain the data that is going to be passed in to the stringAdder function
      var $ = cheerio.load('<html><body><div id="mydiv"></div></body></html>');
      var data = '<p>Hello, world!</p>';
      var selector = '#mydiv';
      
      //The stringAdder DOM manipulation function is executed, and we are binding all of our HTML data to a variable called div
      var div = stringAdder($, selector, data);
      // EVERYTHING ABOVE IS SETUP FOR THE TEST
      
      //This line tests whether the DOM manipulation was successful or not
      expect(div.find('p').text()).to.equal("Hello, world!");
    });
});