'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  var outPut=new Object();
  var result=new Array();
  var count=0;
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<collection_b.length;j++){
      if(collection_a[i]==collection_b[j]){
        outPut[collection_a[i]]=1;
      }
    }
  }
  for(var i=0;i<collection_a.length;i++){
    if(!outPut[collection_a[i]]){
      result[count]=collection_a[i];
      count++;
    }
  }
  return result;
}

module.exports = choose_no_common_elements;
