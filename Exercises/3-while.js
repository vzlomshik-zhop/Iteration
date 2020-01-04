'use strict';

const sum = (...args) => {
  let s = 0;
  const n = args.length;
  let i = 0;
  while (i < n)
    s += args[i++];
  return s;
};

module.exports = { sum };
