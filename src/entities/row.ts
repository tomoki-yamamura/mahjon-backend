import { Users } from "./users";

export class Row {
  constructor(
    public readonly id: string,
    public readonly date: string,
    public readonly timeStamp: string,
    public readonly dynamicKeys: DynamicKeys
  ) {}
}

type DynamicKeys = {
  [key in Users]: string;
};
