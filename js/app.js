// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  $("#board").on("click", function() {
    box.one("click", play);


  });

  var box = $(".box");

  var x = "X";
  var o = "O";


  var count = 0;

  function play() {
    if(count % 2 === 0) {
      $(this).text(x);
      count++;
    } else {
      $(this).text(o);
      count++;
    }
  }


});


// Counts clicks
// function countClicks(event){
//   counter += 1;
//   console.log("clicked " + counter + " times.");
// }

var player = "human";
    var game = false;
    var used = new Array(10);
    var mat = new Array(10);
    var humansTurn = false;
    var GameAvailable = false;
    var totalMoves = 0;


        $('#a1').click(mark("1", 5));
        $('#a2').click(mark("2", 5));
        $('#a3').click(mark("3", 5));
        $('#a4').click(mark("4", 5));
        $('#a5').click(mark("5", 5));
        $('#a6').click(mark("6", 5));
        $('#a7').click(mark("7", 5));
        $('#a8').click(mark("8", 5));
        $('#a9').click(mark("9", 5));


    function users(who) // initialize everything
    {
        for (var i = 1; i <= 9; i++) {
            used[i] = false;
            mat[i] = 0;
        }
        GameAvailable = true;
        humansTurn=false;
        player = "human";
        if (who == 1) {
            player = "computer";
            // compChoice();
        }
        else {
            humansTurn = true;
        }

            playGame(player);
    }

    function resetAll() {
        var bb = "#a";
        game = false;
        totalMoves = 0;
        humansTurn = false;
        for (var i = 1; i <= 9; i++) {
            used[i] = false;
            mat[i] = 0;
            $(bb + i).empty();
        }
        $("#winner").empty();
    }

    //  MARK USERS CHOICE
    function mark(ind, abc) {
        console.log(" you clicked: " + ind + "  " + abc);
        if (used[ind] === false && humansTurn === true) // users choice
        {
            totalMoves++; // increase moves
            mat[ind] = abc; // mark players choice
            used[ind] = true;
            var id = "#a" + ind;
            var imgtag;

            imgtag = "<img src='ob.png'>";
            $(id).prepend(imgtag);
            humansTurn = false;
        }
        else {
            alert(" It is not your turn !!!");
            console.log(ind + " occuppied or not your turn " + ind);
        }
    }
    function markComputer(ind, abc) {
        console.log(" computer moved: " + ind + "  " + abc);
        if (used[ind] === false && humansTurn === false) // comp choice
        {
            totalMoves++; // increase moves
            mat[ind] = abc; // mark comp choice
            used[ind] = true;
            var id = "#a" + ind;
            var imgtag;

            imgtag = "<img src='xb.png'>";
            $(id).prepend(imgtag);
        }
        else {
            alert(" It is not computers turn !!!");
        }
    }

    function compChoice() {
        if (humansTurn == false) {
            var index;
            while (true) {
                index = Math.floor((Math.random() * 9) + 1);
                if (used[index] === false) // random choice for computer
                {
                    console.log(" computers index: " + index);
                    break;
                }
            }
            markComputer(index, 1);
            humansTurn = true;
        }
        else{
            alert("Computer get crazy , extra move applied");
        }
    }


     function  playGame(player)
    {
        if(player=="computer")
        {
            compChoice(); // comp moves first
        }
    }

    function et() {
        var win = checkWinner();
        // 0 for human
        // 1 for computer
        // 2 for draw
        // 3 no winners yet
        if (win === 0) // checks winner
        {
            $("#winner").html("You Win!");
        }
        else if (win === 1) {
            $("#winner").html("You Lose!");
        }
        else if (win === 1) {
            $("#winner").html("Draw!");

            //  resetAll();
        }
    }


    function checkWinner() {
        var lt = 15;
        if (mat[1] + mat[2] + mat[3] === 15 ||
                mat[1] + mat[5] + mat[9] === 15 ||
                mat[1] + mat[4] + mat[7] === 15 ||
                mat[7] + mat[8] + mat[9] === 15 ||
                mat[3] + mat[5] + mat[7] === 15 ||
                mat[3] + mat[6] + mat[9] === 15 ||
                mat[4] + mat[5] + mat[6] === 15 ||
                mat[2] + mat[5] + mat[8] === 15) {
            return 0; // human
        }
        else if (mat[1] + mat[2] + mat[3] === 3 ||
                mat[1] + mat[5] + mat[9] === 3 ||
                mat[1] + mat[4] + mat[7] === 3 ||
                mat[7] + mat[8] + mat[9] === 3 ||
                mat[3] + mat[5] + mat[7] === 3 ||
                mat[3] + mat[6] + mat[9] === 3 ||
                mat[4] + mat[5] + mat[6] === 3 ||
                mat[2] + mat[5] + mat[8] === 3) {
            return 1; // for computer
        }
        else if (counter !== 9) { // not finished
            return 3;
        }
        else {
            return 2; // it is a draw
        }

    }
