'use strict';

const sum = (...args) => {
  const reducer = (a, b) => a + b;
  return args.reduce(reducer);
}

module.exports = { sum };
