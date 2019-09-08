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
    refNumber = new Complex(-4 / 13, 19 / 13);

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
    refNumber = new Complex(1 / 5, 7 / 10);

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

describe("exp", function() {
  it("Complex.exp([2,Pi/3]) -> [e^2(cos(PI/3)),e^2(sin(PI/3))]", function() {
    let n = new Complex(2, Math.PI / 3);
    testNumber = Complex.exp(n);
    refNumber = new Complex(Math.exp(2) * Math.cos(Math.PI / 3), Math.exp(2) * Math.sin(Math.PI / 3));

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
  it("Complex.exp([0,PI/2]) -> [0,1]", function() {
    let n = new Complex(0, Math.PI / 2);
    testNumber = Complex.exp(n);
    refNumber = new Complex(6.123233995736766e-17, 1);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
  it("Complex.exp([0,0]) -> [1,0]", function() {
    let n = new Complex(0,0);
    testNumber = Complex.exp(n);
    refNumber = new Complex(1, 0);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
});

describe("sin", function() {
  it("Complex.sin([4,5]) -> [,]", function() {
    let n = new Complex(4,5);
    testNumber = Complex.sin(n);
    refNumber = new Complex(Math.sin(4) * Math.cosh(5), Math.cos(4) * Math.sinh(5));

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
  it("Complex.sin([PI/2,0]) -> [1,0]", function() {
    let n = new Complex(Math.PI / 2, 0);
    testNumber = Complex.sin(n);
    refNumber = new Complex(1,0);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
  it("Complex.sin([PI/2,1]) -> [cosh(2),0]", function() {
    let n = new Complex(Math.PI / 2, 1);
    testNumber = Complex.sin(n);
    refNumber = new Complex(Math.cosh(1), 7.196031900750151e-17);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
});

describe("cos", function() {
  it("Complex.cos([4,5]) -> [,]", function() {
    let n = new Complex(4,5);
    testNumber = Complex.cos(n);
    refNumber = new Complex(Math.cos(4) * Math.cosh(5), -Math.sin(4) * Math.sinh(5));

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
  it("Complex.cos([0,0]) -> [1,0]", function() {
    let n = new Complex(0, 0);
    testNumber = Complex.cos(n);
    refNumber = new Complex(1,0);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
  it("Complex.cos([PI/2,1]) -> [0,-sinh(1)]", function() {
    let n = new Complex(Math.PI / 2, 1);
    testNumber = Complex.cos(n);
    refNumber = new Complex(9.44864380126377e-17, -Math.sinh(1));

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
});

describe("ln", function() {
  it("Complex.ln([-1,0]) -> [0,PI]", function() {
    let n = new Complex(-1, 0);
    testNumber = Complex.log(n);
    refNumber = new Complex(0, Math.PI);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
  it("Complex.ln([e^2,0]) -> [2,0]", function() {
    let n = new Complex(Math.E ** 2, 0);
    testNumber = Complex.log(n);
    refNumber = new Complex(2,0);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
  it("Complex.cos([0,1]) -> [0,PI/2]", function() {
    let n = new Complex(0, 1);
    testNumber = Complex.log(n);
    refNumber = new Complex(0, Math.PI / 2);

    assert.equal(testNumber.re, refNumber.re);
    assert.equal(testNumber.im, refNumber.im);
    assert.equal(testNumber.arg, refNumber.arg);
  });
});