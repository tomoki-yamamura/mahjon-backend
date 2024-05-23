class SheetDate {
  private date: string

  constructor(date: string | Date) {
    if (typeof date === "string") {
      // "YYYY-MM-DD" 形式の検証
      const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(date);
      if (!isValidDate) {
        throw new Error("Invalid date format. Expected YYYY-MM-DD.");
      }
      this.date = date;
    } else if (date instanceof Date) {
      // Date型を "YYYY-MM-DD" 形式に変換
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      this.date = `${year}-${month}-${day}`;
    } else {
      throw new Error("Invalid input type. Expected string or Date.");
    }
  }

  getDate(): string {
    return this.date
  }

}

export default SheetDate