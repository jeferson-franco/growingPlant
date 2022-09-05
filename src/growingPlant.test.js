const solution = require('./growingPlant.js');

test('test 1', () => {
    expect(solution(100, 10, 910)).toBe(10);
});

test('test 2', () => {
    expect(solution(10, 9, 4)).toBe(1);
});

test('test 3', () => {
    expect(solution(5, 2, 7)).toBe(2);
});

test('test 4', () => {
    expect(solution(7, 3, 443)).toBe(110);
});

test('test 5', () => {
    expect(solution(6, 5, 10)).toBe(5);
});
