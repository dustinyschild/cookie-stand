//stores all information
var stores = [

  FirstAndPike = {
    hoursOpen: 14,
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    averagePurchasedPerSale: 6.3,
    customersPerHour: function() { //generate random customers
      return this.minHourlyCustomers + Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers);
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
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    averagePurchasedPerSale: 1.2,
    customersPerHour: function() { //generate random customers
      return this.minHourlyCustomers + Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers);
    },
    purchasedPerHour: function() { //avg cookies purchasedPerSale * customersPerHour
      return this.averagePurchasedPerSale * this.customersPerHour;
    },//avg cookies purchasedPerHour * customersPerHour
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
    }
  },

  SeattleCenter = {
    hoursOpen: 14,
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    averagePurchasedPerSale: 3.7,
    customersPerHour: function() { //generate random customers
      return this.minHourlyCustomers + Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers);
    },
    purchasedPerHour: function() { //avg cookies purchasedPerSale * customersPerHour
      return this.averagePurchasedPerSale * this.customersPerHour;
    },//avg cookies purchasedPerHour * customersPerHour
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
    }
  },

  CapitolHill = {
    hoursOpen: 14,
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    averagePurchasedPerSale: 2.3,
    customersPerHour: function() { //generate random customers
      return this.minHourlyCustomers + Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers);
    },
    purchasedPerHour: function() { //avg cookies purchasedPerSale * customersPerHour
      return this.averagePurchasedPerSale * this.customersPerHour;
    },//avg cookies purchasedPerHour * customersPerHour
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
  }
},

  Alki = {
    hoursOpen: 14,
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    averagePurchasedPerSale: 4.6,
    customersPerHour: function() { //generate random customers
      return this.minHourlyCustomers + Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers);
    },
    purchasedPerHour: function() { //avg cookies purchasedPerSale * customersPerHour
      return this.averagePurchasedPerSale * this.customersPerHour;
    },//avg cookies purchasedPerHour * customersPerHour
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
  }

];

////////////////////////////////////////////////////////////////////////////////////////////////////////////
