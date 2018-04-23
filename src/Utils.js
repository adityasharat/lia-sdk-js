export function checkNullAndEmpty(input, name) {
  if (typeof input !== 'string' || !input.trim()) {
    throw new Error(`${name} was null or empty`);
  }

  return input;
};
