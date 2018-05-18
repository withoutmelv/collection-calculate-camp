function collect_same_elements(collection_a, collection_b) {
  let dataType=Object.prototype.toString;
  if(dataType.call(collection_a)==='[object Array]'&&dataType.call(collection_b)==='[object Array]'&&collection_b.length===1){
    let outPut=new Array();
    let count=0;
    for(let i=0;i<collection_a.length;i++){
      for(let j=0;j<collection_b[0].length;j++){
        if(collection_b[0][j]===collection_a[i]){
          outPut[count]=collection_a[i];
          count++;
        }
      }
    }
    return outPut;
  }
}

module.exports = collect_same_elements;
