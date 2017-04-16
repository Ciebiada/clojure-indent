# clojure-indent

Minimal Atom package for indenting Clojure code

![](https://media.giphy.com/media/3oKIPAChvvX4BP53kQ/giphy.gif)

## Current rules
*  When inside a form: ident with `2` spaces from the opening `(`
*  When inside a vector or a map: align with the opening `[` or `{`

### Why
Atom by default does quite bad job at indenting Lisp.
It seems that in the current state it is impossible to indent correctly just from the grammar package.
So I wrote this package.

### Development
This package is far from being complete.
However, as my journey with Clojure continues I will keep working on it.
