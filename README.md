# karatsuba-multiplication

An implementation of Karatsuba's fast multiplication algorithm.

It doesn't rely on JavaScript's `BigInt` numeric values, and therefore can be used in applications that support Internet Explorer and older versions of other various browsers.

### How to use

```javascript
import karatsuba from './path/to/karatsuba-multiplication'

const product = karatsuba(
    '3141592653589793238462643383279502884197169399375105820974944592932384626433832795028',
    '2718281828459045235360287471352662497757247093699959574966967627747135266249775724709'
)

console.log(product)
// 8539734222673567065463550869546574495034888535765114961879601131949421895751017307915218201902672766194368459067342470913720445616413074910762224771809082062649751946852
```


Inspired by [Stanford algorithms course](https://www.coursera.org/specializations/algorithms).