declare module 'nthInvocation' {
    /**
     * @param args An array of argument arrays.
     * @returns The resulting transformed argument list.
     */
    type ArgsTransformerFunction = (args: [any[]]) => any[];

    interface Options {
        /**
         * A function that transforms the aggregated arguments from each of the wrapper function calls
         * for use in the target function call. When calling the target function, the wrapper will spread the result of the argsTransformer.
         * By default, the argsTransformer performs a simple flatMap for each argument array and spreads that result into an outer array.
         * Upon spreading the arguments into the target function, each argument that was used to call the wrapper function
         * will be spread into the target function.
         */
        argsTransformer?: ArgsTransformerFunction;

        /**
         * If true, the wrapper function will be returned on each intermediate invocation of the wrapper.
         */
        returnWrapper?: Boolean;
    };

    /**
     * Invokes the target function every n times the wrapper function is called.
     * @param target The target function.
     * @param n The count.
     * @param options Some optional options.
     */
    export default function (target: Function, n: Number, options?: Options): Function
}