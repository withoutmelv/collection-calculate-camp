'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var mark_divisible_integer=new Array();
  var outPut=new Array();
  var count=0;
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<collection_b.length;j++){
      if(collection_a[i]%collection_b[j]==0){
        mark_divisible_integer[collection_a[i]]=1;
      }
    }
  }
  for(var i=0;i<collection_a.length;i++){
    if(mark_divisible_integer[collection_a[i]]){
      outPut[count]=collection_a[i];
      count++;
    }
  }
  return outPut;
}

module.exports = choose_divisible_integer;
