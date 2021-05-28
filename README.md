### 2 solutions implemented
1. First solution in `./ip_requests_v1.js` is using the built in javascript sort method
2. Second solution in `./ip_requests_v2.js` uses a custom build merge sort
3. Dummy data in `dummy_data.json` that will allow us to test our functions against thousands of ip addresses tens of thousands of times each
4. Simulation set up in `./simulation.js` which will import all of our functions and execute

### Questions and answers
##
1. What what I do differently with more time?
The first thing I would want to do differently with more time would be make sure that I had a proper test suite set up before hand to ensure that I was timing my functions and then while iterating through my different versions I would check the time they were taking. This would also allow me to trim the fat as I get closer to my solution.
##
2. What is the runtime complexity of each function?
 the merge sort should be n*Log(n) with the other functionality in top100 being negligible
##
3. How does your code work?
I have added comments to `./ip_requests_v2` explaining my code, but the request_handled function should take in an ip, do a lookup in our dictionary for that ip and if it finds it it will increment the count, otherwise it will add it to the dictionary with a count of 1. 
Our top100 function should take that dictionary, convert it into an array of tuples, sort the array by the second value of the tuple (the count) and then take that resulting array and slice the first 100 and convert the tuples in that 100 back into just ip addresses.
Our clear function should loop through our dictionary and delete all the ip addresses out.
##
4. What other approaches did you decide not to pursue?
I considered sorting the values as each new request came in so that the top100 wouldn't have the sort bottleneck but ultimately decided the sort bottleneck made more sense on the top100 function than on the request_handled function.
##
5. How would you test this?
I added a dummy_data.json and a simulation file that would run thousands of ip addresses through my program tens of thousands of times each. Things to look for here would be:
###
1. Are all of our ip_addresses sorted properly?
2. What is the speed of our program?
3. did we return the 100 most hit addressses?
4. does our clear function reset the dictionary?