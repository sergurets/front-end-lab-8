const model = {
    currentPerson: {},
    allPersons: [
        {
            name: 'Lily Butler',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/1.jpg'
        }, {
            name: 'Waller Perry',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/1.jpg'
        }, {
            name: 'Tammi Donovan',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/2.jpg'
        }, {
            name: 'Doreen Flowers',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/3.jpg'
        }, {
            name: 'Price Pace',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/4.jpg'
        }, {
            name: 'Larson Maldonado',
            score: 1,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/5.jpg'
        }, {
            name: 'Berg Bolton',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/2.jpg'
        }, {
            name: 'Mack Lott',
            score: 3,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/6.jpg'
        }, {
            name: 'Rosanna Mcleod',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/7.jpg'
        }, {
            name: 'Rosalie Rice',
            score: 1,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/8.jpg'
        }, {
            name: 'Virginia Buchanan',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/3.jpg'
        }, {
            name: 'Lorna Stein',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/9.jpg'
        }, {
            name: 'Rosalie Steele',
            score: 3,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/4.jpg'
        }, {
            name: 'Wilcox Boyd',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/10.jpg'
        }, {
            name: 'Ollie Rice',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/11.jpg'
        }
    ]
};
var defaultPerson = model.allPersons.concat();
var allPerson = model.allPersons.concat();
var buttons = ["#sortUpName", "#sortDownName", "#sortUpScore", "#sortDownScore"];

const control = {
  init: function() {
    sortView.init();
    sortView.render();
    listView.init();
    listView.render();
    scoresView.init();
    scoresView.render();
    profileView.init();
  },
  getAllNames: function() {
    return allPerson.map(el => el.name);
  },
  getAllScores: function() {
    return allPerson.map(el => el.score);
  },
  setCurrentPerson: function(index) {
    model.currentPerson = allPerson[index];
    this.viewCurrentProfile();
  },
  getCurrentPerson: function() {
    return model.currentPerson;
  },
  viewCurrentProfile: function() {
    profileView.render();
  },
  setCurrentPersonScore: function(value) {
    model.currentPerson.score = value;
    profileView.render();
    scoresView.render();
  }
};

const listView = {
  init: function() {
    this.$container = $('.names');
    this.handleClicks();
  },
  render: function() {
    let template = control.getAllNames().reduce((acc, cur, i) => {
      return acc += `<li>${cur}</li>`;
    }, '');
    this.$container.html(template);
  },
  handleClicks: function() {
    this.$container.on('click', 'li', function(e) {
      let currentIndex = $(e.target).index();
      control.setCurrentPerson(currentIndex);
    });
  }
};

const scoresView = {
  init: function() {
    this.$container = $('.scores');
    this.handleClicks();
  },
  render: function() {
    let template = control.getAllScores().reduce((acc, cur) => {
      return acc += `
                <li>
                    <span>${cur}</span>
                    <input class="hidden score-input" type="text" value="${cur}">
                </li>
            `
    }, '');
    this.$container.html(template);
  },
  handleClicks: function() {
    this.$container.on('click', 'li', function(e) {
      let $currentLi = $(e.target);
      let $currentSpan = $currentLi.find('span');
      let $currentInput = $currentLi.find('input.score-input');
      let currentIndex = $currentLi.index();
      if (!$currentInput.is('.hidden')) {
        return false;
      }
      control.setCurrentPerson(currentIndex);
      $currentSpan.addClass('hidden');
      $currentInput.removeClass('hidden').focus();
    });
    this.$container.on('focusout .score-input', function(e) {
      let newScore = $(e.target).val();
      control.setCurrentPersonScore(newScore);
    });
  }
};

const profileView = {
  init: function() {
    this.$container = $('.profile');
  },
  render: function() {
    let currentPerson = control.getCurrentPerson();
    let template = `
            <img src="${currentPerson.photoUrl}">
            <h3>${currentPerson.name}</h3>
            <p>Score:${currentPerson.score}</p>
        `
    this.$container.html(template);
  }
};

const sortView = {
  init: function() {
    this.$container = $('.sort-controls');
  },
  render: function() {
    let template = `<li>Name<sup id="sortUpName">&#9650</sup><sub id="sortDownName">&#9660</sub></li>
		<li>Score<sup id="sortUpScore">&#9650</sup><sub id="sortDownScore">&#9660</sub></li>`;
    this.$container.html(template);
    this.handleClicks();
  },
  handleClicks: function() {
    buttons.forEach(addClick);
    function addClick(e) {
      $(e).click(function() {
        if ($(this).css("color") === "rgb(114, 114, 114)") {
          sortView.defaultFilter();
          $(this).css("visibility", "visible")
          $(this).css("color", "#00BCD4");
          switch (e) {
            case "#sortUpName":
              allPerson.sort(sortView.sortUpName);
              $("#sortDownName").css("visibility", "hidden")
              break;
            case "#sortDownName":
              allPerson.sort(sortView.sortDownName);
              $("#sortUpName").css("visibility", "hidden")
              break;
            case "#sortUpScore":
              allPerson.sort(sortView.sortUpScore);
              $("#sortDownScore").css("visibility", "hidden")
              break;
            case "#sortDownScore":
              allPerson.sort(sortView.sortDownScore);
              $("#sortUpScore").css("visibility", "hidden")
              break;
          }
        } else {
          sortView.defaultFilter();
        }
        listView.render();
        scoresView.render();
      });
    };
  },
  defaultFilter: function() {
    buttons.forEach(function(e) {
      $(e).css("visibility", "visible");
      $(e).css("color", "#727272");
      allPerson = defaultPerson.concat();
    });
  },
  sortUpName: function(a, b) {
    return a.name < b.name;
  },
  sortDownName: function(a, b) {
    return sortView.sortUpName(b, a);
  },
  sortUpScore: function(a, b) {
    return a.score - b.score;
  },
  sortDownScore: function(a, b) {
    return sortView.sortUpScore(b, a);
  }
};
control.init();

