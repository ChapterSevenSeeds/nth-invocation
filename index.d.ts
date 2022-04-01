declare module 'nthInvocation' {
    /**
     * Invokes the target function every n times the wrapper function is called.
     * @param target The target function.
     * @param n The count.
     * @param argsTransformer A function that transforms the aggregated 
     */
    export default function(target: Function, n: Number, argsTransformer: Function): Function
}