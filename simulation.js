const dummy_data = require('./dummy_data') 
const {ip_addresses, top100, request_handled} = require('./ip_requests_v1') 

// here we bring in our dummy data which is an object with 2
// values, an ip_address and a count. Then we use a nested for loop
// to simulate running that specific ip_address through our
// request_handled function once per count. This allows us to run
// 1000s of ip addresses through the function 1000s or 10000s of
// times (or more)
for(let address of dummy_data){
  for(let i = 0; i < address.count; i++){
    request_handled(address.ip_address)
  }
}

// after we simulate running our request_handled function as many
// times as we can we want to sort the results and spit out the top
// 100
const output = top100()

console.log(ip_addresses) // to check that our addresses save right in the dict
console.log(output) // to check that we got back the top 100 results
console.log(output.length)// make sure we return the right number of results