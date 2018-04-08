$("#play").click(function () {
	$("#play").slideUp(300, "swing");
	setTimeout(function () {
		$(".flex").css({
			"display": "flex"
		});
	}, 500)

	$("#lineblack").addClass("line");
	$("#linewhite").removeClass("line");
	$('#playagain, .message').css({
		'display': 'none'
	});

	var n = 0;
	var obj = {};
	var id;


	function circleObj() {
		for (var key in obj) {
			obj[key] = document.getElementById(`${key}`).className;
		}

	}

	function check(el) {
		var cls = el.className;
		var currClass = cls.split(' ')[2];
		//alert( currClass  )
		var arr = [];
		var id = +el.id;
		var start;
		var end = 8;


		if (id % 14 === 0 || id % 15 === 0 || id % 16 === 0 || id < 4) {
			start = 0;
		} else {
			start = -4;
		}

		console.log(cls, id);

		function win() {
			console.log('Win');
			$('.message').html(`<p>${currClass} win!</p> <input type="button" onclick="again()" value="Play Again?">`);
			$(".circle").css({
				'display': 'none'
			});
			$('.message').fadeIn(300);

		}

		if (row()) {
			win()
		} else if (column()) {
			win()
		}
		//diag2();
		// diag1();

		function row() {
			var start = -3;
			var end = 3;
			if (id % 14 === 0) {
				start = 0;
			}
			if ((id - 1) % 14 === 0) {
				start = -1;
			}
			if ((id - 2) % 14 === 0) {
				start = -2;
			}
			if ((id - 3) % 14 === 0) {
				start = -3;
			}
			if (id < 4) {
				start = -id;
			}

			if ((id + 1) % 14 === 0) {
				end = 0;
			}
			if ((id + 2) % 14 === 0) {
				end = 1;
			}
			if ((id + 3) % 14 === 0) {
				end = 2;
			}

			console.log(start, end);
			var arr = [];
			for (var i = start; i <= end; i++) {
				{
					console.log(id + i, document.getElementById(`${id+i}`).className)
				}
				if (document.getElementById(`${id+i}`).className.split(' ').indexOf(currClass) > -1) {
					arr.push(1)
				} else {
					arr.push(0)
				}
			}
			str = arr.join('');
			return str.indexOf('1111') > -1
			/*) {
			      console.log('Win');
			      $('.message').html(`${currClass} win!`);
				  $('#playagain, .message').css({'display':'block'});
				  $(".circle").fadeOut();
			    }*/
			console.log('row', str, currClass);
		}
		/****/
		function column() {
			var start = -3;
			var end = 3;
			if (id < 14) {
				start = 0;
			} else if (id < 28) {
				start = -1;
			} else if (id < 42) {
				start = -2;
			}
			if (id > 153) {
				end = -2;
			} else if (id > 167) {
				end = -1;
			} else if (id > 181) {
				end = 0;
			}


			console.log(start, end);
			var arr = [];
			for (var i = start; i <= end; i++) {
				{
					console.log(id + i, document.getElementById(`${id+i*14}`).className)
				}
				if (document.getElementById(`${id+i*14}`).className.split(' ').indexOf(currClass) > -1) {
					arr.push(1)
				} else {
					arr.push(0)
				}
			}
			str = arr.join('');
			return (str.indexOf('1111') > -1)
		}


		function diag1() {
			var start = -3;
			var end = 3;

			if (id < 14 || id % 14 === 0) {
				start = 0;
			} else if (id > 14 & ((id - 1) % 14 === 0) & id < 29) {
				console.log('14');
				start = -1;
			} else if (id > 29 & (id - 2) % 14 === 0) {
				console.log('29');
				start = -2;
			}
			if (id > 153) {
				end = -2;
			} else if (id > 167) {
				end = -1;
			} else if (id > 181) {
				end = 0;
			}


			console.log(start, end);
			var arr = [];
			for (var i = start; i <= end; i++) {
				{
					console.log(id + i, document.getElementById(`${id+i*15}`).className)
				}
				if (document.getElementById(`${id+i*15}`).className.split(' ').indexOf(currClass) > -1) {
					arr.push(1)
				} else {
					arr.push(0)
				}
			}
			str = arr.join('');
			if (str.indexOf('1111') > -1) {
				console.log('Win');
				$('#playagain, .message').css({
					'display': 'block'
				});
				$('.message').html(`${currClass} win!`);
			}
			console.log('diag', str, currClass);
		}

		/* function diag1() {
    arr = [];
    for (var i = start; i < start + 8; i++) {
      {  }
      if (document.getElementById(`${id+i*13}`).className === cls) {
        arr.push(1)
      } else {
        arr.push(0)
      }
    }
    str = arr.join('');
    if (str.indexOf('1111') > -1) {
      console.log('Win');
      $('.message').html(`${currClass} win!`);
    }

  }
*/
		function diag2() {
			arr = [];
			for (var i = start; i < start + 8; i++) {
				{ /*console.log('id', document.getElementById(`${id+i}`).className)*/ }
				if (document.getElementById(`${id+i*14}`).className === cls) {
					arr.push(1)
				} else {
					arr.push(0)
				}
			}
			str = arr.join('');
			if (str.indexOf('1111') > -1) {
				console.log('Win');
				$('#playagain, .message').css({
					'display': 'block'
				});
				$('.message').html(`${currClass} win!`);
			}

		}

	}

	function renderMain() {
		var result = '';
		for (var i = 0; i < 15; i++) {

			for (var j = 0; j < 15; j++) {
				result = result + `<div class="cell" ></div>`
			}
		}
		console.log(obj);

		setTimeout(function () {
			$('.main').css({
				'border-top': '1px solid black'
			});

			$('.main').html(result);

		}, 500)

	}

	function renderCircle() {
		var result = '';
		for (var i = 0; i < 14; i++) {

			for (var j = 0; j < 14; j++) {
				id = n++;
				obj[id] = '';
				result = result + `<div class=circle id=${id}></div>`
			}

		}
		$('.round').html(result);

	}

	renderMain();
	renderCircle();

	function makeCounter() {
		var currentCount = 0;

		function counter() {
			return currentCount++;
		}

		counter.get = function () {
			return currentCount;
		};


		return counter;
	}

	var counter = makeCounter();

	$('.circle').click(function () {

		if (this.className.indexOf(' white') != -1 || this.className.indexOf(' black') != -1) {
			console.log('5454', this.className);
		} else {

			counter();
			console.log('class', this.className, this.id);
			var circleClass;
			if (counter.get() % 2 == 0) {
				circleClass = 'white';
				$("#linewhite").removeClass("line");
				$("#lineblack").addClass("line");
			} else {
				circleClass = 'black';
				$("#lineblack").removeClass("line");
				$("#linewhite").addClass("line");
			}

			$(this).addClass(circleClass);
		}

		circleObj();
		check(this);

	});

	$('.circle').hover(
		function () {
			if (counter.get() % 2 == 0) {
				$(this).addClass("Hoverblack")
			} else {
				$(this).addClass("Hoverwhite");
			}
		},
		function () {
			if (counter.get() % 2 == 0) {
				$(this).removeClass("Hoverblack")
			} else {
				$(this).removeClass("Hoverwhite");
			}
		}
	);
})

function again() {
	$("#play").click();
}