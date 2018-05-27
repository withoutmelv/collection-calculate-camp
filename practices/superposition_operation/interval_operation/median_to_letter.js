'use strict';

function median_to_letter(collection) {
  let average=0;
  let len=collection.length;
  if(len%2===0){
    average=Math.ceil((collection[len/2]+collection[len/2-1])/2);
    }
  else{
    average=Math.floor(len/2);
  }
  if(average<=26){
    return String.fromCharCode(average+96);
  }
  else{
    return String.fromCharCode((average-1)/26+96,average%26+96);
  }
}

module.exports = median_to_letter;
