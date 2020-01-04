'use strict';

const sum = (...args) => {
  let s = 0;
  const n = args.length;
  for (let a of args)
    s += a;
  return s;
};

module.exports = { sum };
