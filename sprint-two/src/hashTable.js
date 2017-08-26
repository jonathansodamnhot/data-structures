

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index)) {
    var change = false;
    this._storage.each(function(itemArr) {
      if (itemArr[0] === k) {
        this._storage.set(index, [k, v]);
        change = true;
      }
    });
    if (change = false) {
      this._storage[index].push([k, v]);
    } 
  } else {
    this._storage[index] = [[k, v]];
  } 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // going through the storage in each index in storage
  //
  //debugger;
  for ( var i = 0; i < this._storage[index].length; i++ ) {
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i, 1);
    }
  }



  // this._storage[index].each(function(itemArr) {
  //   if (itemArr[0] === k) {
  //     itemArr.splice(i, 1);
  //   }
  // });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


