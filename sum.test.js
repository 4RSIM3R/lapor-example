const sum = (a, b) => {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
    } 
    throw new TypeError('Parameter is not a number!');
};

test('expect 1 + 1 = 2', () => {
    expect(sum(1, 1)).toBe(2)
})

test('expect 1 + 1 != 3', () => {
    expect(sum(1, 1)).not.toBe(3)
});

test('expect 1 + a is throw error', () => {
    expect(() => sum(1, 'a')).toThrow('Parameter is not a number!');
});