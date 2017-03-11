var divisibility = function(number) {

  for (index = 1; index <= number; index ++) {
    if ((index % 3 === 0) && (index % 5 === 0)) {
    $("#output").append("<li> pingpong </li>");
  } else if (index % 5 === 0) {
    $("#output").append("<li> pong </li>");
  } else if (index % 3 === 0) {
    $("#output").append("<li> ping </li>");
  } else {
    $("#output").append("<li>" + index + "</li>");
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
