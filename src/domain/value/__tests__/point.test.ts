import Point from "../point";

describe('Point', () => {
  test('constructor should set the correct point value', () => {
    const point = new Point(100);
    expect(point.getPoint()).toBe(100);
  });
});
