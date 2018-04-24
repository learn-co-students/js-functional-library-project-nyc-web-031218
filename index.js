fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if(Array.isArray(collection)){
        const newCollection = collection.slice()
        for(let element of newCollection){
          const index = newCollection.indexOf(element)
          callback(element, index, newCollection)
        }
      }
      else {
        const newCollection = Object.assign({}, collection)
        for(let property in newCollection) {
          const value = newCollection[property]
          callback(property, value, newCollection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection;
      if(Array.isArray(collection)){
        newCollection = collection.slice()

        for(let i = 0; i < newCollection.length; i++) {
          let e = newCollection[i];
          newCollection[i] = callback(e, i, newCollection);
        }
      }
      else {
        newCollection = []
        for(let property in collection) {
          const value = collection[property]
          newCollection.push(callback(value, property, collection))
        }
      }

      return newCollection
    },

    reduce: function(collection, callback, accumulator) {
      for(let element of collection) {
        accumulator = callback(accumulator, element, collection)
      }
      return accumulator
    },

    find: function(collection, callback) {
      for(let element of collection) {
        if(callback(element)){
          return true
        }
      }
      return false
    },

    filter: function(collection, callback) {
      let newCollection = []
      for(let element of collection) {
        if(callback(element)){
          newCollection.push(element)
        }
      }
      return newCollection
    },

    size: function(collection) {
      if(Array.isArray(collection)){
        return collection.length
      }
      else {
        return Object.keys(collection).length
      }
    },

    first: function(array, number) {
      if(number){
        return array.slice(0, number)
      }
      else {
        return array[0]
      }
    },

    last: function(array, number) {
      if(number){
        return array.slice(-number)
      }
      else {
        return array[array.length-1]
      }
    },

    compact: function(array){
      let newArr = []

      for(let element of array){
        if(element){
          newArr.push(element)
        }
      }
      return newArr
    },

    sortBy: function(array, callback) {
      let newArr = []
      // for(let element of array){
      for(let element of array){
        newArr.push(callback(element))
      }
      newArr.sort(function(a, b){return a - b})
      // }
      return newArr

    },

    flatten: function(array, bool) {
      let newArr = []
      // for(let element of array){
      let nested = function(array) {

      for(let element of array){
          if(Array.isArray(element)){
            nested(element)
          }
          else {
            newArr.push(element)
          }

        }
      }

      // }
      if (bool){
        for(let element of array){
          if(Array.isArray(element)){
            for(let e of element){
              newArr.push(e)
            }
          }
          else{
            newArr.push(element)
          }
        }
      }
      else{
        nested(array)

      }
      return newArr

    },

    uniq: function(array, isSorted, callback) {

      if(callback){
        let newArr = []
        let modifiedArr = []
        for(let element of array){
          if(!modifiedArr.includes(callback(element))){
              newArr.push(element)
              modifiedArr.push(callback(element))
          }
        }
        array = newArr
      }

      let newArr = []

      for(let element of array){
        let uniq = true
        for(let other of newArr){
          if (element === other){
            uniq = false
          }
        }
        if (uniq){
          newArr.push(element)
        }
      }
      return newArr
    },

    keys: function(object) {
      const arr = []
      for(let key in object){
        arr.push(key)
      }
      return arr
    },

    values: function(object) {
      const arr = []
      for(let key in object){
        arr.push(object[key])
      }
      return arr
    },

    functions: function(object) {
      const arr = []
      for(let key in object){
        if(typeof object[key] === "function") {
          arr.push(object[key].name)
        }
      }
      return arr.sort();
    }

  }
})()

fi.libraryMethod()
