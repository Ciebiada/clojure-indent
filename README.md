# clojure-indent

Minimal Atom package for indenting Clojure code.

![](https://media.giphy.com/media/3oKIPAChvvX4BP53kQ/giphy.gif)

I recommend using it alongside [Parinfer](https://atom.io/packages/parinfer)

## Auto-indenting selected lines

Select a section of code and hit `cmd-i` to reindent the entire block appropriately. This can be helpful for fixing large sections of code that were poorly formatted.

## Current rules
*  Indent body of some special forms with 2 spaces (`def`, `if`, `for`...)
*  Align arguments of function / macro call
*  Align map and vector elements
