//stores all information

  /*store1 = {
    name: FirstAndPike,
    hoursOpen: 14,//move to prototype
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    averagePurchasedPerSale: 6.3,
    customersPerHour: getRandomCustomers(),
    purchasedPerHour: getPurchasedPerHour(),
    simulatedCookiesPerHour: getSimulatedCookiesPerHour()
  },

  store2 = {
    name: SeaTacAirport,
    hoursOpen: 14,
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24
    averagePurchasedPerSale: 1.2,
    customersPerHour: getRandomCustomers(),
    purchasedPerHour: getPurchasedPerHour(),
    simulatedCookiesPerHour: getSimulatedCookiesPerHour(),
  },

  store3 = {
    name: SeattleCenter,
    hoursOpen: 14,
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    averagePurchasedPerSale: 3.7,
    customersPerHour: getRandomCustomers(),
    purchasedPerHour: getPurchasedPerHour(),
    simulatedCookiesPerHour: getSimulatedCookiesPerHour(),
  },

  store4 = {
    name: CapitolHill,
    hoursOpen: 14,
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    averagePurchasedPerSale: 2.3,
    customersPerHour: getRandomCustomers(),
    purchasedPerHour: getPurchasedPerHour(),
    simulatedCookiesPerHour: getSimulatedCookiesPerHour(),
  },

  store5 = {
    name: Alki,
    hoursOpen: 14,
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    averagePurchasedPerSale: 4.6,
    customersPerHour: getRandomCustomers(),
    purchasedPerHour: getPurchasedPerHour(),
    simulatedCookiesPerHour: getSimulatedCookiesPerHour(),
  },*/

function getRandomCustomers() { //generate random customers
  return (this.minHourlyCustomers + Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)).toFixed();
}

function getPurchasedPerHour() { //avg cookies purchasedPerSale * customersPerHour
  return this.averagePurchasedPerSale * this.customersPerHour;
}

function getSimulatedCookiesPerHour() {
  var hours = [];
  for (var i = 0; i < this.hoursOpen; i++) {
    var customerCount = this.customersPerHour();
    var time = (i + 6);
    hours[i] = customerCount * this.averagePurchasedPerSale;
    this.cookiesPerHour = hours;
    console.log(time);
    console.log(this.cookiesPerHour);
  }
}

function AddStore(name,
  minHourlyCustomers,
  maxHourlyCustomers,
  averagePurchasedPerSale
) {
  this.name = name;
  this.hoursOpen = stores.prototype.hoursOpen;
  this.minHourlyCusomers = minHourlyCusomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averagePurchasedPerSale = averagePurchasedPerSale;
  this.customersPerHour = getRandomCustomers();
  this.purchasedPerHour = getPurchasedPerHour();
  this.simulatedCookiesPerHour = getSimulatedCookiesPerHour();
}

//prototype
stores.prototype.hoursOpen = 15;

var stores = [
  new AddStore(FirstAndPike,23,65,6.3),
  new AddStore(SeaTacAirport,3,24,1.2),
  new AddStore(SeattleCenter,11,38,3.7),
  new AddStore(CapitolHill,20,38,2.3),
  new AddStore(Alki,2,16,4.6)
];

//make some functions using the DOM to add info to the document.
