//stores all information

//prototype values
AddStore.prototype.hoursOpen = 15;

AddStore.prototype.getRandomCustomers = function() { //generate random customers
  var randomvalue = (this.minHourlyCustomers + Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)).toFixed();
  return randomvalue;
};

AddStore.prototype.getPurchasedPerHour = function() { //avg cookies purchasedPerSale * customersPerHour
  console.log('Average Purchased: ' + this.averagePurchasedPerSale);
  console.log('Customers Per Hour: ' + this.getRandomCustomers());
  console.log(this.averagePurchasedPerSale);
  return (this.averagePurchasedPerSale * this.getRandomCustomers());
};

AddStore.prototype.getSimulatedCookiesPerHour = function() {
  var hours = [];
  for (var i = 0; i < this.hoursOpen; i++) {
    var customerCount = this.getRandomCustomers();
    var time = (i + 6);
    hours[i] = customerCount * this.averagePurchasedPerSale;
    this.cookiesPerHour = hours;
  }
};

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
