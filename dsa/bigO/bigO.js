//¹²³⁴⁵⁶⁷⁸⁹⁰
//₀₁₂₃₄₅₆₇₈₉

//O(n)
function nTime(n) {
  for (let i = 0; i < n; i++) {
    //runs n amount of times  
  }

  //Doesnt matter how many loops there are
  //Still considered O(n)
  for (let i = 0; i < n; i++) {
    //runs n amount of times
  }

  for (let i = 0; i < n; i++) {
    //runs n amount of times
  }

}
//O(n²)
function exponentialTime(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      //exponential time
      //O(n²)
    }
  }

  // Still O(n2) dont need to account for additional constant time
  for (let i = 0; i < n; i++) {
    //runs n amount of times
    //constant time
  }
}



//only one operation 
// constant time
//O(1)
function one(n) {
  return n + n
}



function logN() {
  //Divide and conquer style 
  //log₂8 = 3
  // 2³ = 8
}

//O(n logn) - better than exponential, and as good as a sorting algo can get




//INPUTS
function nTime(a, b) {
  for (let i = 0; i < a; i++) {
    //runs n amount of times  
  }

  //Doesnt matter how many loops there are
  //Still considered O(n)
  for (let i = 0; i < b; i++) {
    //runs n amount of times
  }

  //This can only be simplied as far as O(a) + O(b)
  //Because we can't be guaranteed that a and b are equal
  // O(a + b)

}


function exponentialTime(a, b) {
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      //exponential time
      //O(n²)
    }
  }

  // Can only be simplified down to the input constants
  // O(a * b)
}


/**
 *
 * Big O of Arrays
 * 
 */
const myArray = [11, 3, 23, 7];
// Push and Pop are constant time because they dont force re-indexing
myArray.push(17); // O(1)
myArray.pop(); // O(1)

// Array needs to be re-index for these
myArray.shift(); //  O(n)
myArray.unshift(11); // O(n)

// Array is re-index when adding new item into middle of array
// O(n)
myArray.splice(1, 0, 'HI');

// Removing is also O(n)
// O(1)
myArray.splice(1, 1);

// O(n)
myArray.includes(5)

// O(1)
myArray[3]


/**
 *  O(n²) Loop within a loop
 */

/**
 * O(n) Proportional
 */

/**
 * O(log n) Divide and Conquer
 */

/**
 * O(1) Constant Time
 */