class Complex {
  constructor(re, im) {
    this.re = re;
    this.im = im;
  }

  toString() {
    return `${this.re.toFixed(2)} + ${this.im.toFixed(2)}i`;
  }
  toTrigonom() {
    return `${this.mod.toFixed(2)}(cos(${this.arg.toFixed(2)}) + isin(${this.arg.toFixed(2)}))`;
  }
  toExponen() {
    return `${this.mod.toFixed(2)}exp(${this.arg.toFixed(2)}i)`;
  }

  static sgn(x) {
    return x >= 0 ? 1 : -1;
  }

  get mod() {
    return Math.sqrt(this.re ** 2 + this.im ** 2);
  }
  get arg() {
    return Math.atan2(this.im, this.re);
  }

  static add(cn1, cn2) {
    return new Complex(cn1.re + cn2.re, cn1.im + cn2.im);
  }
  static sub(cn1, cn2) {
    return new Complex(cn1.re - cn2.re, cn1.im - cn2.im);
  }
  static mul(cn1, cn2) {
    return new Complex(cn1.re * cn2.re - cn1.im * cn2.im, cn1.re * cn2.im + cn1.im * cn2.re);
  }
  static div(cn1, cn2) {
    return new Complex((cn1.re * cn2.re + cn1.im * cn2.im) / (cn2.re ** 2 + cn2.im ** 2), 
                       (cn2.re * cn1.im - cn1.re * cn2.im) / (cn2.re ** 2 + cn2.im ** 2));
  }
  static sqrt(cn) {
    return new Complex(Math.sqrt((cn.re + cn.mod) / 2), Complex.sgn(cn.im) * Math.sqrt((-cn.re + cn.mod) / 2));
  }
  static exp(cn) {
    return new Complex(Math.exp(cn.re) * Math.cos(cn.im), Math.exp(cn.re) * Math.sin(cn.im));
  }
  static sin(cn) {
    return new Complex(Math.sin(cn.re) * Math.cosh(cn.im), Math.cos(cn.re) * Math.sinh(cn.im));
  }
  static cos(cn) {
    return new Complex(Math.cos(cn.re) * Math.cosh(cn.im), Math.sin(-cn.re) * Math.sinh(cn.im));
  }
  static log(cn, base) {
    if (base === undefined) return new Complex(Math.log(cn.mod), cn.arg);
    else return new Complex(Math.log(cn.mod) / Math.log(base), cn.arg * Math.log(base));
  }
  static log10(cn) {
    return new Complex(Math.log(cn.mod) * Math.LOG10E, cn.arg * Math.LOG10E);
  }
}

if (module.exports) module.exports = Complex;
