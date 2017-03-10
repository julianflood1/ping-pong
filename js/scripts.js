$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("#userInput").val());
    var total = 0;
    for (index = 1; index <= userInput; index += 1) {
      total += 1;



      $("#output").append("<li>" + total + "</li>");

      if (total % 3 === 0) {
        userInput.append("ping");
      }

      console.log(total);
    }






  });
});
