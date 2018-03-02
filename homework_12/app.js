var rootNode = document.getElementById("root");
renderAll();

function rend(arr) {
  var result = '<div class="thumbnails"><h1>Most popular tanks</h1><div class="all">';
  for (var i = 0; i < arr.length; i++) {
    result = result + `<div id="${i}" class="allTanks tooltip"><span class="tooltiptext">Click to details</span><img class="tanks" src=${arr[i].preview} alt="${arr[i].model}"/>
		<p><img src=${arr[i].country_image} alt="${arr[i].country}"/><span>${arr[i].level}</span> ${cutText(arr[i].model)}</p>
		</div>`
  }
  result = result + "</div></div>"
  return result
}

function cutText(name) {
  var str = name;
  if (str.length < 15) {
    return str;
  } else {
    str = str.split('');
    str.length = 11;
    return str.join('') + "..."
  }
}

function renderAll() {
  rootNode.innerHTML = rend(tanks);
  var divClk = rootNode.querySelectorAll('div.allTanks');
  for (var i = 0; i < divClk.length; i++) {
    divClk[i].addEventListener('click', function() {
      location.hash = this.id;
    })
  }
}

window.addEventListener('hashchange', function() {
  if (location.hash != "") {
    root.innerHTML = tank(tanks, location.hash.substr(1))
  } else {
    renderAll()
  }
});

function tank(arr, i) {
  var result = `<div class="tank-details"><h1><img src=${arr[i].country_image} alt=""/> <span>${arr[i].model}</span> (level ${arr[i].level})</h1>
<h2>Preview</h2><div class="flex"><img src = ${arr[i].preview} alt=""/>`
  result = result + '<table><caption>Characteristic</caption>';
  var obj = arr[i].details;
  for (var key in obj) {
    result = result + `<tr><td class="key">${data(key)}</td><td>${obj[key]}</d></tr>`
  }
  result = result + "</table></div><span onclick='backTo()'>Back to list view</span></div>"
  return result;
}

function data(str) {
  return str.split("_").join(" ");
}

function backTo() {
  location.hash = "";
}
