# cookie-stand

Requirements:
-display individual store data
-represent stored data in list form on webpage
-code should be object-oriented/use DOM
-use object literals, one for each store
-Main page meets the requirements of the problem domain
-stores are correctly rendering as lists to the main page

Data:
-For each store:
  -hours of operation
  -min customers per hour
  -max customers per hour
  -average number of cookies purchased per customer

Code for changes to:
-add and remove locations
-input numbers for each location based on:
  -day of the week
  -special events
  -other potential factors

Needs to be formatted nicely and styled accordingly

Object Literals:
  -stores min/max hourly customers
  -uses a method of this object to generate random customers per hour
  -calculate and store the simulated amounts of cookies purchased every hour at EACH location using average cookies purchased and the random number of customers generated
  store each stores results as a property that is an array
  -display each array of values as a <ul>
  --see git hub day 6 lab page for exapmle of what putput should look like
