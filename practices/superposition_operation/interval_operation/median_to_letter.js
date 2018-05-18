'use strict';

function median_to_letter(collection) {
  let sum=0;
  for(let i=collection[0];i<collection.length;i++){
    sum+=collection[i];
  }
  let average=Math.ceil(sum/collection.length);
  if(average<=26){
    return String.fromCharCode(average+96);
  }
  else{
    return String.fromCharCode((average-1)/26+96,(average-1)%26+97);
  }
}

module.exports = median_to_letter;
