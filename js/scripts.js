$(document).ready(function() {

  $("#formOne").submit(function(event) {
    $(".result").empty();
    var number = parseInt($("input#number").val());
    var initialValue = 1;
    for (var i = 1; i <= number; i++) {
      initialValue = initialValue * i;
    }
    $(".result").append(initialValue);

    event.preventDefault();
  });
});
