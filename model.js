//stores all information
var stores = [
//break these out into functions!!
  FirstAndPike = {
    //add location
    //add contact information
    hoursOpen: 14,
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    averagePurchasedPerSale: 6.3,
    customersPerHour: function() { //generate random customers
      return (this.minHourlyCustomers + Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)).toFixed();
    },
    purchasedPerHour: function() { //avg cookies purchasedPerSale * customersPerHour
      return this.averagePurchasedPerSale * this.customersPerHour;
    },
    simulatedCookiesPerHour: function() {
      var hours = [];
      for (var i = 0; i < this.hoursOpen; i++) {
        var customerCount = this.customersPerHour();
        var time = (i + 6);
        hours[i] = customerCount * this.averagePurchasedPerSale;
        this.cookiesPerHour = hours;
        console.log(time);
        console.log(this.cookiesPerHour);
      }
    },
  },

  SeaTacAirport = {
    hoursOpen: 14,
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    averagePurchasedPerSale: 6.3,
    customersPerHour: function() { //generate random customers
      return (this.minHourlyCustomers + Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)).toFixed();
    },
    purchasedPerHour: function() { //avg cookies purchasedPerSale * customersPerHour
      return this.averagePurchasedPerSale * this.customersPerHour;
    },
    simulatedCookiesPerHour: function() {
      var hours = [];
      for (var i = 0; i < this.hoursOpen; i++) {
        var customerCount = this.customersPerHour();
        var time = (i + 6);
        hours[i] = customerCount * this.averagePurchasedPerSale;
        this.cookiesPerHour = hours;
        console.log(time);
        console.log(this.cookiesPerHour);
      }
    },
  },

  SeattleCenter = {
    hoursOpen: 14,
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    averagePurchasedPerSale: 6.3,
    customersPerHour: function() { //generate random customers
      return (this.minHourlyCustomers + Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)).toFixed();
    },
    purchasedPerHour: function() { //avg cookies purchasedPerSale * customersPerHour
      return this.averagePurchasedPerSale * this.customersPerHour;
    },
    simulatedCookiesPerHour: function() {
      var hours = [];
      for (var i = 0; i < this.hoursOpen; i++) {
        var customerCount = this.customersPerHour();
        var time = (i + 6);
        hours[i] = customerCount * this.averagePurchasedPerSale;
        this.cookiesPerHour = hours;
        console.log(time);
        console.log(this.cookiesPerHour);
      }
    },
  },

  CapitolHill = {
    hoursOpen: 14,
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    averagePurchasedPerSale: 6.3,
    customersPerHour: function() { //generate random customers
      return (this.minHourlyCustomers + Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)).toFixed();
    },
    purchasedPerHour: function() { //avg cookies purchasedPerSale * customersPerHour
      return this.averagePurchasedPerSale * this.customersPerHour;
    },
    simulatedCookiesPerHour: function() {
      var hours = [];
      for (var i = 0; i < this.hoursOpen; i++) {
        var customerCount = this.customersPerHour();
        var time = (i + 6);
        hours[i] = customerCount * this.averagePurchasedPerSale;
        this.cookiesPerHour = hours;
        console.log(time);
        console.log(this.cookiesPerHour);
      }
    },
  },

  Alki = {
    hoursOpen: 14,
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    averagePurchasedPerSale: 6.3,
    customersPerHour: function() { //generate random customers
      return (this.minHourlyCustomers + Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)).toFixed();
    },
    purchasedPerHour: function() { //avg cookies purchasedPerSale * customersPerHour
      return this.averagePurchasedPerSale * this.customersPerHour;
    },
    simulatedCookiesPerHour: function() {
      var hours = [];
      for (var i = 0; i < this.hoursOpen; i++) {
        var customerCount = this.customersPerHour();
        var time = (i + 6);
        hours[i] = customerCount * this.averagePurchasedPerSale;
        this.cookiesPerHour = hours;
        console.log(time);
        console.log(this.cookiesPerHour);
      }
    },
  },
];

//make some functions using the DOM to add info to the document.
