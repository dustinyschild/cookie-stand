//stores all information

//prototype values
AddStore.prototype.hoursOpen = 15;

AddStore.prototype.getRandomCustomers = function() { //generate random customers
  var randomvalue = (this.minHourlyCustomers + Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)).toFixed();
  return randomvalue;
};

AddStore.prototype.getPurchasedPerHour = function() { //avg cookies purchasedPerSale * customersPerHour
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

console.log(stores);

var storeLocationsContainer = document.getElementById('store-locations');

for (var i = 0; i < stores.length; i++) {
  addRow();
}

function addRow() {
  var newRow = document.createElement('tr');

  newNameCell = document.createElement('td');
  newNameCell.textContent = store.name;
}
