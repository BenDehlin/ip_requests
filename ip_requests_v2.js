// dictionary to hold ip addresses and the number
// of requests for that address.
const ip_addresses = {}

// function to handle requests to a given ip. Checks to
// see if the ip_address is already in the dictionary
// and if it is it increases the count by 1, otherwise
// sets the count for that address to 1.
const request_handled = (ip_address) => {
  ip_addresses[ip_address] = ip_addresses[ip_address] 
  ? ip_addresses[ip_address] + 1 : 1
}

// custom merge sort helper function
// Helper method for the custom sort function below.
// Takes in a left and right side of an array to be
// sorted and then as long as both halves still have
// values inside it checks which one is greater and
// puts that at the front of our temp array.
// Note that each item in the left and right array
// should be an array with 2 items inside which are
// the ip_address at index 0 and the count for that
// ip_address at index 1.
const merge = (left, right) => {
  const temp = []
  while(left.length > 0 && right.length > 0){
    // checks which ip address has a higher count and
    // pushes that one into our temp array, shifting
    // it out of its respective array.
    temp.push(
      left[0][1] > right[0][1] 
      ? left.shift() 
      : right.shift()
      )
  }
  // here we can return the temp array with whatever remains
  // in the left and right array (only 1 half should have
  //   values left.)
  return [...temp, ...left, ...right]
}
// custom merge sort
// Our custom merge sort takes in an array, and if that
// array is of length 1  (or less) we return. Otherwise
// we will find the mid-point of the array and then call
// our merge helper function passing in the results of
// the 2 halves of our array sorted recursively.
const sort = (arr) => {
  if(arr.length <= 1) return arr
  const middle = Math.floor(arr.length / 2)
  return merge(
    sort(arr.slice(0, middle)), 
    sort(arr.slice(middle))
    )
}
// top100 with custom merge sort
// Here is the actual top100 function, it will take our
// dictionary and convert it into an array of tuples. Each
// tuple is an array with 2 values inside, an ip_address
// and a count for that ip_address. This is why in our custom
// merge helper method we needed to compare left[0][1] and
// right[0][1] instead of just left[0] and right[0]
// After sorting properly we want to end up with just the ip
// address (and only 100 of them) so we slice the first 100 items
// and then convert them from tuples containing the address and the
// count back to just the address.
const top100 = () => {
  return sort(Object.entries(ip_addresses)).slice(0, 100).map(([val]) => val)
}

const clear = () => {
  for(let key in ip_addresses){
    delete ip_addresses[key]
  }
}

// Finally we export our 2 functions and the ip_addresses 
// dictionary so that we can use them over in our simulation.
module.exports = {
  top100,
  request_handled,
  ip_addresses,
  clear
}