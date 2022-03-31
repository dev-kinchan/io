import { empty, type } from "./variable";

describe("type", () => {
  test("when undefined, return undefined", () => {
    const result = type(undefined);
    expect(result).toBe("undefined");
  });

  test("when null, return null", () => {
    const result = type(null);
    expect(result).toBe("null");
  });

  test("when type boolean, return boolean", () => {
    const result = type(true);
    expect(result).toBe("boolean");
  });

  test("when type array, return array", () => {
    const result = type([]);
    expect(result).toBe("array");
  });

  test("when type object, return object", () => {
    const result = type({});
    expect(result).toBe("object");
  });

  test("when type number, return number", () => {
    const result = type(1);
    expect(result).toBe("number");
  });

  test("when NaN, return number", () => {
    const result = type(NaN);
    expect(result).toBe("number");
  });

  test("when type string, return string", () => {
    const result = type("");
    expect(result).toBe("string");
  });

  test("when type function, return function", () => {
    const result = type(() => {});
    expect(result).toBe("function");
  });

  test("when async function, return function", () => {
    const result = type(async () => {});
    expect(result).toBe("function");
  });

  test("when promise function, return function", () => {
    const result = type(new Promise(() => {}));
    expect(result).toBe("function");
  });
});

describe("empty", () => {
  test("when object is empty, return true", () => {
    const object = {};
    const result = empty(object);

    expect(result).toBe(true);
  });

  test("when object is not empty, return false", () => {
    const object = { key: 1 };
    const result = empty(object);

    expect(result).toBe(false);
  });

  test("when array is empty, return true", () => {
    const array: any[] = [];
    const result = empty(array);

    expect(result).toBe(true);
  });

  test("when array is not empty, return false", () => {
    const array = [1, 2, 3];
    const result = empty(array);

    expect(result).toBe(false);
  });

  test("when string is empty, return true", () => {
    const string = "";
    const result = empty(string);

    expect(result).toBe(true);
  });

  test("when string is not empty, return false", () => {
    const string = "apple";
    const result = empty(string);

    expect(result).toBe(false);
  });
});
