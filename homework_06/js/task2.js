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
  result = euro.toFixed(2) + " euros are equal " + eur_uah.toFixed(2) + " UAH, " + usd.toFixed(2) + " dollars are equal " + usd_uah.toFixed(2)  + " UAH, one euro is equal " + eur_usd.toFixed(2) + " dollars";
}
console.log(result);
