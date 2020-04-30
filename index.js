'use strict';

// YOU KNOW WHAT TO DO //
/**
 * identity: return a given value unchanged
 * 
 * @param {Any datatype} value: Input value can be any data type
 * 
 * @return {any datatype} value: Return value unchanged.
 * 
 */ 
function identity(value){
    return value;
}

module.exports.identity = identity;




/**
 * typeOf: Takes an input value and returns it's datatype as a string.
 * 
 * @param {any datatype} value : Input value can be any data type. The datatype of the input value will be checked using conditional statements
 * 
 * @return {String} : Returns the type of value as a string
 * 
 */ 
 
 function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if (typeof value === "string"){
        return "string";
    } else if (typeof value === "number"){
        return "number";
    } else if (typeof value === "boolean"){
        return "boolean";
    } else if(typeof value === "undefined"){
        return "undefined";
    } else if (value === null){
        return "null";
    } else if (Array.isArray(value)){
        return "array";
    } else if (typeof value === 'function'){
        return "function";
    } else if (typeof value === 'object'){
        return "object";
    }
}

module.exports.typeOf = typeOf;



/**
 * first: Designed to test an array and a number to return output.
 * 
 * @param {Array} array : value to test if collection is an array
 * @param {Number} number : value to test if number is not given or is a number
 * 
 * @return {Array} : returns an empty array if <array> is not an array
 * @return {Any datatype} : returns the first element of the array if <number> is not given or NAN
 * @return {array} array: return the first <number> items of <array>
*/ 

 function first(array, number){
  if (!Array.isArray(array)){
      return [];
  } else if (number === null || isNaN(number)){
      return array[0];
  } else if (number < 0){
      return [];
  }else {
    array.splice(number, array.length); 
    return array;
  }
}

module.exports.first = first;



/**
 * last: Designed to test an array and a number to return output.
 * 
 * @param {Array} array : value to test if collection is an array
 * @param {Number} number : value to test if number is not given or is a number
 * 
 * @return {Array} : returns an empty array if <array> is not an array
 * @return {Any datatype} : returns the last element of the array if <number> is not given or NAN
 * @return {array} array: return the last <number> items of <array>
*/ 
 
 function last(array, number){
  if (!Array.isArray(array)){
      return [];
      
  } else if (number === undefined || isNaN(number)){
      return array[array.length - 1];
      
  } else if (number < 0){
      return [];
      
  }else if (number > array.length) {
       return array;
       
   } else if (number) {
    return array.slice(array.length - number, array.length); 
  }
}
module.exports.last = last;

/**
 * indexOf: Designed to loop over an array and check if each element is equivalent to <value> and returns
 * the value's index of it's first occurence.
 * 
 * @param {Array} array : array to iterate through
 * @param {any datatype} value :  The values to check if it's first occurence of that value in the <array> input.
 * 
 * @return {number} i : returns the index number of <value> if found.
 * @return {number} : returns -1 if value is not an occurence in the array.
 * 
 */ 
 function indexOf(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    }
    return -1;
}

module.exports.indexOf = indexOf;

/**
 * contains: Designed to loop over an array to check if <array> contains a <value> 
 * 
 * @param {Array} array : array to iterate through
 * @param {Any datatype} value : value to test if it is included in the array.
 * 
 * @return {boolean}: returns true if <array> contains <value>, false otherwise
 * 
 */ 

function contains(array, value){
    return array.includes(value) ? true : false;
}
module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection : The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Designed to loop over an array that has duplicate elements
 *  and creates a new array with duplicates removed
 * 
 * @param {Array} array : collection to iterate in which each element is tested for duplicates
 * 
 * @return {array}: returns an array with unique values.
 * 
*/

function unique(array) {
   var newArray =[];
   
   for (let i = 0; i < array.length; i++){
  
       if (indexOf(newArray, array[i]) === -1){
           newArray.push(array[i]);
       }
   } 
   return newArray;
}
module.exports.unique = unique;

/**
 * filter: Designed to loop over an array and apply <function> to each value in the collection 
 * and returns the values that the function call returned true into a new array.
 * 
 * @param {Array} array : Collection to iterate through.
 * @param {function} funct : action function to apply to each element, index, array
 * 
 * @return {array} newArray : returns a new array of all values for which the <function> returned true.
 * 
 */ 
 
function filter(array, funct){
    var newArray = [];
    each(array, function(element, index, collection){
        
        if(funct(element, index , array)){
            newArray.push(element);
        }
        
    });
    return newArray;
}
module.exports.filter = filter;

/**
 * reject: Designed to loop over an array and apply <function> to each value in the collection 
 * and returns the values that the function call returned false into a new array.
 * 
 * @param {Array} array : Collection to iterate through.
 * @param {Function} funct : action function to apply to each element, index, array.
 * 
 * @return {array} newArray : returns a new array of all values for which the <function> returned false.
 * 
 */  

