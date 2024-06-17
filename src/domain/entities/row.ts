export class Row {
  public readonly Id: string
  public readonly Date: string
  public readonly Timestamp: string
  public readonly Users: Partial<Record<string, string>>

  constructor(obj: Partial<Record<string, any>>) {
    this.Id = obj.Id
    this.Date = obj.Date
    this.Timestamp = obj.Timestamp
    const users = (({ ID, Date, Timestamp, ...rest }) => rest)(obj)
    this.Users = users
  }
}
