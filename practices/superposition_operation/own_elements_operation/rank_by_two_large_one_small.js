'use strict';
function rank_by_two_large_one_small(collection){
  let count=0;
  for(let i=0;i<collection.length-1;i++){
    for(let j=i+1;j<collection.length;j++){
      if(collection[i]>collection[j]){
        let temp=collection[i];
        collection[i]=collection[j];
        collection[j]=temp;
      }
    }
  }
  for(let i=0;i<collection.length;i=i+3){
    if(i+3<=collection.length){
      let temp=collection[i];
      collection[i]=collection[i+1];
      collection[i+1]=collection[i+2];
      collection[i+2]=temp;
    }
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
