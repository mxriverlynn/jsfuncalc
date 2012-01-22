# JS Funcalc

A simple exercise to see what functional JavaScript
would look like, in the form of some simple calculations.

## Example

```js

var one = value(1);
var two = value(2);
var three = value(3);
var four = value(4);

// (1 + 2) * 3 - 4 == 5
var resultFunc = subtract(multiply(add(one, two), three), four);

// but it's still a function right now, so evaluate it
var result = resultFunc();
consol.log(result); // => 5
```

## Specs and Code

See the specs in the `/specs/javascript/` folder for more detail,
and the simple function declarations in the `public/javascripts/funcalc.js`
file.
