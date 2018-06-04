function count_same_elements(collection) {
  let outPut=[];
  let count=1;
  for(let i=1;i<collection.length;i++){
    if(collection[i]===collection[i+1]&&collection[i-1]===collection[i]){
      count++
    }
    else{

    }
  }
}

module.exports = count_same_elements;
