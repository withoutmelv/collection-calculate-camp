function collect_same_elements(collection_a, object_b) {
  let dataType=Object.prototype.toString;
  if(dataType.call(collection_a)==='[object Array]'&&dataType.call(object_b)==='[object Object]'&&dataType.call(collection_a[0])==='[object Object]'){
    let outPut=new Array();
    let count=0;
    for(let i=0;i<collection_a.length;i++){
      for(let j=0;j<object_b.value.length;j++){
        if(object_b.value[j]===collection_a[i].key){
          outPut[count]=object_b.value[j];
          count++;
        }
      }
    }
    return outPut;
  }
}

module.exports = collect_same_elements;
