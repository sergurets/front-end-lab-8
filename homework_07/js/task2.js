var number, userNumb, prize, arr, max, status;
prize = 0;
arr = [10, 5, 2];
max = 5;
var game = confirm('Do you want to play a game');
if(game){ 

while (game) {
  status="";	
console.log(status);  
  number = Math.floor(Math.random() * (max + 1));
  console.log(number);
  for (var i = 0; i < 3; i++) {
    userNumb = prompt("Enter a number from 0 to " + max + "\nAttempts left: " + i + "\nTotal prize: " + prize + "$" + "\nPossible prize on current attempt: " + arr[i] + "$","");
	console.log(userNumb);
    if (userNumb === null) {
      break;
    }
    console.log(userNumb);
	/*userNumb = Number(userNumb);*/
    if (number == userNumb) {
      prize = prize + arr[i];
      /*console.log("You win " + prize + "$");*/
      multiple(arr);
      max = max * 2;
	  status='win';
      console.log(arr, status);
      break;
    }
	else {status="";}
  }
  if(status) {console.log("You win " + prize + "$"); 
	  game = confirm("Do you want to play again?");}
  else {console.log("Thank you for a game. Your prize is " + prize);
	  game = confirm("Do you want to play again?");}
  
}

function multiple(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] * 3;
  }
}
}
else {console.log("You did not become a millionaire")}