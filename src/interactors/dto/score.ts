export default class ScoreDTO {
  readonly date: Date;
  readonly point: number;
  readonly mode: string;
  constructor(date: Date, point: number, mode: string) {
    this.date = date
    this.point = point
    this.mode = mode
  }
}
