'use strict';
//stores all information

//prototype values
AddStore.prototype.hoursOpen = 15;
AddStore.prototype.getRandomCustomers = function() { //generate random customers
  var randomvalue = (this.minHourlyCustomers + Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers));
  return randomvalue;
};
AddStore.prototype.getSimulatedCookiesPerHour = function() {
  var hour = [];
  for (var i = 0; i < this.hoursOpen; i++) {
    var customerCount = this.getRandomCustomers();
    hour[i] = (customerCount * this.averagePurchasedPerSale);
    this.cookiesPerHour = hour;
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
  this.simulatedCookiesPerHour = this.getSimulatedCookiesPerHour();
}

var stores = [
  new AddStore('First And Pike',23,65,6.3),
  new AddStore('SeaTac Airport',3,24,1.2),
  new AddStore('Seattle Center',11,38,3.7),
  new AddStore('Capitol Hill',20,38,2.3),
  new AddStore('Alki',2,16,4.6)
];

var listContainer = document.getElementById('storelist');

var newStoreLabel = document.createElement('div');
listContainer.appendChild(newStoreLabel);

var store = document.createElement('h3');
newStoreLabel.appendChild(store);

var hourlyInfoContainer = document.createElement('ul');
newStoreLabel.appendChild(hourlyInfoContainer);

var newHourlyInfo = document.createElement('li');
hourlyInfoContainer.appendChild(newHourlyInfo);

(function(){
  var tableHeader = document.getElementById('table-header');
  var headerRow = document.createElement('tr');
  tableHeader.appendChild(headerRow);

  var storeBox = document.createElement('td');
  storeBox.textContent = 'Store';
  headerRow.appendChild(storeBox);

//header row
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
})();
var tableBody = document.getElementById('table-body');
for (var i = 0; i < stores.length; i++) {
  addRowToTable(stores[i]);
}

function addRowToTable(store) {
  var storeRow = document.createElement('tr');
  tableBody.appendChild(storeRow);
  var storedData = document.createElement('td');
  storedData.textContent = stores[i].name;
  storeRow.appendChild(storedData);

  for (var j = 0; j < stores[i].hoursOpen; j++) {
    storedData = document.createElement('td');
    var storeDataPoint = (stores[i].cookiesPerHour[j]).toFixed(2);
    storedData.textContent = storeDataPoint;
    storeRow.appendChild(storedData);
  }

  var totalsData = document.createElement('td');
  var totalCookies = 0;
  for (j = 0; j < stores[i].hoursOpen; j++) {
    totalCookies = (totalCookies) + (stores[i].cookiesPerHour[j]);
  }
  totalCookies = totalCookies.toFixed(2);
  totalsData.textContent = totalCookies;
  storeRow.appendChild(totalsData);
}

var submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', checkFieldValues);
//change the function to a check if fields are empty function//
function checkFieldValues(){
  var storeName = document.querySelector('input[name = "storeName"]').value;

  var minHourlyCustomers = document.querySelector('input[name= "minCustomers"]').value;
  minHourlyCustomers = parseFloat(minHourlyCustomers);

  var maxHourlyCustomers = document.querySelector('input[name = "maxCustomers"]').value;
  maxHourlyCustomers = parseFloat(maxHourlyCustomers);

  var averagePurchasedPerSale = document.querySelector('input[name = "avgPurchased"]').value;
  averagePurchasedPerSale = parseFloat(averagePurchasedPerSale);

  if (typeof storeName !== 'string' || storeName === '') {
    //display error message
    alert('Invalid input! Please try again.');
    console.log('Error: Name input');
    //add a highlight to the box somehow? add a red asterisk?
    return;
  }
  if (minHourlyCustomers === NaN) {
    alert('Invalid input! Please try again.');
    console.log('Error: Min Hourly input');
    return;
  }
  if (maxHourlyCustomers === NaN) {
    alert('Invalid input! Please try again.');
    console.log('Error: Max Hourly input');
    return;
  }
  if (averagePurchasedPerSale === NaN) {
    return;
  }
  submitClick(storeName, minHourlyCustomers, maxHourlyCustomers, averagePurchasedPerSale);
}

function submitClick(storeName, minHourlyCustomers, maxHourlyCustomers, averagePurchasedPerSale) {

  stores[stores.length] = new AddStore(storeName, minHourlyCustomers, maxHourlyCustomers, averagePurchasedPerSale);
  addRowToTable(stores[stores.length]);
  console.log(stores);
}

console.log(stores);
