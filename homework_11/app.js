var rootNode = document.getElementById("root");

function rend(arr) {
  var result = '';
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].folder) {
      result = result + ` <li class="folder"><span ><i class="material-icons">&#xE2C7;</i>${arr[i].title}</span>`;
      if (!arr[i].children) {
        result = result + `<p class='empty'>Folder is empty</p>`
      }
    } else {
      result = result + `<li  class="file"><span><i class="material-icons">&#xE24D;</i>${arr[i].title}</span>`;
    }
    if (arr[i].children) {
      result = result + `<ul class="hidden">${rend(arr[i].children)}</ul>`
    }
    result = result + `</li>`;
  }
  result = result + `</li>`;
  return result;
}
/*render catalog*/
var tree = document.createElement("ul");
tree.innerHTML = rend(structure);
rootNode.appendChild(tree);
var b = document.getElementsByTagName('span');
for (var j = 0; j < b.length; j++) {
  if (b[j].parentNode.className != "file") {
    b[j].addEventListener("click", click);
  }
  else{b[j].addEventListener("click", clickfile);}
}

function click() {
  if ((this.nextElementSibling.style.display == 'none') || (this.nextElementSibling.style.display == '')) {
    this.nextElementSibling.style.display = 'block';
    this.querySelector("i").innerHTML = '<i class="material-icons">&#xE2C8;</i>';
  } else {
    this.nextElementSibling.style.display = 'none';
    this.querySelector("i").innerHTML = '<i class="material-icons">&#xE2C7;</i>';
  }
}
function clickfile(){
}
