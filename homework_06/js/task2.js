var euro, usd, ua_eur, ua_usd, result, eur_uah, eur_usd;
euro = Number(prompt("How many EURO do you want to exchange?"));
usd = Number(prompt("How many USD do you want to exchange?"));
/*Exchange rates*/
ua_eur = 33.85;
ua_usd = 27.46;
/*************/
eur_usd = ua_eur / ua_usd;
eur_uah = euro * ua_eur;
usd_uah = ua_usd * usd;
if (isNaN(eur_uah) || isNaN(usd_uah) || euro < 0 || usd < 0) {
  result = "Incorrect data";
} else {
  result = round(euro) + " euros are equal " + round(eur_uah) + " UAH, " + round(usd) + " dollars are equal " + round(usd_uah)  + " UAH, one euro is equal " + round(eur_usd)  + " dollars";
}
console.log(result);
function round(a){
	if(a.toFixed(2) > Math.floor(a)){return a.toFixed(2)}
	else {return Math.floor(a)}
}