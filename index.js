fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, fn) {
      for (element in collection) {
        fn(collection[element]);
      }
      return collection;
    },

    map: function(collection, fn) {
      const arr = []
      for (element in collection) {
        arr.push(fn(collection[element]));
      }
      return arr;
    },

    reduce: function(collection, fn, acc) {
      for (element in collection) {
        acc = fn(acc, collection[element], collection);
      }
      return acc;
    },


    find: function(collection, predicate) {
      for (element in collection) {
        if (predicate(collection[element])) {
          return true
        }
      }
      return false
    },

    filter: function(collection, predicate) {
      var arr = []
      for (element in collection) {
        if (predicate(collection[element])) {
          arr.push(collection[element])
        }
      }
      return arr
    },


    size: function(collection) {
      var arr = 0
      for (element in collection) {
        arr += 1
      }
      return arr
    },


    first: function(collection, n = 1) {
      var arr = []
      var counter = 0
      while (counter < n ) {
        arr.push(collection[counter])
        counter++
      }
      if(arr.length == 1) {
        return arr[0]
      } else {
        return arr
      }

    },

    last: function(collection, n = 1) {
      var arr = []
      var size = collection.length - 1
      var counter = 0

      while(counter < n) {
        arr.unshift(collection[size])
        counter++
        size--
      }
      if(arr.length == 1) {
        return arr[0]
      } else {
        return arr
      }
    },

    compact: function(collection) {
      var arr = []
      for (element in collection) {
        if (collection[element]) {
          arr.push(collection[element])
        }
      }
      return arr
    },

    sortBy: function(collection, iteratee) {
      let arr = []
      for (element in collection) {
        arr.push(iteratee(collection[element]))

      }
      return arr.sort(function(a, b){return a - b})
    },

flatten: function(collection, shallow = false) {
  let arr = []
    function flatten_helper(collection) {
      if (!shallow) {
        if (typeof collection === 'object') {
          for (element in collection) {
            flatten_helper(collection[element], false)
            }
              } else {
                  arr.push(collection)
              }
            } else {

              for(element in collection) {
                if (typeof collection[element] === 'object') {
                  for (key in collection[element]) {
                    arr.push(collection[element][key])
                  }
                }
                else {
                  arr.push(collection[element])
                }
              }
            }
          }
        flatten_helper(collection)
        return arr
      },

  uniq: function(collection, isSorted = false, fn = null) {
    var arr = []
    var test = []
    for (element of collection) {
      if (fn) {
        if (!test.includes(fn(element))){
          test.push(fn(element))
          arr.push(element)
        }

      } else { if (!arr.includes(element)) {
        arr.push(element)
      }
    }
  }
  return arr.sort()
},

keys: function(collection) {
  var arr = []
  for (element in collection) {
      arr.push(element)
    }
  return arr
},

values: function(collection) {
  var arr = []
  for (element in collection) {
      arr.push(collection[element])
    }
  return arr
},

functions: function(collection) {
  var arr = []
  for (element in collection) {
    if(typeof collection[element] === 'function') {
      arr.push(element)
    }
  }
  return arr
},

keys: function(collection) {
  var arr = []
  for (element in collection) {
      arr.push(element)
    }
  return arr
},



        }
})()

fi.libraryMethod()
