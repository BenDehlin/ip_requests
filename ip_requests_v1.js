// Naive solution
const ip_addresses = {}

const request_handled = (ip_address) => {
  ip_addresses[ip_address] = ip_addresses[ip_address] 
  ? ip_addresses[ip_address] + 1 : 1
}

const top100 = () => {
  return Object
  .entries(ip_addresses)
  .sort((a, b) => b[1] - a[1])
  .map(([val]) => val)
  .slice(0, 100)
}

module.exports = {
  ip_addresses,
  request_handled,
  top100
}