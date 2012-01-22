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

## Thoughts

This is really just a thought experiment for me. I'm not very 
experienced with functional languages. I've played with Haskell
a bit, I've done some "functional C#" and "functional Ruby" but
it's something that I've never been really familar with. I wanted
to try this out to see what it would look like, and to see if I
could learn anything from the process and code.

There are some interesting points that stand out:

I've represented everything as a function - even the simple
values of 1 through 4. And every function returns a function,
except for the simple values, which return their actual value.

In the process of returning functions from functions, I'm 
effectively representing the state of the application as a series 
of functions. This one is a bit odd for me to wrap my head around.
I'm not sure if this is really correct, or if it's just an
oversimplification of what's really happening here. 

There are no data-structures, though, only functions. So it stands
to reason that the state is stored as a series of functions that
can be evaluated to produce a result.

The result isn't actually evaluated until I invoke the
`resultFunc` in the above example. But I have the `resultFunc`
availabe as a variable and I can pass it around anywhere I want.
The basically turns it into a command pattern implementation,
only in a functional manner instead of an object manner.

All of these functions are side effect free. None of them actually
mutates any existing application state. Of course this is some
really simple implementation, but that was one of my goals. I'll
need to play with some more complex ideas in order to really see
how this would play out, though.

I haven't done anything like memoizing or currying for these
simple examples, but those are ideas I want to play with, too.

This is really pretty simple stuff... but it's fun to write a
simple exercise like this and think about what's going on, why
and see how it affects the way I think and approach software
development.
