import PlayedDate from "../date";
import PlayedDateRange from "../dateRange";
import { oneSecBeforeDate, fixDate, oneSecLaterDate } from "./fixture";

describe("PlayedDate", () => {
  let dateInstance: PlayedDateRange;
  beforeEach(() => {
    dateInstance = new PlayedDateRange(oneSecBeforeDate, fixDate);
  });

  test("getDate should return the correct date", () => {
    expect(dateInstance.getDate()).toEqual([oneSecBeforeDate, fixDate]);
  });

  test("isAfter should return expected value", () => {
    expect(dateInstance.isAfter(oneSecLaterDate)).toBe(true);
  });

  test("isBefore should return expected value", () => {
    expect(dateInstance.isBefore(oneSecBeforeDate)).toBe(true);
  });

  test("isWithinRange should return expected value", () => {
    expect(dateInstance.isWithinRange(oneSecBeforeDate)).toBe(true);
    expect(dateInstance.isWithinRange(oneSecLaterDate)).toBe(false);
  });
});
