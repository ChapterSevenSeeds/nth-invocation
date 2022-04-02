const nthInvocation = require('./index');
test("Tests", () => {
    const func = nthInvocation((arg1, arg2, arg3) => [arg1, arg2, arg3], 3);
    expect(func(1)(2)(3)).toStrictEqual([1, 2, 3]);

    func(3);
    func(4);
    expect(func(5)).toStrictEqual([3, 4, 5]);

    const func2 = nthInvocation((arg1, arg2, arg3) => [arg1, arg2, arg3], 3, {
        returnWrapper: false
    });
    expect(() => func2(1)(2)(3)).toThrow();
});