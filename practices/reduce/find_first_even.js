'use strict';

function find_first_even(collection) {
  let firstEven;
  for(let i=0;i<collection.length;i++){
    if(collection[i]%2===0){
      firstEven=collection[i];
      break;
    }
  }
  return firstEven;
}

module.exports = find_first_even;

