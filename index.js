const defaultOptions = {
    argsTransformer: (args) => [...args.flatMap(x => x)],
    returnWrapper: true
};

module.exports = function (target, n, options = {}) {
    const newOptions = { ...defaultOptions };
    Object.assign(newOptions, options);
    let currentN = 0;
    const argsAggs = [];
    const wrapper = function (...args) {
        argsAggs.push(args);
        if (++currentN >= n) {
            currentN = 0;
            return target(...newOptions.argsTransformer(argsAggs.splice(0)));
        } else if (newOptions.returnWrapper) {
            return wrapper;
        }
    }

    return wrapper;
}