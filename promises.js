// Promises Prework
// https://gist.github.com/robbiejaeger/dc8f55c1f9462741090862f736b82cab

// Exercises

const testNum = (number) => {
  return new Promise((resolve, reject) => {
    if( number > 10 ) resolve( number + ' is greater than 10, success!' )
    else reject( number + ' is less than 10, error!' )
  })
}

const makeAllCaps = (list) => {
  return new Promise((resolve, reject) => {
    const upperList = list.map(item => {
      if(typeof item !== 'string') {
        reject('No the array you passed in contained an element that was not a string!')
      }
      else {
        return item.toUpperCase()
      }
    })

    resolve(upperList);
  })
}

const sortWords = (list) => {
  return new Promise((resolve, reject) => {
    resolve(list.sort())
  })
}

/*
Questions

1. What is .then() used for, and what is .catch() used for?
.then() awaits the resolution of a Promise before executing its callback function, while .catch() awaits the rejection (if any) of a Promise before exectuting its callback function

2. What are good use cases for Promises?
Any time you need to await the completion of something asyncronous before doing something else or store the result of an asyncronous operation for later use... API and database calls
Google recommends using promises over callbacks because of the efficiency of the error handling: https://developers.google.com/api-client-library/javascript/features/promises

3. What other libraries/functions can you find that use Promises?
  Bluebird, fetch, jQuery, Q, WhenJS
*/