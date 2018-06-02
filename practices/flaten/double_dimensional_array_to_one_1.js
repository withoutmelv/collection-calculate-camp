'use strict';

function double_to_one(collection) {
    var newArray = [];
    for (var i=0,length = collection.length - 1; i <= length; i++) {
      if(collection[i] instanceof Array){//判断是不是数组
        newArray = newArray.concat(double_to_one(collection[i]));//递归调用
      }else{
        newArray.push(collection[i]);
      }
    }
    return newArray;
}

module.exports = double_to_one;
