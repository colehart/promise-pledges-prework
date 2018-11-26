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
    console.log(list);
    resolve(list.sort())
  })
}