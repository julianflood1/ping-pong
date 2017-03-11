var divisibility = function(number) {

  for (index = 1; index <= number; index ++) {
    if ((number % 3 === 0) && (number % 5 === 0)) {
    $("#output").append("<li> pingpong </li>");
  } else if (number % 5 === 0) {
    $("#output").append("<li> pong </li>");
  } else if (number % 3 === 0) {
    $("#output").append("<li> ping </li>");
  } else {
    $("#output").append("<li>" + number + "</li>");
  }
}
};


$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#userInput").val());

    divisibility(userInput);

  });
});
