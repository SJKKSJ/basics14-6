var fahrenheitToCelsiusMain = function (input) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// Day 1 Base Road Trip Cost

var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var calculateTotalFuelCost = function (tripLengthInMiles) {
  // Some code that calculates total fuel cost
  var fuelCost = (tripLengthInMiles / 9) * 2.2;
  return fuelCost;
};

var roadTripCostBaseMain = function (input) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  var distanceInMiles = convertKmToMiles(input);
  var myOutputValue = calculateTotalFuelCost(distanceInMiles);
  return myOutputValue;
};

// Day 1 Comfortable Road Trip Cost

var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// Day 1 More Comfortable Ice Machine

// total grams of icecube per guest= number of guest x 2 drinks x 4 ice cubes x 1.5g
var calculateTotalGrams = function (noofguest) {
  var totalGrams = noofguest * 2 * 4 * 1.5;
  return totalGrams;
};

// converting grams to pounds: total grams / 454
var convertGramsToPounds = function (totalGrams) {
  var totalPounds = totalGrams / 454;
  return totalPounds;
};

// output how long machine is run by Pounds / 5
var calculateMachineRuntime = function (totalPounds) {
  var totalHours = totalPounds / 5;
  return totalHours;
};

var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var totalGrams = calculateTotalGrams(input);
  var totalPounds = convertGramsToPounds(totalGrams);
  var totalHours = calculateMachineRuntime(totalPounds);
  return totalHours;
};

//

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
