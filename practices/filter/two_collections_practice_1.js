'use strict';

function choose_common_elements(collection_a, collection_b) {

  var outPut=new Array();
  var count=0;
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<collection_b.length;j++){
      if(collection_a[i]==collection_b[j]){
        outPut[count]=collection_b[j];
        count++;
      }
    }
  }
  return outPut;
}

module.exports = choose_common_elements;
