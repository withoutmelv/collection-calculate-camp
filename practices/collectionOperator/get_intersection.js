'use strict';

function get_intersection(collection_a, collection_b) {
  var outPut=new Array();
  var count=0;
  for(var i=0;i<collection_a.length;i++)
    for(var j=0;j<collection_b.length;j++)
    {
      if(collection_a[j]===collection_b[i])
      {
        outPut[count]=collection_a[j];
        count++;
      }
    }
    return outPut;
}

module.exports = get_intersection;
