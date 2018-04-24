export function checkNullAndEmpty(input, name) {
  if (typeof input !== 'string' || !input.trim()) {
    throw new Error(`${name} was null or empty`);
  }

  return input;
};

export function generateHexString(length) {
  let ret = '';

  while (ret.length < length) {
    ret += Math.random().toString(16).substring(2);
  }
  return ret.substring(0, length);
}
