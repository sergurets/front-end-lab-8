n= Number(prompt("N"));
if ((n>20)||(!Number.isInteger(n))||(n<0)){console.log("Incorrect!");}
else {
	var str="\n";
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
	 
 

