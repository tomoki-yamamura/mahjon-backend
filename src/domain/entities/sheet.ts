import { Row } from './row'

export class Sheet {
  constructor(
    public readonly id: string,
    public readonly rows: Row[],
  ) {}
}
