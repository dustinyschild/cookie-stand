//stores all information

var stores = [
  new AddStore('FirstAndPike',23,65,6.3),
  new AddStore('SeaTacAirport',3,24,1.2),
  new AddStore('SeattleCenter',11,38,3.7),
  new AddStore('CapitolHill',20,38,2.3),
  new AddStore('Alki',2,16,4.6)
];

//prototype values
AddStore.prototype.hoursOpen = 15;

AddStore.prototype.getRandomCustomers = function() { //generate random customers
  randomvalue = (this.minHourlyCustomers + Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)).toFixed();
  console.log(this.minHourlyCustomers);
  console.log(this.maxHourlyCustomers);
  console.log(randomvalue);
  return randomvalue;
};

AddStore.prototype.getPurchasedPerHour = function() { //avg cookies purchasedPerSale * customersPerHour
  return this.averagePurchasedPerSale * this.customersPerHour;
};

AddStore.prototype.getSimulatedCookiesPerHour = function() {
  var hours = [];
  for (var i = 0; i < this.hoursOpen; i++) {
    var customerCount = this.customersPerHour();
    var time = (i + 6);
    hours[i] = customerCount * this.averagePurchasedPerSale;
    this.cookiesPerHour = hours;
    console.log(time);
    console.log(this.cookiesPerHour);
  }
};

function AddStore(name,
  minHourlyCustomers,
  maxHourlyCustomers,
  averagePurchasedPerSale
) {
  this.name = name;
  this.minHourlyCusomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averagePurchasedPerSale = averagePurchasedPerSale;
  this.customersPerHour = this.getRandomCustomers();
  this.purchasedPerHour = this.getPurchasedPerHour();
  this.simulatedCookiesPerHour = this.getSimulatedCookiesPerHour();
}

//make some functions using the DOM to add info to the document.
