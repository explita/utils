import { formatDate } from "../src/date/format-date";
import { formatTime } from "../src/date/format-time";
import { dayOfYear } from "../src/date/day-of-year";
import { daysBetween } from "../src/date/days-between";
import { isToday } from "../src/date/is-today";
import { isPast } from "../src/date/is-past";
import { isFuture } from "../src/date/is-future";
import { daysSince } from "../src/date/days-since";
import { daysUntil } from "../src/date/days-until";
import { daysInMonth } from "../src/date/days-in-month";
import { startOfMonth } from "../src/date/start-of-month";
import { endOfMonth } from "../src/date/end-of-month";
import { getYear } from "../src/date/get-year";
import { getMonth } from "../src/date/get-month";
import { getDay } from "../src/date/get-day";
import { extractDate } from "../src/date/extract-date";

// describe("formatDate", () => {
//   const testDate = new Date("2024-01-25T14:30:05");

//   test("should format with default pattern (DD/MM/YYYY)", () => {
//     expect(formatDate(testDate)).toBe("25/01/2024");
//   });

//   test("should support custom token patterns", () => {
//     expect(formatDate(testDate, "YYYY-MM-DD")).toBe("2024-01-25");
//     expect(formatDate(testDate, "MMMM D, YYYY")).toBe("January 25, 2024");
//     expect(formatDate(testDate, "ddd, MMM DD")).toBe("Thu, Jan 25");
//     expect(formatDate(testDate, "YY-M-D")).toBe("24-1-25");
//   });

//   test("should support escaped literals using []", () => {
//     expect(formatDate(testDate, "[Year:] YYYY")).toBe("Year: 2024");
//     expect(formatDate(testDate, "DD [of] MMMM")).toBe("25 of January");
//   });

//   test("should support time tokens in formatDate", () => {
//     expect(formatDate(testDate, "YYYY-MM-DD HH:mm:ss")).toBe(
//       "2024-01-25 14:30:05",
//     );
//     expect(formatDate(testDate, "h:m A")).toBe("2:30 PM");
//   });

//   test("should handle numeric (timestamp) input", () => {
//     const timestamp = testDate.getTime();
//     expect(formatDate(timestamp, "YYYY")).toBe("2024");
//   });

//   test("should handle string input", () => {
//     expect(formatDate("2024-12-31", "MMMM DD")).toBe("December 31");
//   });

//   test("should handle null by using current date", () => {
//     const now = new Date();
//     const formatted = formatDate(null, "YYYY");
//     expect(formatted).toBe(String(now.getFullYear()));
//   });

//   test("should maintain backward compatibility with Month pseudo-token", () => {
//     expect(
//       formatDate(testDate, { format: "Month DD", monthFormat: "long" }),
//     ).toBe("January 25");
//     expect(
//       formatDate(testDate, { format: "Month DD", monthFormat: "short" }),
//     ).toBe("Jan 25");
//   });

//   test("should throw error for invalid dates", () => {
//     expect(() => formatDate("invalid-date")).toThrow();
//   });
// });

// describe("formatTime", () => {
//   const testDate = new Date("2024-01-25T14:30:05.123");

//   test("should format with default pattern (hh:mmA)", () => {
//     expect(formatTime(testDate)).toBe("02:30PM");
//   });

//   test("should support 24-hour tokens (HH, H)", () => {
//     expect(formatTime(testDate, "HH:mm")).toBe("14:30");
//     expect(formatTime(new Date("2024-01-25T03:05:00"), "H:m")).toBe("3:5");
//   });

//   test("should support 12-hour tokens (hh, h, A, a)", () => {
//     expect(formatTime(testDate, "h:mm a")).toBe("2:30 pm");
//     expect(formatTime(new Date("2024-01-25T00:15:00"), "hh:mm A")).toBe(
//       "12:15 AM",
//     );
//   });

//   test("should support millisecond token (SSS)", () => {
//     expect(formatTime(testDate, "HH:mm:ss.SSS")).toBe("14:30:05.123");
//   });

//   test("should support escaped literals using []", () => {
//     expect(formatTime(testDate, "[Time is] HH:mm")).toBe("Time is 14:30");
//   });

//   test("should handle string and number inputs", () => {
//     expect(formatTime("2024-01-25T20:00:00", "HH:mm")).toBe("20:00");
//     expect(formatTime(testDate.getTime(), "ss")).toBe("05");
//   });

//   test("should throw error for invalid dates", () => {
//     expect(() => formatTime("not a date")).toThrow();
//   });
// });

