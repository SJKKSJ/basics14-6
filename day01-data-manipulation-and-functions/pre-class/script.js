var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles; // return the function's output value
}; // {Code Block}

var main = function (input) {
  var myOutputValue = "wow hello";
  return myOutputValue;
};
// input parameter of main is what the user types in the input box
// return value of main is what gets displayed in the output box

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue =
    "Hello " + input + "! That's a beautiful name, what does it mean?";
  return myOutputValue;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var distanceInKm = input;
  var distanceInMiles = distanceInKm * 0.62;
  var myOutputValue = `Hi! ${input} kilometers is equal to ${distanceInMiles} miles. `;
  return myOutputValue;
};

var functionsExampleMain = function (distanceInKm) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// find out the distance to Tokyo: Distance = Speed * Time aka 200kph * 2h = 400km
// Train 1 time taken = Train 2 time taken meaning 2h= ?h + delay
// Train 2 need to travel 400km in 2h - delay, speed = 400km / (2h-delay)

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
