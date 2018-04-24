fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
        const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

        for (let idx = 0; idx < newCollection.length; idx++)
            iteratee(newCollection[idx])

        return collection
        },

    map: function(collection, iteratee) {
      if(!(collection instanceof Array)){
        collection = Object.values(collection)
      }

      const newArr = []

      for(let i = 0; i < collection.length; i++)
        newArr.push(iteratee(collection[i]))

      return newArr

    },

    reduce: function() {
      if (!(collection instanceof Array))
      collection = Object.values(collection)

      for (let idx = 0; idx < collection.length; idx++)
      acc = iteratee(acc, collection[idx], collection)

      return acc
    },

    functions: function() {
      
    },


  }
})()

fi.libraryMethod()
