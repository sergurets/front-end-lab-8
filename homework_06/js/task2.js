var buttonIP = document.getElementById('ip');
var loader1 = document.getElementById('loader1');
var loader2 = document.getElementById('loader2');
var warning = document.getElementById('warning');
var buttonValidat = document.getElementById('validate');
var result = document.getElementById('result');
var resultPOST = document.getElementById('resultPOST');
var resultGet;
var json;

function renderTable(obj) {
  loader1.style.display = "none";
  loader2.style.display = "none";
  if (obj.country) {

    result.innerHTML = `
	<table border="1" width="100%" cellpadding="5">
   <tr>
    <td>ip</td>
    <td>${obj.ip}</td>
   </tr>
   <tr>
    <td>country</td>
    <td>${obj.country_name}</td>
   </tr>
   <tr>
    <td>city</td>
    <td>${obj.city}</td>
  </tr>
     <tr>
    <td>latitude</td>
    <td>${obj.latitude}</td>
  </tr>
     <tr>
    <td>longitude</td>
    <td>${obj.longitude}</td>
  </tr>
  </table>`;
    result.style.display = "block";
    buttonValidat.style.display = "block";
  } else {
    warning.style.display = "block";
    setTimeout(function() {
      warning.style.display = "none"
    }, 2000)
  }
}
buttonIP.addEventListener('click', function() {

  var adrrIP = document.getElementById("myText").value;
  if (ValidateIPaddress(adrrIP)) {
	result.style.display = "none";
	loader1.style.display = "block";
	resultPOST.style.display = "none";
	loader2.style.display = "none";
	buttonValidat.style.display = "none";
    http.get(`https://ipapi.co/${adrrIP}/json/`);
    
	
    return false;
  }
})
buttonValidat.addEventListener('click', function() {
  loader2.style.display = "block";
  resultPOST.style.display = "none";
  http.post("https://shrouded-garden-94580.herokuapp.com/", resultGet);
})

function render_valid(respon) {
  loader2.style.display = "none";
  resultPOST.innerHTML = respon;
  resultPOST.style.display = "block";
}

function render(respon) {
  renderTable(JSON.parse(respon));
  resultGet = respon;
}

function err(respon) {
  loader2.style.display = "none";
  loader1.style.display = "none";
  new Error("Request failed: " + respon);
}

function errNetwork() {
  loader2.style.display = "none";
  loader1.style.display = "none";
  new Error("Network error");
}

function ValidateIPaddress(ipaddress) {
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
    return (true)
  }
  warning.style.display = "block";
  setTimeout(function() {
    warning.style.display = "none"
  }, 2000)
  return (false)
}
