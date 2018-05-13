angular.module('simpleApp', [])
  .controller('Ctrl', function($scope) {

    $scope.myFunction = function(data) {
      console.log(data)
    }
    $scope.update = function(post) {
      $scope.master = angular.copy(post);
      $scope.posts.push(post);
      $scope.post = angular.copy({});
    }

    $scope.edit = function(user) {
      var buttSave = document.getElementById("save");
      buttSave.style.display = "block";

      var element = document.getElementById("edit");

      var div = document.createElement('div');
      div.innerHTML = `<div>
      <label>Группа - Альбом<input id='title' type="text"  /></label><br />
      <label>Категории <input id='categories'  type="text"  /></label><br />
      <label>Рецензия <textarea id='description'  type="text" rows="10" cols="45" ></textarea></label><br />
      <label>Ссылка на изображение<input id='photo' type="text" /></label><br />
    </div>`
      element.insertBefore(div, element.children[0]);
      document.getElementById("title").defaultValue = user.title;
      document.getElementById("categories").defaultValue = user.categories;
      document.getElementById("description").defaultValue = user.description;
      document.getElementById("photo").defaultValue = user.photo;
      $scope.now = $scope.posts.indexOf(user);
    }

    $scope.editpost = function() {
      var buttSave = document.getElementById("save");
      var element = document.getElementById("edit");
      element.style.display = "block";
      buttSave.style.display = "block";
      var obj = {
        title: document.getElementById("title").value,
        categories: document.getElementById("categories").value,
        description: document.getElementById("description").value,
        photo: document.getElementById("photo").value
      }
      $scope.master = angular.copy(obj)
      $scope.posts.splice($scope.now, 1, obj)
      $scope.user = angular.copy({});
      document.getElementById("title").defaultValue = '';
      document.getElementById("categories").defaultValue = '';
      document.getElementById("description").defaultValue = '';
      document.getElementById("photo").defaultValue = '';
      buttSave.style.display = "none";
      element.style.display = "none";


    }

    $scope.posts = defaultPosts;
    $scope.defPosts = defaultPosts;
    $scope.master = {};
    $scope.now = {};
  });
