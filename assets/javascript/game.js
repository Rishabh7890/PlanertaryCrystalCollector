//Create variables for wins, losses and the random targetNumber between 19 and 120 to be displayed
var wins = 0;
var losses = 0;
var $targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
// Using JQuery get the randomly generated value on the document
$("#targetNumber").text($targetNumber);
// create variable to keep track of Player' score
var counter = 0;
//create array of the values each crystal will be worth. Each of the values will be random in the range 1-12.
var ran1 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var ran2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var ran3 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var ran4 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var numberOptions = [ran1, ran2, ran3, ran4];
//Create variables for each image on HTML. Add same class to all 4 images but different images and value from numberOptions array. Append new image and values to respective divs on HTML
var rubyImage = $("<img>");
rubyImage.addClass("crystal-image");
rubyImage.attr("src", "https://www.rgpros.com/assets/images/Buttons/Swarovski-Rhinestones-FlatBack.png");
rubyImage.attr("data-crystalValue", numberOptions[0]);
$("#ruby").append(rubyImage);

var saphImage = $("<img>");
saphImage.addClass("crystal-image");
saphImage.attr("src", "https://i-cdn.phonearena.com/images/article/56413-thumb/After-Apple-Samsung-and-LG-might-be-exploring-sapphire-crystal-displays-too.jpg");
saphImage.attr("data-crystalValue", numberOptions[1]);
$("#saphire").append(saphImage);

var emeraldImage = $("<img>");
emeraldImage.addClass("crystal-image");
emeraldImage.attr("src", "https://www.gemselections.in/upload/category/1525082394columbian-emerald.jpg");
emeraldImage.attr("data-crystalValue", numberOptions[2]);
$("#emerald").append(emeraldImage);

var diamondImage = $("<img>");
diamondImage.addClass("crystal-image");
diamondImage.attr("src", "http://www.lucysmilesaway.com/wp-content/uploads/enhanced-natural-diamonds-1-74-carat-weight-round-loose-natural-diamonds-150x150.jpg");
diamondImage.attr("data-crystalValue", numberOptions[3]);
$("#diamond").append(diamondImage);
// Create a newGame function which sets counter back to 0, changes the target number and displays it on the document, remove previous random values assigned to each crystal image and generate new random values between 1 and 12 and then reassign.
function newGame() {
  counter = 0;
  $targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
  $("#targetNumber").text($targetNumber);
  rubyImage.removeAttr("data-crystalValue", numberOptions[0]);
  saphImage.removeAttr("data-crystalValue", numberOptions[1]);
  emeraldImage.removeAttr("data-crystalValue", numberOptions[2]);
  diamondImage.removeAttr("data-crystalValue", numberOptions[3]);
  console.log(numberOptions[0],numberOptions[1],numberOptions[2],numberOptions[3]);
  
  numberOptions[0] = Math.floor(Math.random() * (12 - 1 + 1) + 1);
  numberOptions[1] = Math.floor(Math.random() * (12 - 1 + 1) + 1);
  numberOptions[2] = Math.floor(Math.random() * (12 - 1 + 1) + 1);
  numberOptions[3] = Math.floor(Math.random() * (12 - 1 + 1) + 1);

  rubyImage.attr("data-crystalValue", numberOptions[0]);
  $("#ruby").append(rubyImage);
  saphImage.attr("data-crystalValue", numberOptions[1]);
  $("#saphire").append(saphImage);
  emeraldImage.attr("data-crystalValue", numberOptions[2]);
  $("#emerald").append(emeraldImage);
  diamondImage.attr("data-crystalValue", numberOptions[3]);
  console.log(numberOptions[0],numberOptions[1],numberOptions[2],numberOptions[3]);
  $("#diamond").append(diamondImage);
  $("#score").text(0);
}
// add on click event for each time any of the crystals are clicked.
$(".crystal-image").on("click", function () {

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  counter += crystalValue;

  $("#score").text(counter);

  if (counter === $targetNumber) {
    wins++;
    $("#wins").text(wins);
    newGame();


  } else if (counter > $targetNumber) {
    losses++;
    $("#losses").text(losses);
    newGame();

  }
})

newGame();


// CURRENT ERRORS WITH CODE: WHEN A WIN IS ACHIEVED LOSSES GOES AWAY ON DOCUMENT
