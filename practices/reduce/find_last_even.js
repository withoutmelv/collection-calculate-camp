'use strict';

function find_last_even(collection) {
  let lastEven;
  for(let i=0;i<collection.length;i++){
    if(collection[i]%2===0){
      lastEven=collection[i];
    }
  }
  return lastEven;
}

module.exports = find_last_even;
