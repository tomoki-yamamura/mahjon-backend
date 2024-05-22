class Point {
  private point: number
  constructor(point: number) {
    this.point = point
  }

  getPoint(): number {
    return this.point
  }

  isEqualTo(other: Point): boolean {
    return this.point === other.getPoint();
  };

  add(other: Point): Point {
    return new Point(this.point + other.getPoint());
  }
}

export default Point
