'use strict';

function average_to_letter(collection) {
  let sum=0;
  let average;
  for(let i=0;i<collection.length;i++){
    sum+=collection[i];
  }
  average=sum/collection.length;
  average=Math.ceil(average);
  return String.fromCharCode(average+96);
}

module.exports = average_to_letter;

