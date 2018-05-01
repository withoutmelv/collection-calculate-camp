'use strict';

function get_union(collection_a, collection_b) {
  var countSame=new Array();
  var outPut=new Array();
  var count=0;
  for(var i=0;i<collection_a.length;i++){
    outPut[i]=collection_a[i];
  }
  for(var j=0;j<collection_b.length;j++){
    countSame[collection_b[j]]=0;
  }
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<collection_b.length;j++){
      if(collection_a[i]==collection_b[j]){
        countSame[collection_b[j]]=1;
      }
    }
  }
  for(var i=0;i<collection_b.length;i++){
    if(countSame[collection_b[i]]!=1){
      outPut[collection_a.length+count]=collection_b[i];
      count=count+1;
    }
  }

  return outPut;
}

module.exports = get_union;

