// Day 1 Base Fahrenheit to Celsius

// Enter Fahrenheit then convert to Celsius
// Celcius = (Fahrenheit-32) x 5/9
var fahrenheitToCelsiusMainHelper = function (fahrenheit) {
  var celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

var fahrenheitToCelsiusMain = function (input) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var myOutputValue = fahrenheitToCelsiusMainHelper(input);
  return myOutputValue;
};

// Day 1 Base Road Trip Cost

// Converting KM into Miles
var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

// Calculating the Ferrari fuel cost according to the trip miles
var calculateTotalFuelCost = function (tripLengthInMiles) {
  // Some code that calculates total fuel cost
  var fuelCost = (tripLengthInMiles / 9) * 2.2;
  return fuelCost;
};

var roadTripCostBaseMain = function (input) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  // Calling the formula for converting the input trip length to miles
  var distanceInMiles = convertKmToMiles(input);
  // Calling the fuel cost formula to calculate the road trip cost
  var myOutputValue = calculateTotalFuelCost(distanceInMiles);
  return myOutputValue;
};

// Day 1 Comfortable Road Trip Cost

// Converting KM into Miles
var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

// Calculating fuel cost accd to the trip miles
var calculateTotalFuelCostForComfortable = function (
  tripLengthInMiles,
  costPerLitreOfFuel
) {
  // Some code that calculates total fuel cost
  var fuelCost = (tripLengthInMiles / 9) * costPerLitreOfFuel;
  return fuelCost;
};

// Calculating Trip Savings
var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var distanceInMiles = convertKmToMiles(input);
  // difference in the fuel price for Ferrai and Train is 0.2
  var savingsInFuel = calculateTotalFuelCostForComfortable(
    distanceInMiles,
    0.2
  );
  return savingsInFuel;
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

// Day 1 More Comfortable Beer Order

// avg no. of customers per day - 2 pints per visit
// half barrel sized kegs needed per quarter
// half barrel keg equivalent to 124 pints of beer

// total pints of beer in a quarter = no. of customer * 2 * daysInQtr
var calculateTotalPints = function (customers) {
  // how many weeks in a qtr, then how many days in a qtr
  var daysInQtr = (52 / 4) * 7;
  var totalPintsPerQtr = customers * 2 * daysInQtr;
  return totalPintsPerQtr;
};

// total half barrel kegs needed per quarter = total pints of beer in a qtr / 124
var convertPintsToKegs = function (totalPintsPerQtr) {
  var totalKegsPerQtr = totalPintsPerQtr / 124;
  return totalKegsPerQtr;
};

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var totalPintsPerQtr = calculateTotalPints(input);
  var totalKegsPerQtr = convertPintsToKegs(totalPintsPerQtr);
  return totalKegsPerQtr;
};

// Day 1 More Comfortable Cost of Cellular Data

// 19.99 for 50GB
// Data GB entered -> how much paid?
// if exceed 50 GB, auto addt 50GB purchased
// Math.ceil() rounds a number up to nearest integer

// from the no. of data used per month
var calculateCostOfDataUsedPerMonth = function (noOfGBUsedPM) {
  // calculate the no. of plans purchased
  var noOfDataPlans = Math.ceil(noOfGBUsedPM / 50);
  // total cost of data plan paid for the month
  var totalDataPlanBill = noOfDataPlans * 19.99;
  return totalDataPlanBill;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  // find the avg cost per GB, from the total cost paid per month divide by amount of GB used
  var averageCostPerGB = calculateCostOfDataUsedPerMonth(input) / input;
  return averageCostPerGB;
};
