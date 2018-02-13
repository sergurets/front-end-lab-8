var number, userNumb, prize, arr, max, status, maxprize, curPrize;
prize = 0;
maxprize = 10;
arr = [Math.floor(maxprize), Math.floor(maxprize / 2), Math.floor(maxprize / 4)];
max = 5;
var game = confirm('Do you want to play a game?');
if (game) {
  while (game) {
    status = "";
    number = Math.floor(Math.random() * (max + 1));
    for (var i = 0; i < 3; i++) {
      userNumb = prompt("Enter a number from 0 to " + max + "\nAttempts left: " + i + "\nTotal prize: " + prize + "$" + "\nPossible prize on current attempt: " + arr[i] + "$", "");
      if (userNumb === null) {
        break;
      }
      if (userNumb.length == 0) {
        status = "";
      } else if (number == userNumb) {
        prize = prize + arr[i];
		curPrize = arr[i];
        maxprize = 3 * maxprize;
        arr = [Math.floor(maxprize), Math.floor(maxprize / 2), Math.floor(maxprize / 4)];
        max = max * 2;
        status = 'win';
        break;
      } else {
        status = "";
      }
    }
    if (status) {
      console.log("You win " + curPrize + "$");
      game = confirm("Do you want to play again?");
	  if(!game) {console.log("Thank you for a game. Your prize is " + prize+ "$");}	  
    } else {
      prize = 0;
      maxprize = 10;
      arr = [Math.floor(maxprize), Math.floor(maxprize / 2), Math.floor(maxprize / 4)];
      max = 5;
      console.log("Thank you for a game. Your prize is " + prize+ "$");
      game = confirm("Do you want to play again?");
    }
  }
} else {
  console.log("You did not become a millionaire")
}
