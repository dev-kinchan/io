import { sinceEpoch } from "./time";

describe("sinceEpoch", () => {
  test("function name is sinceEpoch", () => {
    expect(sinceEpoch.name).toBe("sinceEpoch");
  });

  test("should return time in number since epoch", () => {
    const expected = new Date().getTime();
    const type = "number";

    expect(sinceEpoch()).toBeCloseTo(expected);
    expect(typeof sinceEpoch()).toBe(type);
  });
});
