/**
 *  returns the number of milliseconds since the ECMAScript epoch
 */

export const sinceEpoch = () => {
  return new Date().getTime();
};

export const time = { sinceEpoch };
