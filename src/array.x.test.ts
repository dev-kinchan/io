import { complied, last, latest, maxIndex, outOfRange, within } from "./array";

describe("maxIndex", () => {
  test("when passed empty array, returns 0", () => {
    const array: any[] = [];
    const result = maxIndex(array);

    expect(result).toBe(0);
  });

  test("when passed non empty array, returns largest index", () => {
    const array = [1, 2, 3];
    const result = maxIndex(array);

    expect(result).toBe(array.length - 1);
  });
});

describe("within", () => {
  test("when index within range, returns true", () => {
    const data = [{ id: 1 }, { id: 2 }];
    const index = data.length - 1;
    const result = within(index, data);

    expect(result).toBe(true);
  });

  test("when index out of range, returns false", () => {
    const data = [{ id: 1 }, { id: 2 }];
    const index = data.length;
    const result = within(index, data);

    expect(result).toBe(false);
  });

  test("when index out of range enormously, returns false", () => {
    const data = [{ id: 1 }, { id: 2 }];
    const index = 10e6;
    const result = within(index, data);

    expect(result).toBe(false);
  });

  test("when index negative, returns false", () => {
    const data = [{ id: 1 }, { id: 2 }];
    const index = -1;
    const result = within(index, data);

    expect(result).toBe(false);
  });

  test("when index negative enormously, returns false", () => {
    const data = [{ id: 1 }, { id: 2 }];
    const index = -10e6;
    const result = within(index, data);

    expect(result).toBe(false);
  });

  test("with empty data, when index within range, returns true", () => {
    const data: any[] = [];
    const index = 0;
    const result = within(index, data);

    expect(result).toBe(true);
  });

  test("with empty data, when index out of range, returns false", () => {
    const data: any[] = [];
    const index = 1;
    const result = within(index, data);

    expect(result).toBe(false);
  });

  test("with empty data, when index out of range enormously, returns false", () => {
    const data: any[] = [];
    const index = 10e6;
    const result = within(index, data);

    expect(result).toBe(false);
  });

  test("with empty data, when index negative, returns false", () => {
    const data: any[] = [];
    const index = -1;
    const result = within(index, data);

    expect(result).toBe(false);
  });

  test("with empty data, when index negative enormously, returns false", () => {
    const data: any[] = [];
    const index = -10e6;
    const result = within(index, data);

    expect(result).toBe(false);
  });
});

describe("outOfRange", () => {
  test("has inverse relationship with within", () => {
    const data = [1, 2, 3];
    const index = data.length;

    const isWithin = within(index, data);
    const isOutOfRange = outOfRange(index, data);

    expect(isOutOfRange).toBe(!isWithin);
  });
});

describe("complied", () => {
  test("when index within range, returns index", () => {
    const data = [{ id: 1 }, { id: 2 }];
    const index = data.length - 1;
    const result = complied(data, index);

    expect(result).toBe(index);
  });

  test("when index out of range positively, returns max index", () => {
    const data = [{ id: 1 }, { id: 2 }];
    const index = data.length;
    const result = complied(data, index);

    expect(result).toBe(data.length - 1);
  });

  test("when index out of range negatively, returns 0", () => {
    const data = [{ id: 1 }, { id: 2 }];
    const index = -1;
    const result = complied(data, index);

    expect(result).toBe(0);
  });
});

describe("last", () => {
  test("when array is empty, return undefined", () => {
    const array: any[] = [];
    const result = last(array);

    expect(result).toBe(undefined);
  });

  test("when array is not empty, return last element", () => {
    const array = [1, 2, 3];
    const result = last(array);

    expect(result).toBe(array[array.length - 1]);
  });
});

describe("latest", () => {
  test("same output as last", () => {
    const array = [1, 2, 3];
    const lastItem = last(array);
    const latestItem = latest(array);

    expect(latestItem).toBe(lastItem);
  });
});
