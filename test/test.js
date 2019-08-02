let assert = require('chai').assert;
let Complex = require('../complex');

describe("add", function() {
  it("Complex.add([1,1], [2,2]) -> [3,3]", function() {
    let n1 = new Complex(1, 1);
    let n2 = new Complex(2, 2);
    testNumber = Complex.add(n1, n2);
    refNumber = new Complex(3, 3);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
  it("Complex.add([1,0], [2,0]) -> [3,0]", function() {
    let n1 = new Complex(1, 0);
    let n2 = new Complex(2, 0);
    testNumber = Complex.add(n1, n2);
    refNumber = new Complex(3, 0);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
  it("Complex.add([-1,-1], [1,1]) -> [0,0]", function() {
    let n1 = new Complex(-1,-1);
    let n2 = new Complex(1,1);
    testNumber = Complex.add(n1, n2);
    refNumber = new Complex(0, 0);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
});

describe("sub", function() {
  it("Complex.sub([1,1], [2,2]) -> [-1,-1]", function() {
    let n1 = new Complex(1, 1);
    let n2 = new Complex(2, 2);
    testNumber = Complex.sub(n1, n2);
    refNumber = new Complex(-1, -1);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
  it("Complex.add([2,0], [1,0]) -> [1,0]", function() {
    let n1 = new Complex(2, 0);
    let n2 = new Complex(1, 0);
    testNumber = Complex.sub(n1, n2);
    refNumber = new Complex(1, 0);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
  it("Complex.add([-1,-1], [1,1]) -> [-2,-2]", function() {
    let n1 = new Complex(-1,-1);
    let n2 = new Complex(1,1);
    testNumber = Complex.sub(n1, n2);
    refNumber = new Complex(-2, -2);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
});

describe("mul", function() {
  it("Complex.mul([0,1], [0,1]) -> [0,-1]", function() {
    let n1 = new Complex(0, 1);
    let n2 = new Complex(0, 1);
    testNumber = Complex.mul(n1, n2);
    refNumber = new Complex(-1, 0);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
  it("Complex.add([1,0], [2,0]) -> [3,0]", function() {
    let n1 = new Complex(1, 0);
    let n2 = new Complex(2, 0);
    testNumber = Complex.mul(n1, n2);
    refNumber = new Complex(3, 0);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
  it("Complex.add([-1,-1], [1,1]) -> [0,0]", function() {
    let n1 = new Complex(-1,-1);
    let n2 = new Complex(1,1);
    testNumber = Complex.mul(n1, n2);
    refNumber = new Complex(0, 0);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
});

