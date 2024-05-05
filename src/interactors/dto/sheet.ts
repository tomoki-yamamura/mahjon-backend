export class Sheet {
  constructor(
    public readonly id: string,
    public readonly rows: Partial<Record<string, any>>
  ) {}
}

