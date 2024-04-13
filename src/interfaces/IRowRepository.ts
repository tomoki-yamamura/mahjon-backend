import { Row } from "../entities/row";

export interface IRowRepository {
  queryRowByDateRange(input: any): Promise<Row[]>;
}