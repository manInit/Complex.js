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
  it("Complex.mul([0,1], [0,1]) -> [-1,0]", function() {
    let n1 = new Complex(0, 1);
    let n2 = new Complex(0, 1);
    testNumber = Complex.mul(n1, n2);
    refNumber = new Complex(-1, 0);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
  it("Complex.mul([2,0], [32,0]) -> [64,0]", function() {
    let n1 = new Complex(2, 0);
    let n2 = new Complex(32, 0);
    testNumber = Complex.mul(n1, n2);
    refNumber = new Complex(64, 0);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
  it("Complex.mul([1,-1], [5,2]) -> [7,-3]", function() {
    let n1 = new Complex(1, -1);
    let n2 = new Complex(5, 2);
    testNumber = Complex.mul(n1, n2);
    refNumber = new Complex(7, -3);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
});

describe("div", function() {
  it("Complex.div([2,5], [3,-2]) -> [-4/13,19/13]", function() {
    let n1 = new Complex(2, 5);
    let n2 = new Complex(3, -2);
    testNumber = Complex.div(n1, n2);
    refNumber = new Complex(-4/13, 19/13);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
  it("Complex.div([64,0], [4,0]) -> [16,0]", function() {
    let n1 = new Complex(64, 0);
    let n2 = new Complex(4, 0);
    testNumber = Complex.div(n1, n2);
    refNumber = new Complex(16, 0);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
  it("Complex.div([2,7], [10,0]) -> [1/5,7/10]", function() {
    let n1 = new Complex(2,7);
    let n2 = new Complex(10,0);
    testNumber = Complex.div(n1, n2);
    refNumber = new Complex(1/5, 7/10);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
});

describe("sqrt", function() {
  it("Complex.sqrt([3,4]) -> [2,1]", function() {
    let n = new Complex(3, 4);
    testNumber = Complex.sqrt(n);
    refNumber = new Complex(2, 1);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
  it("Complex.sqrt([-4,0]) -> [0,2]", function() {
    let n = new Complex(-4, 0);
    testNumber = Complex.sqrt(n);
    refNumber = new Complex(0, 2);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
  it("Complex.sqrt([9,0]) -> [3,0]", function() {
    let n = new Complex(9,0);
    testNumber = Complex.sqrt(n);
    refNumber = new Complex(3, 0);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
});