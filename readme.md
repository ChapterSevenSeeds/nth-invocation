# nth-invocation
## By Tyson Jones
Calls a target function every n times the wrapper function is called.
```js
const nthInvocation = require('nth-invocation');
const wrapper = nthInvocation(console.log, 3);
wrapper(1); // Prints nothing.
wrapper(2); // Prints nothing.
wrapper(3); // Prints 1 2 3.
```

## API
```js
nthInvocation(/* Target function */, /* n */, /* optional options */);
```
The first two paramters are self explanatory. The third parameter has the following interface:
```ts
interface Options {
    argsTransformer?: (args: any[][]) => any[];
    returnWrapper?: Boolean;
}
```
### `argsTransformer`
This is a customizeable transformer function for the argument array. Each argument passed to the wrapper function is gathered in an array of arrays. For example, when invoking the wrapper for the third time in the code snippet above, the argument array looks like so: `[[1], [2], [3]]`. When invoking the target function, the wrapper will pass the argument array to this transformer function and then spread that result into the arguments of the target function. **By default, this function is defined as**
```js
const argsTransformer = (args) => [...args.flatMap(x => x)];
```
The target function is then called like so:
```js
return target(...argsTransformer(args));
```
Thus, the third invocation of the code snippet at the top ends up being `console.log(1, 2, 3)`. If you wanted to pass the arguments as a flat array, you'd write your transformer as
```js
const argsTransformer = (args) => [[...args.flatMap(x => x)]];
```
When calling the target function, it will look like `console.log([1, 2, 3])`. If you wanted to pass only the arguments from the first time the wrapper was called to the target function, you'd write your transformer as 
```js
const argsTransformer = (args) => args[0]; // Remember, args represents an array of arrays. 
```
This would end up looking like `console.log(1)`.


### `returnWrapper`
This allows you to specify if you want each intermediate call of the wrapper function to return itself for chained invocations. **By default, this value is** `true` which makes the following possible:
```js
wrapper(1)(2)(3); // Prints 1 2 3.
```
By setting this to false, the above code snippet would throw an exception since you're trying to call `undefined` as a function.