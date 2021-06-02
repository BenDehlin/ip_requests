const ip_addresses = {}

const request_handled = (ip_address) => {
  ip_addresses[ip_address] = ip_addresses[ip_address]
    ? ip_addresses[ip_address] + 1
    : 1
}

const top100 = () => {
  // create new empty array to contain our top 100 addresses
  const arr = []
  // loop over the object
  for (let address in ip_addresses) {
    const count = ip_addresses[address]
    // if the array is empty push our address and count into the array
    if (arr.length === 0) {
      arr.push([address, count])
    }
    // if the array is less than 100 we either push the address and count onto the end of the array if the new item has the smallest count, or if it doesn't have the smallest count we find the appropriate location in the array to insert our new item.
    else if (arr.length < 100) {
      if (count < arr[arr.length - 1][1]) {
        arr.push([address, count])
      } else {
        const index = arr.findIndex((e) => count > e[1])
        arr.splice(index, 0, [address, count])
      }
      // If the array is at 100 and our count is larger than the count of the last item in our array (which should be the smallest count in the array) then we check to see where inside of our array the item should fall and insert it there. Afterwards we remove the last item in the array to ensure that the list stays at 100.
    } else if (count > arr[arr.length - 1][1]) {
      const index = arr.findIndex((e) => count > e[1])
      arr.splice(index, 0, [address, count])
      arr.pop()
    }
  }
  // here we map over the final 100 items and grab JUST the ip address since we no longer care what the count is. This is the final array we will return.
  return arr.map(([address]) => address)
}

const clear = () => {
  for (let key in ip_addresses) {
    delete ip_addresses[key]
  }
}

module.exports = {
  top100,
  request_handled,
  ip_addresses,
  clear,
}
