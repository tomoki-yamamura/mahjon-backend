import Point from "../point";

describe('Point', () => {
  test('constructor should set the correct point value', () => {
    const point = new Point(100);
    expect(point.getPoint()).toBe(100);
  });
  test('add should set the correct point value', () => {
    const point = new Point(100);
    const point2 = new Point(100)
    const added = point.add(point2)
    expect(added.getPoint()).toBe(200);
  });
});
