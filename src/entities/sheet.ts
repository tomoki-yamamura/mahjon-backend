import { Row } from "./row";

export class Sheet {
  constructor(
    public readonly id: string,
    // public readonly date: string,
    // public readonly timeStamp: string,
    // public readonly dynamicKeys: DynamicKeys
    public readonly rows: Row[]
  ) {}
}
