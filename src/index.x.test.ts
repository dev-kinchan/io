import io from ".";

describe("io", () => {
  test("should load all available modules", () => {
    const expected = 5;
    expect(Object.keys(io).length).toBe(expected);
  });
});
