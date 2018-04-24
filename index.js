fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      for (const c in collection) {
        cb(collection[c]);
      }
      return collection;
    },

    map: function(collection, cb) {
      let result = [];
      for (const c in collection) {
        result.push(cb(collection[c]));
      }
      return result;

    },

    reduce: function(collection, cb, acc) {
      for (const c in collection) {
        acc = cb(acc, collection[c], collection);
      }
      return acc;
    },

    find: function(collection, predicate) {
      for (const c in collection) {
        if (predicate(collection[c])) {
          return true;
        }
      }
      return false;
    },

    filter: function(collection, predicate) {
      let result = [];
      for (const c in collection) {
        if (predicate(collection[c])) {
          result.push(collection[c]);
        }
      }
      return result;
    },
    size: function(collection) {
      let count = 0;
      for (const c in collection) {
        count++;
      }
      return count;
    },
    first: function(array, n = 1) {
      let result = (n === 1) ? 0 : [];
      for (let i = 0; i < n; i++) {
        if (n === 1) {
          result = array[i];
        } else
          result.push(array[i]);
      }
      return result;
    },

    last: function(array, n = 1) {
      return n === 1 ? array.slice(-1 * n)[0] : array.slice(-1 * n);
    },

    compact: function(array) {
      let result = [];
      for (const a of array) {
        if (a) {
          result.push(a);
        }
      }
      return result;
    },

    sortBy: function(array, cb) {
      let arr = [];
      for (let a in array) {
        arr.push(cb(array[a]));
      }
      return arr.sort((function(a, b) {
        return a - b
      }));

    },
    flatten: function(array, shallow = false) {
      let result = [];

      function flatten_helper(array) {
        if (shallow === false) {

          if (typeof array === "object") {
            for (const key in array) {
              flatten_helper(array[key]);
            }

          } else {
            result.push(array);

          }
        } else {

          for (const key in array) {
            if (typeof array[key] === "object") {
              for (const nestedKey in array[key]) {
                result.push(array[key][nestedKey]);
              }
            } else {
              result.push(array[key])
            }
          }
        }

      }
      flatten_helper(array);
      return result;
    },

    uniq: function(array, isSorted = false, iteratee = null) {
      let result = [];
      let arr = []
      for (const el of array) {
        if (iteratee) {
          if (!arr.includes(iteratee(el))) {
            arr.push(iteratee(el));
            result.push(el);
          }
        } else {
          if (!result.includes(el)) {
            result.push(el);
          }
        }
      }
      return result.sort();

    },
    keys: function(object) {
      let result = [];
      for (const el in object) {
        result.push(el);
      }
      return result;
    },

    values: function(object) {
      let result = [];
      for (const el in object) {
        result.push(object[el]);
      }
      return result;
    },

    functions: function(object) {

      let result = [];
      for (const el in object) {
        if (typeof object[el] === "function")
          result.push(el);
      }
      return result.sort();

    },
    giveMeMore: function() {
      return true;
    }
  }
})()

fi.libraryMethod()
