'use strict';

function even_to_letter(collection) {
  let outPut=[];
  let count=0;
  for(let i=0;i<collection.length;i++){
    if(collection[i]%2===0){
      outPut[count]=String.fromCharCode(collection[i]+96);
      count++;
    }
  }
  return outPut;
}

module.exports = even_to_letter;
