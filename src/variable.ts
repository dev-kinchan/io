type DataTypes =
  | "undefiled"
  | "null"
  | "boolean"
  | "array"
  | "object"
  | "number"
  | "string"
  | "function"
  | "generatorfunction"
  | "asyncfunction"
  | "promise"
  | "symbol"
  | "map"
  | "set";

export const type = (data: any): DataTypes => {
  const result = Object.prototype.toString
    .call(data)
    .slice(8, -1)
    .toLowerCase() as DataTypes;

  // return all functions as function by default
  switch (result) {
    case "generatorfunction":
    case "asyncfunction":
    case "promise":
      return "function";
  }

  return result;
};

export const empty = (data: object | any[] | string) => {
  if (type(data) === "object") {
    return Object.keys(data).length === 0 ? true : false;
  }
  if (type(data) === "array") {
    return (data as any[]).length === 0 ? true : false;
  }
  if (type(data) === "string") {
    return (data as string).length === 0 ? true : false;
  }
  return false;
};