// describe("dayOfYear", () => {
//   test("should return 1 for January 1st", () => {
//     expect(dayOfYear("2024-01-01")).toBe(1);
//   });

//   test("should handle leap years correctly", () => {
//     expect(dayOfYear("2024-12-31")).toBe(366);
//     expect(dayOfYear("2023-12-31")).toBe(365);
//   });
// });

// describe("daysBetween", () => {
//   test("should return absolute difference in days", () => {
//     expect(daysBetween("2024-01-01", "2024-01-11")).toBe(10);
//     expect(daysBetween("2024-01-11", "2024-01-01")).toBe(10);
//   });

//   test("should return 0 for same day", () => {
//     expect(daysBetween("2024-01-01", "2024-01-01")).toBe(0);
//   });
// });

// describe("isToday", () => {
//   test("should return true for current date", () => {
//     expect(isToday(new Date())).toBe(true);
//   });

//   test("should return false for other dates", () => {
//     expect(isToday("1990-01-01")).toBe(false);
//   });
// });

// describe("isPast", () => {
//   test("should return true for past dates", () => {
//     expect(isPast("2000-01-01")).toBe(true);
//   });

//   test("should verify includeTime option", () => {
//     const today = new Date();
//     const pastEarlierToday = new Date(today.getTime() - 1000); // 1 second ago
//     expect(isPast(pastEarlierToday, { includeTime: true })).toBe(true);
//     expect(isPast(pastEarlierToday, { includeTime: false })).toBe(false);
//   });
// });

// describe("isFuture", () => {
//   test("should return true for future dates", () => {
//     expect(isFuture("2099-01-01")).toBe(true);
//   });

//   test("should verify includeTime option", () => {
//     const today = new Date();
//     const futureLaterToday = new Date(today.getTime() + 1000); // 1 second from now
//     expect(isFuture(futureLaterToday, { includeTime: true })).toBe(true);
//     expect(isFuture(futureLaterToday, { includeTime: false })).toBe(false);
//   });
// });

// describe("daysSince", () => {
//   test("should return positive number for past dates", () => {
//     const yesterday = new Date();
//     yesterday.setDate(yesterday.getDate() - 1);
//     expect(daysSince(yesterday)).toBe(1);
//   });

//   test("should return 0 for future dates", () => {
//     expect(daysSince("2099-01-01")).toBe(0);
//   });
// });

describe("daysUntil", () => {
  test("should return positive number for future dates", () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    expect(daysUntil(tomorrow)).toBe(1);
  });

  test("should return 0 for past dates", () => {
    expect(daysUntil("2000-01-01")).toBe(0);
  });
});

// describe("daysInMonth", () => {
//   test("should return correct number of days for various months", () => {
//     expect(daysInMonth("2024-02-01")).toBe(29); // Leap
//     expect(daysInMonth("2023-02-01")).toBe(28); // Not leap
//     expect(daysInMonth("2024-01-01")).toBe(31);
//     expect(daysInMonth("2024-04-01")).toBe(30);
//   });
// });

// describe("startOfMonth", () => {
//   test("should return first day of month at 00:00:00", () => {
//     const result = startOfMonth("2024-01-25");
//     expect(result.getFullYear()).toBe(2024);
//     expect(result.getMonth()).toBe(0);
//     expect(result.getDate()).toBe(1);
//     expect(result.getHours()).toBe(0);
//     expect(result.getMinutes()).toBe(0);
//   });
// });

// describe("endOfMonth", () => {
//   test("should return last moment of the month", () => {
//     const result = endOfMonth("2024-01-25");
//     expect(result.getFullYear()).toBe(2024);
//     expect(result.getMonth()).toBe(0);
//     expect(result.getDate()).toBe(31);
//     expect(result.getHours()).toBe(23);
//     expect(result.getMinutes()).toBe(59);
//     expect(result.getSeconds()).toBe(59);
//     expect(result.getMilliseconds()).toBe(999);
//   });
// });

// describe("getYear/Month/Day", () => {
//   const testDate = "2024-01-25";

//   test("getYear should return 2024", () => {
//     expect(getYear(testDate)).toBe(2024);
//   });

//   test("getMonth should return 1", () => {
//     expect(getMonth(testDate)).toBe(1);
//   });

//   test("getDay should return 25", () => {
//     expect(getDay(testDate)).toBe(25);
//   });
// });

// describe("extractDate", () => {
//   test("should return YYYY-MM-DD string", () => {
//     expect(extractDate(new Date("2024-01-25T14:30:00"))).toBe("2024-01-25");
//   });
// });
