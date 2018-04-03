http = {
  get: function(url) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.addEventListener("load", function() {
        if (xhr.status < 400)
          resolve(render(xhr.responseText));
        else
          reject(err(xhr.statusText));
      });
      xhr.addEventListener("error", function() {
        errNetwork();
      });
      xhr.send();
    });
  },

  post: function(url, requestuestBody) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(requestuestBody);
      xhr.addEventListener("load", function() {
        if (xhr.status < 400) {
          resolve(render_valid(xhr.responseText));
        } else {
          reject(err(xhr.statusText));
        }
      });
      xhr.addEventListener("error", function() {
        errNetwork();
      });
    });
  }
};
/*this functions overrided in task2.js*/
function errNetwork() {};
function render() {};
function render_valid() {};
function err() {};