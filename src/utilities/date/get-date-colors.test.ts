import dayjs from "dayjs";
import { getDateColor } from "./get-date-colors";
import { expect } from '@jest/globals';
import { describe, it } from "node:test";

describe("getDateColors function", () => {
  it("should return 'error' if the date is before today", () => {
    const yesterday = dayjs().subtract(1, "day").format("YYYY-MM-DD");
    expect(getDateColor({ date: yesterday })).toEqual("error");
  });

  it("should return 'warning' for multiple days", () => {
    const days = [1, 2, 3];
    for (const day of days) {
      const date = dayjs().add(day, "day").format("YYYY-MM-DD");
      expect(getDateColor({ date: date })).toEqual("warning");
    }
  });
  
  it("should return 'default' if the date is more than 3 days from today", () => {
    const date = dayjs().add(4, "day").format("YYYY-MM-DD");
    expect(getDateColor({ date: date })).toEqual("default");
  });
  it("should return 'warning' for multiple days", () => {

    const days = [1, 2, 3];

    for (const day of days) {

      const date = dayjs().add(day, "day").format("YYYY-MM-DD");

      expect(getDateColor({ date: date })).toEqual("warning");

    }

  });

});

  