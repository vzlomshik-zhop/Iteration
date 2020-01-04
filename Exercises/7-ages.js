'use strict';

const ages = persons => {
  const dict = {};
  for (let a in persons) {
    dict[a] = persons[a].died - persons[a].born;
  }
  return dict;
};

module.exports = { ages };
