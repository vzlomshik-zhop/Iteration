'use strict';

const max = matrix => {
  let maxel = matrix[0][0];
  let n = matrix.length;
  for (let i = 0; i < n; i++) {
    let m = matrix[i].length;
    for (let j = 0; j < m; j++)
      if (matrix[i][j] > maxel)
        maxel = matrix[i][j];
  }
  return maxel;
};

module.exports = { max };
