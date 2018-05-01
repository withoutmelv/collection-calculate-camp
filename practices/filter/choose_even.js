'use strict';

function choose_even(collection) {
  var outPut=new Array();
  var count=0;
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2==0){
      outPut[count]=collection[i];
      count++;
    }
  }
  return outPut;

}

module.exports = choose_even;