function reject(array, fun){
    var newArray = [];
   each(array, function(element, index, collection){
       
        if( fun(element, index , array) === false){
            newArray.push(element);
        }
   });
    return newArray;  
}
module.exports.reject = reject;

/**
 * partition: Designed to loop over an array and create two seperate arrays. One array of values
 * for which <functon> returned falsy and the other filled with values for which <function> returned truthy values.
 * Both of these arrays are then pushed into a newArray.
 * The new array containing both arrays is then returned.
 * 
 * @param {Array} array : array to iterate and apply <function> to elements
 * @param {Function} aFunction :the function to be applied to the elements in the array in order to seperate truthy and falsy values.
 * 
 * 
 * @return {array} newArray : returns a nested array containing one array with falsy values and another with truthy values.
 * 
 */
 
 function partition(array, aFunction){
      var newArray = [];

    var truthyValues = filter(array, aFunction);
    var falsyValues = reject(array, aFunction);

 
    newArray.push(truthyValues);
    newArray.push(falsyValues);


    return newArray;
 }
 module.exports.partition = partition;
 
 /**
  * map: Designed to iterate over a collection and push values for which calling <function> returned true
  * into a new array and the new array is returned.
  * 
  * @param {Array or Object} collection : collection to iterate through
  * @param {Function} func : Action function to be applied to each element or property in the collection 
  * 
  * @return {array} newArray: returns a neew array for which calling action function return true
  * 
 */ 
 
function map(collection,func){
        var newArray = [];

    each(collection,function(element, index, collection) {
     
        newArray.push(func(element,index, collection));
    });
    return newArray;
}
module.exports.map = map;


/**
 * pluck: Designed to loop over an array of objects and applies the map function to retrieve the 
 * value of calling the function on a given property.
 * 
 * @param {Array} objArr : the array of objects to iterate through
 * @param {String} property : key values of an object with in the array
 * 
 * reutrn {array} : an array containing the value of <property> for every element in array of objects.
 * 
*/ 

function pluck(objArr, property){
   return map(objArr, function(object, index, objArr){
        return object[property];
  });
}
module.exports.pluck = pluck;


/**
 * every: Designed to iterate over a collection and applies <func> to the every element in the collection.
 * Checks if the value of the function call on all elements are true.
 * 
 * @param {Array or Object} Collection : Collection to iterate
 * @param {Function} funct : function to apply to each value in the collection
 * 
 * @return {boolean}: returns true if the value of the function call for all elements are true, false if just one is false.
 * If <function> is not provided, return true if every element is truthy, otherwise return false.
*/ 

function every(collection, funct){
    let allPass = true;
    
    if (!funct){
        for (let i = 0; i < collection.length;i++){
            if (collection[i] === false){
                allPass = false;
            }
        }
        return allPass;
    }
       
    each(collection, function(element, index, collection){
        
       if(!funct(element, index, collection)){
           allPass = false;
       } 
    });
   return allPass; 
}
module.exports.every = every;

/**
 * Some: Designed to iterate over a collection and applies <func> to the every element in the collection.
 * Checks if the value of the function call on at least one element is true.
 * 
 * @param {Array or Object} collection : Collection to iterate
 * @param {Function} funct : function to apply to each value in the collection
 * 
 * @return {boolean}: returs true if the value of the function call for at least one element is true, false if just one is false.
 * If <function> is not provided return true if at least one element is truthy, otherwise return false.
*/ 
 
 function some(collection, funct){
    let somePass = false;
    
    if (!funct){
        for (let i = 0; i < collection.length;i++){
            if (collection[i] === true){
                somePass = true;
            }
        }
        return somePass;
    }
       
    each(collection, function(element, index, collection){
        
       if(funct(element, index, collection)){
           somePass = true;
       } 
    });
   return somePass; 
}
module.exports.some = some;

/**
 *  reduce: Designed to reduce an array of values to a single value.
 * 
 * @param {Array} list : The collection to iterate through
 * @param {Function} func : <function> applied to each value in the 
 * collection to check if value is true.
 * @param {any datatype} seed : This is the parameter that values will accumulate into.
 * 
 * @return {any datatype}: returns accumulated result from the value of the last function call.
 * 
*/ 

function reduce(list, func, seed){
    let previousResult;
    if (seed !== undefined){
        previousResult = seed;
        each(list, function(element, i, list){
          previousResult = func(previousResult, element, i, list);  
        });
    }
    else {
        previousResult = list[0];
        for (let i = 1; i < list.length; i++){
            previousResult = func(previousResult, list[i], i, list);  
        }
    }
    return previousResult;
}
module.exports.reduce = reduce;

/**
 * extend:Designed take multiple object inputs applies the Object.assign method to each collection to add the collections together, 
 * creating shallow copies of input objects properties/values into the first given object.
 * 
 * @param {object} ...args : a list of objects to combine together copied into the first object
 * 
 * @return {object}: returns object in which all input objects are combined.
 * 
*/ 

function extend(...args){
  return   Object.assign(...args);
}

module.exports.extend = extend;