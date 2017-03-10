
      var divisibility = function(userInput) {
        if (userInput % 3 === 0) {
        return "ping";
      } else if (userInput % 5 === 0) {
        return "pong";
      }
      };



$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    var output = divisibility(userInput);
    var userInput = parseInt($("#userInput").val());

    var total = 0;
    for (index = 1; index <= userInput; index += 1) {
      total += 1;

      if (index % 3 === 0) {
      $("#output").append("ping");
    } else if (index % 5 === 0) {
      $("#output").append("pong");
    } else if ((index % 3 === 0) && (index % 5 === 0)) {
      $("#output").append("pingpong");
    };


      $("#output").append("<li>" + total + "</li>");
      // $("#output").text(output);
      console.log(output);

    }






  });
});
