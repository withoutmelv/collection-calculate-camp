function create_updated_collection(collection_a, object_b) {
  for(let i=0;i<collection_a.length;i++){
    for(let j=0;j<object_b.value.length;j++){
      if(collection_a[i].key===object_b.value[j]&&collection_a[i].count>=3){
        let silly;
        if(collection_a[i].count%3===0){
          silly=collection_a[i].count/3;
        }
        if(collection_a[i].count%3!==0){
          silly=(collection_a[i].count-(collection_a[i].count%3))/3;
        }
        collection_a[i].count-=silly;
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
