//stores all information

//prototype values
AddStore.prototype.hoursOpen = 15;

AddStore.prototype.getRandomCustomers = function() { //generate random customers
  var randomvalue = (this.minHourlyCustomers + Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)).toFixed();
  return randomvalue;
};
//this should also be an array...add for loop
AddStore.prototype.getSimulatedPurchasedPerHour = function() { //avg cookies purchasedPerSale * customersPerHour
  return (this.averagePurchasedPerSale * this.getRandomCustomers());
};

AddStore.prototype.getSimulatedCookiesPerHour = function() {
  var hour = [];
  for (var i = 0; i < this.hoursOpen; i++) {
    var customerCount = this.getRandomCustomers();
    var time = (i + 6);
    hour[i] = customerCount * this.averagePurchasedPerSale;
    this.cookiesPerHour = hour;
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
  this.purchasedPerHour = this.getSimulatedPurchasedPerHour();
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
//gets the element with id of 'store-locations'
var storeLocationsContainer = document.getElementById('store-locations');
console.log(storeLocationsContainer);
for (var i = 0; i < stores.length; i++) {
  store = stores[i];
  createNewRow(storeLocationsContainer, store);
}

function createNewRow(container, store) {
  var newRow = document.createElement('tr');
  console.log(newRow);
  var newNameCell = document.createElement('td');
  console.log(newNameCell);
  newNameCell.textContent = store.name;
  newRow.appendChild(newNameCell);

  //addCellsForHours(newRow); //check that this is right
  storeLocationsContainer.appendChild(newRow);
}

function addCellsForHours(row) {
  for (j = 0; j = stores[i].hoursOpen; j++) {
    var hourCell = document.createElement('td');
    time = (j + 6);
    if (time < 12) {
      console.log(time);
      hourCell.textContent = time + 'am';
    }
    if (time >= 12) {
      time = (time % 12);
      console.log(time);
      hourCell.textContent = time + 'pm';
    }
    row.appendChild(hourCell);
  }
}
