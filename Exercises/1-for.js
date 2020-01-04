'use strict';

const sum = (...args) => {
  let s = 0;
  const n = args.length;
  for (let i = 0; i < n; i++)
    s += args[i];
  return s;
};

module.exports = { sum };
