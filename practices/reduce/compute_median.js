'use strict';

function compute_median(collection) {
  for(let i=0;i<collection.length;i++){
    let minIndex=i;
    for(let j=i+1;j<collection.length-1;j++){
      if(collection[j]<collection[minIndex]){
        minIndex=j;
      }
    }
    let temp=collection[minIndex];
    collection[minIndex]=collection[i];
    collection[i]=temp;
  }
  console.log(collection);
  if(collection.length%2!==0){
    return collection[(collection.length-1)/2];
  }
  else{
    return (collection[collection.length/2]+collection[collection.length/2-1])/2;
  }
}

module.exports = compute_median;


