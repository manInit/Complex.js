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
    return new Complex((cn1.re * cn2.re + cn1.im * cn2.im)/(cn2.re ** 2 + cn2.im ** 2), (cn2.re * cn1.im + cn1.re * cn2.im)/(cn2.re ** 2 + cn2.im ** 2));
  }
  static pow(cn, pow) {
    if (cn.im === 0 && cn.re < 0) {
      cn.im = (-cn.re) ** pow;
      cn.re = 0;  
    } else {
      cn.re = cn.mod ** pow * Math.cos(pow * cn.arg);
      cn.im = cn.mod ** pow * Math.sin(pow * cn.arg);
    }
  }

}

module.exports = Complex;