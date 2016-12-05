// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  $("#board").on("click", function() {
    box.one("click", play)


  });

  var box = $(".box");

  var x = "X";
  var o = "O";


  var count = 0;

  function play() {
    if(count % 2 === 0) {
      $(this).text(x);
    } else {
      $(this).text(0);
    }
  }

  // function markX() {
  //   //document.css(background-image: x picture)
  //   console.log("X working");
  // }
  //
  // function markO() {
  //   console.log("O working");
  //
  // }

});
