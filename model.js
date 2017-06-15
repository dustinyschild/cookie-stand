//stores all information

//prototype values
AddStore.prototype.hoursOpen = 15;

AddStore.prototype.getRandomCustomers = function() { //generate random customers
  var randomvalue = (this.minHourlyCustomers + Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers));
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
    hour[i] = (customerCount * this.averagePurchasedPerSale).toFixed(2);
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

var tableHeader = document.getElementById('table-header');
var headerRow = document.createElement('tr');
tableHeader.appendChild(headerRow);

var storeBox = document.createElement('td');
storeBox.textContent = 'Store';
headerRow.appendChild(storeBox);

for (var i = 0; i < stores[0].hoursOpen; i++) {
  var timesRow = document.createElement('td');
  var time = (i + 6);
  if (time < 12) {
    timesRow.textContent = time + 'am';
  }
  if (time === 12) {
    timesRow.textContent = time + 'pm';
  }
  if (time > 12) {
    timesRow.textContent = (time % 12) + 'pm';
  }
  headerRow.appendChild(timesRow);
}
var totalsBox = document.createElement('td');
totalsBox.textContent = 'Totals';
headerRow.appendChild(totalsBox);
console.log(tableHeader);

var tableBody = document.getElementById('table-body');

for (var i = 0; i < stores.length; i++) {
  var storeRow = document.createElement('tr');
  tableBody.appendChild(storeRow);
  var storedData = document.createElement('td');
  storedData.textContent = stores[i].name;
  storeRow.appendChild(storedData);

  for (var j = 0; j < stores[i].hoursOpen; j++) {
    storeData = document.createElement('td');
    storeData.textContent = stores[i].cookiesPerHour[j];
    storeRow.appendChild(storeData);
  }

  var totalsData = document.createElement('td');
  var totalCookies = 0;
  for (j = 0; j < stores[i].hoursOpen; j++) {
    totalCookies = totalCookies + stores[i].cookiesPerHour[j];
    console.log(stores[i].cookiesPerHour[j]);
  }
  console.log(totalCookies);
  totalsData.textContent = totalCookies;
  storeRow.appendChild(totalsData);
}

console.log(tableBody);
//gets the element with id of 'store-locations'
/*var storeLocationsContainer = document.getElementById('store-locations');
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

window.addEventListener('click', submitClick());

function submitClick() {
  getNewstoreInfo();
  new AddStore(storeName, minHourlyCustomers, maxHourlyCustomers, averagePurchasedPerSale);
  createNewRow(storeLocationsContainer, );
}

function getNewstoreInfo() {
  var storeName = document.querySelector('input[name = "storeName"]');
  var minHourlyCustomers = document.querySelector('input[name = "storeName"]');
  var maxHourlyCustomers = document.querySelector('input[name = "storeName"]');
  var averagePurchasedPerSale = document.querySelector('input[name = "storeName"]');

}
*/
