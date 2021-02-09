// Link.react.test.js
import { sum, subtract, multiply } from './test';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('subtract 15 - 23 to equal -8', () => {
    expect(subtract(15, 23)).toBe(-8);
});

test('multiply 20 * 9 to equal 180', () => {
    expect(multiply(20, 9)).toBe(180);
});
