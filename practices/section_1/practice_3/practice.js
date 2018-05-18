function collect_same_elements(collection_a, object_b) {
  let dataType=Object.prototype.toString;
  if(dataType.call(collection_a)==='[object Array]'&&dataType.call(object_b)==='[object Object]'){
    let outPut=new Array();
    let count=0;
    for(let i=0;i<collection_a.length;i++){
      for(let j=0;j<object_b.value.length;j++){
        if(collection_a[i]===object_b.value[j]){
          outPut[count]=collection_a[i];
          count++;
        }
      }
    }
    return outPut;
  }
}

module.exports = collect_same_elements;
