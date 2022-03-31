import { reveal } from "./object";

describe("reveal", () => {
  test("when passed with object, returns object", () => {
    const data = {};
    const result = reveal(data);

    expect(result).toBe(data);
  });

  test("when passed with undefined, returns empty object", () => {
    const data = undefined;
    const result = reveal(data);
    // is object
    expect(typeof result).toBe("object");
    // is empty
    expect(result).toEqual({});
  });

  test("when passed with null, returns empty object", () => {
    const data = null;
    const result = reveal(data);
    // is object
    expect(typeof result).toBe("object");
    // is empty
    expect(result).toEqual({});
  });
});
