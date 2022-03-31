import { trimmed } from "./string";

describe("trimmed", () => {
  test("function name is trimmed", () => {
    expect(trimmed.name).toBe("trimmed");
  });

  test("should return trimmed text", () => {
    const text = " okay  ";
    const expected = "okay";

    expect(trimmed(text)).toBe(expected);
  });
});
