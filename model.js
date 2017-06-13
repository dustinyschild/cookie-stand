//stores all information

//prototype values
AddStore.prototype.hoursOpen = 15;

AddStore.prototype.getRandomCustomers = function() {
  var randomvalue = (this.minHourlyCustomers + Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)).toFixed();
  return randomvalue;
};

AddStore.prototype.getPurchasedPerHour = function() {
  var purchasedPerHour = [];
  for (var i = 0; i < this.hoursOpen; i++) {
    var customersPerHour = this.getRandomCustomers();
    purchasedPerHour[i] = (this.averagePurchasedPerSale * customersPerHour);
    this.purchasedPerHour = purchasedPerHour[i];
  }
};

AddStore.prototype.getSimulatedCookiesPerHour = function() {
  var cookiesPerHour = [];
  this.cookiesPerHour = [];
  console.log('Average: ' + this.averagePurchasedPerSale);
  for (var i = 0; i < this.hoursOpen; i++) {
    var customersPerHour = this.getRandomCustomers();
    var militaryTime = (i + 6);
    cookiesPerHour[i] = customersPerHour * this.averagePurchasedPerSale;
//can this be an array?
    this.cookiesPerHour[i] = cookiesPerHour;
  }
};

/*break out another function to keep hourly generated
customers the same between purchasedPerHour() and getSimulatedCookiesPerHour()
*/

//put the constructor and stores array in my separate stores.js file? please advise
function AddStore(name,
  minHourlyCustomers,
  maxHourlyCustomers,
  averagePurchasedPerSale
) {
  this.name = name;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averagePurchasedPerSale = averagePurchasedPerSale;
  this.purchasedPerHour = this.getPurchasedPerHour();
  this.simulatedCookiesPerHour = this.getSimulatedCookiesPerHour();
}

var stores = [
  new AddStore('FirstAndPike',23,65,6.3),
  new AddStore('SeaTacAirport',3,24,1.2),
  new AddStore('SeattleCenter',11,38,3.7),
  new AddStore('CapitolHill',20,38,2.3),
  new AddStore('Alki',2,16,4.6)
];

//make some functions using the DOM to add info to the document.
