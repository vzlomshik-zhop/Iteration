'use strict';

'use strict';

const sum = (...args) => {
  let s = 0;
  const n = args.length;
  let i = 0;
  do {
    s += args[i++];
  } while (i < n)
  return s;
};

console.log(sum(1, 2, 3));

module.exports = { sum };
