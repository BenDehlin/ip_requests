const ip_addresses = {}
let top_100 = []

const request_handled = (address) => {
  ip_addresses[address] = ip_addresses[address] ? ip_addresses[address] + 1 : 1
  const count = ip_addresses[address]
  const ind = top_100.findIndex((add) => add[0] === address)
  if (ind !== -1) {
    top_100.splice(ind, 1)
  }
  if (top_100.length === 0) {
    top_100.push([address, count])
  } else if (top_100.length < 100) {
    if (count < top_100[top_100.length - 1][1]) {
      top_100.push([address, count])
    } else {
      const index = top_100.findIndex((e) => count >= e[1])
      top_100.splice(index, 0, [address, count])
    }
  } else if (count > top_100[top_100.length - 1][1]) {
    const index = top_100.findIndex((e) => count >= e[1])
    top_100.splice(index, 0, [address, count])
    top_100.pop()
  }
}

const top100 = () => {
  console.log(top_100)
  return top_100.map(([address]) => address)
}

const clear = () => {
  for (let key in ip_addresses) {
    delete ip_addresses[key]
  }
  top_100 = []
}

module.exports = {
  top100,
  request_handled,
  ip_addresses,
  clear,
}
