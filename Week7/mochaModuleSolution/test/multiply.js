/* test/multiply.js */

var multiply = require('../multiply.js');
var expect = require('chai').expect;

describe('#multiply()', function() {

  context('without arguments', function() {
    it('should return 1', function() {
      expect(multiply()).to.equal(1)
    })
  })
  
  context('with number arguments', function() {
    it('should return product of arguments', function() {
      expect(multiply(1, 2, 3, 4, 5)).to.equal(120)
    })
  })
  
  context('with non-number arguments', function() {
    it('should throw error', function() {
      expect(function() {
        multiply(1, 2, '3', [4], 5)
      }).to.throw(TypeError, 'multiply() expects only numbers.')
    })
  })
  
})