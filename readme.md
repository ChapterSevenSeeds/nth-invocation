# nthInvocation
## By Tyson Jones
Calls a target function every n times the wrapper function is called.
```js
const nthInvocation = require('nthInvocation');
const wrapper = nthInvocation(console.log, 3);
wrapper(1); // Prints nothing.
wrapper(2); // Prints nothing.
wrapper(3); // Prints 1 2 3.
```

Each argument passed to the wrapper function is gathered in an array of arrays. For example, when invoking the wrapper for the third time in the code snippet above, the argument array looks like so: `[[1], [2], [3]]`. When invoking the target function, the wrapper will pass the argument array to a transformer function and then spread that result into the arguments of the target function. 