'use strict';

var collect_all_even = require('../../practices/collectionOperator/collect_all_even.js');

describe('collect_all_even', collect_all_even(){

  var collection_a = [1, 2, 3, 4, 5];
  var collection_b = [2, 4];

  it('选出给定区间中所有的偶数', collect_all_even(){

    var result = collect_all_even(collection_a);
    expect(result).toEqual(collection_b);
  });
});
