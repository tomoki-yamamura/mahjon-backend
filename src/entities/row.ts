import { Users } from "./users";

export class Row {
  public readonly ID: string;
  public readonly Date: string;
  public readonly Timestamp: string;
  public readonly Users: Partial<Record<Users, string>>

  constructor(obj: Partial<Record<string, any>>) {
    this.ID = obj.ID;
    this.Date = obj.Date;
    this.Timestamp = obj.Timestamp;
    this.Users = {} as Partial<Record<Users, string>>;
    for (const key in obj) {
      if (key !== 'ID' && key !== 'Date' && key !== 'Timestamp') {
        this.Users[key as Users] = obj[key] as string;
      }
    }
  }
}
