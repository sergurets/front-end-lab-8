n= Number(prompt("Enter a number from 1 to 20"));
if ((n>20)||(!Number.isInteger(n))||(n<1)){console.log("Incorrect!");}
else {
	var str="";
	var voidElement = "   ";
	var elem = "[~]";
	for (var i = 0; i<n; i++){
		for (var j = 1; j<(2*n); j++){
			if((j>=(n-i))&(j<=(n+i))) {str=str+elem;}
			else{str=str+voidElement;}
		 }   
		str=str+"\n"; 	 
		 }
	console.log(str);	
}
	 
 

