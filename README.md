# Complex.js

This add class for base support complex number in js


# Features
- arithmetic operations (add, sub, mul, div)
- square root, exponent, sin, cos, log, log10

## Install
```
npm i class_complex_number 
```
and import class Complex from this package
```javascript
let Complex = require('class_complex_number');
```
## Example

- Add and print complex number
	```javascript
	// Complex(real, imaginary)
	let cn1 = new Complex(1, 2);
	let cn2 = new Complex(Math.PI, 5);

	let res = Complex.add(cn1, cn2);
	console.log(res.toString()); // 4.14 + 7.00i
	```
- exmaple for sin 
	```javascript
	let cn = new Complex(0, Math.PI / 2);
	
	let res = Complex.exp(cn);
	console.log(res.toTrigonom()); // 1.00(cos(1.57) + isin(1.57))
	console.log(res.toExponen()); // 1.00exp(1.57i)
	```
### Methods list
All methods return object complex class. All arguments should be instance Complex class
```javascript
  static add(cn1, cn2) // +
  static sub(cn1, cn2) // -
  static mul(cn1, cn2) // *
  static div(cn1, cn2) // /
  static sqrt(cn) // square root
  static exp(cn) // complex exponent
  static sin(cn) // complex sin
  static cos(cn) // complex cos
  static log(cn, [base]) // complex log with real base. If not base return natural log 
  static log10(cn) // log with base 10
```
Methods object for convert complex number to string. All number round to tenths (r - modulus, arg - argument)
```javascript
cn.toString() // {re}+{im}i
cn.toExponen() // {r}(cos({re}) + isin({im}))
cn.toTrigonom() // {r}exp({arg}i)
```
Getters
```javascript
cn.mod() // return modulus
cn.arg() // return argument