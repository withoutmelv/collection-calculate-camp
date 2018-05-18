'use strict';

function grouping_count(collection) {
  var countLetter=new Object();
  for(var i=0;i<collection.length;i++) {
    if (!countLetter[collection[i]]) {
      countLetter[collection[i]] = 1;
    }
    else {
      countLetter[collection[i]]++;
    }
  }
  return countLetter;
}

module.exports = grouping_count;
