module.exports = function(target, n, argsTransformer = (args) => [...args.flatMap(x => x)]) {
    let currentN = 0;
    const argsAggs = [];
    return function(...args) {
        argsAggs.push(args);
        if (++currentN >= n) {
            currentN = 0;
            return target(...argsTransformer(argsAggs.splice(0)));
        }
    }
}