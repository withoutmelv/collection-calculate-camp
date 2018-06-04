function create_updated_collection(collection_a, object_b) {
  let outPut=[];
  let num=1;
  for(let i=0;i<collection_a.length;i++){
    if(collection_a[i]===collection_a[i+1]){
      num++
    }
    else{
      if(i===collection_a.length-1){
        let temp=collection_a[i].split('-');
        outPut.push(
          {
            'key':temp[0],
            'count':temp[1],
          }
        )
      }
      else{
        outPut.push(
          {
            'key':collection_a[i],
            'count':num,
          }
        )
        num=1;
      }
    }
  }
  for(let i=0;i<object_b.value.length;i++){
    for(let j=0;j<outPut.length;j++){
      if(object_b.value[i]===outPut[j].key){
        let temp=Math.floor(outPut[j].count/3);
        outPut[j].count-=temp;
      }
    }
  }
  return outPut;
}

module.exports = create_updated_collection;
