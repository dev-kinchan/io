import { empty } from "./variable";

export const maxIndex = (array: any[]) => {
  if (empty(array)) {
    return 0;
  }
  return array.length - 1;
};

export const within = (index: number, array: any[]) => {
  const range = [...Array(array.length)].map((_, i) => i);

  // cope edge case when empty data cause range = []
  if (index === 0) {
    return true;
  }

  if (range.includes(index)) {
    return true;
  }

  // (  F  )(  T  )(  F  )
  // -#####,0,[...],#####+
  return false;
};

export const outOfRange = (index: number, array: any[]) => {
  // invert result of within
  return within(index, array) ? false : true;
};

export const complied = (array: any[], index: number) => {
  // 0,[...]
  if (within(index, array)) {
    return index;
  }
  // #####+
  if (index > 0) {
    return maxIndex(array);
  }
  // -#####
  return 0;
};

export const last = <Type>(array: Type[]): undefined | Type => {
  const maxi = maxIndex(array);

  return array[maxi];
};

export const latest = <Type>(array: Type[]): undefined | Type => {
  return last(array);
};
