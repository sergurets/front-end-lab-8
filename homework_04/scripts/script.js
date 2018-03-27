// Task 1
function assign(object, def, opt) {
        for (var key1 in def) {
            for (var key2 in opt) {
                if (key1 === key2) {
                    object[key1] = opt[key2];
                } else {
                    object[key1] = def[key1];
                }
            }
        }
        return object
    }
	/*testing*/
var defaults = { width:100, height:100 };
var options = { width:150 };
var configs = assign({}, defaults, options); // -> {width: 150, height: 100}	
console.log(configs);

// Task 2
/*Warrior*/
function Warrior(obj) {
    this.name = obj.name;
    this.attack = obj.attack;
    this.hitpoints = obj.hitpoints;
    this.totalHitpoints = obj.hitpoints;
}

Warrior.prototype.fight = function(opp) {
    if (!opp.isAlive()) {
        console.log(`${opp.name} is killed`);
    } else {
        if (opp.counterDefence === true) {
            opp.counterDefence = false;
            if (this.enrageCounter > 0) {
                this.enrageCounter--;
            }
        } else {

            if (this.enrageCounter > 0) {
                opp.hitpoints = opp.hitpoints - 2 * this.attack;
                this.enrageCounter--;
            } else {
                opp.hitpoints = opp.hitpoints - this.attack;
            }
            if (!opp.isAlive()) {
                this.killOpp(opp);
                console.log(`${this.name} killed ${opp.name}`);
                opp.hitpoints = 0;
            }
        }
    }
}

Warrior.prototype.getHitpoints = function() {
    return this.hitpoints
};

Warrior.prototype.setHitpoints = function(val) {
    if (val < this.totalHitpoints) {
        this.hitpoints = val;
    } else {
        this.hitpoints = this.totalHitpoints;
    }
};

Warrior.prototype.getTotalHitpoints = function() {
    return this.totalHitpoints;
};

Warrior.prototype.setTotalHitpoints = function(val) {
    this.setTotalHitpoints = val;
};

Warrior.prototype.getAttack = function() {
    return this.attack;
};

this.setAttack = function(val) {
    this.attack = val;
};

Warrior.prototype.killOpp = function(opp) {
    if (this instanceof Champion) {
        this.attack++;
    } else if (this instanceof Monster) {
        this.totalHitpoints = this.totalHitpoints + Math.floor(0.1 * opp.totalHitpoints);
        this.hitpoints = this.hitpoints + Math.floor(0.25 * opp.totalHitpoints);
    }
}

Warrior.prototype.isAlive = function() {
    return this.hitpoints > 0;
};
/*Champion*/
function Champion() {
    Warrior.apply(this, arguments);
    this.counterDefence = false;
}

Champion.prototype = Object.create(Warrior.prototype);
Champion.prototype.constructor = Champion;
Champion.prototype.heal = function() {
    this.hitpoints = this.hitpoints + 5;
    if (this.hitpoints > this.totalHitpoints) {
        this.hitpoints = this.totalHitpoints;
    }
}

Champion.prototype.defence = function() {
    this.counterDefence = true;
    this.totalHitpoints++;
}
/*Monster*/
function Monster() {
    Warrior.apply(this, arguments);
    this.counterDefence = false;
    this.enrageCounter = 0;
    this.furyStatus = false;
}

Monster.prototype = Object.create(Warrior.prototype);
Monster.prototype.constructor = Monster;
Monster.prototype.enrage = function() {
    this.enrageCounter = 2;
};

Monster.prototype.fury = function() {
    if (this.hitpoints > 5) {
        this.furyStatus = true;
        this.attack = this.attack + 2;
        this.hitpoints = this.hitpoints - 5;
        this.totalHitpoints = this.totalHitpoints - 5;
    } else {
        console.log(`The ${this.name} does not have enough hitpoints to fury`)
    }
} 

/*testing*/
var hunter = new Champion({name: 'Rexxar', attack:10, hitpoints:60});
var beast = new Monster({name: 'KingKrush', attack:8, hitpoints:80});

hunter.fight(beast);
console.log(beast.getHitpoints()); // -> 70
beast.enrage();
hunter.fight(beast);
console.log(beast.getHitpoints()); // -> 60
beast.fight(hunter);
console.log(hunter.getHitpoints()); // -> 44
hunter.fight(beast);
console.log(beast.isAlive()); // -> true
console.log(hunter.getAttack()); // -> 10
console.log(hunter.getHitpoints()); // -> 44
hunter.fight(beast);
hunter.fight(beast);
hunter.fight(beast);
hunter.fight(beast);
hunter.fight(beast);
console.log(beast.isAlive()); // -> false
console.log(hunter.getAttack()); // -> 11
console.log(hunter.getHitpoints()); // -> 44
hunter.heal();
console.log(hunter.getHitpoints()); // -> 49


/*function fighting(obj1, obj2) {
  while (obj1.isAlive() & obj2.isAlive()) {
    fight(obj1, obj2);
    if (!obj2.isAlive()) {
      break;
    }
    fight(obj2, obj1);
    if (!obj1.isAlive()) {
      break;
    }
  }

  function fight(object1, object2) {
    if ((object1 instanceof Champion) & object1.hitpoints < object2.attack & object2.hitpoints > object1.attack) {
      heal(object1);
    } else if ((object1 instanceof Monster) & !(object1.furyStatus) & object2.hitpoints / object1.attack > (object1.hitpoints - 5) / object2.attack) {
      object1.fury();
      console.log(`${object1.name} is fury and has ${object1.getHitpoints()} hitpoints`);
      
    } else {
      object1.fight(object2);
      if (!object2.isAlive()) {
        return;
      }
      console.log(`${object1.name} hit ${object2.name}`);
    };
    
    console.log(`${object2.name} has ${object2.getHitpoints()} hitpoints`);
  }
  function heal(obj) {
    obj.heal();
    console.log(`${obj.name} restores hitpoints`);
  }
}
fighting(beast, hunter);

*/









/*hunter.fight(beast);
console.log(beast.getHitpoints()); // -> 70
beast.enrage();
hunter.fight(beast);
beast.getHitpoints(); // -> 60
beast.fury();
console.log('Hitpoints', beast.getHitpoints());
console.log('getAttack', beast.getAttack());

beast.fight(hunter);
hunter.heal();
console.log(hunter.getHitpoints());
hunter.defence();
beast.fight(hunter);
beast.fight(hunter);
beast.fight(hunter);
/*beast.fight(hunter);
beast.fight(hunter);
beast.fight(hunter);
beast.fight(hunter);
beast.fight(hunter);
beast.fight(hunter);
beast.fight(hunter);
beast.fight(hunter);
console.log(hunter.getHitpoints());
console.log(hunter.counterDefence);
console.log(hunter.getHitpoints()); // -> 44
hunter.setHitpoints(50); 
console.log(hunter.getHitpoints());
hunter.setHitpoints(100); 
console.log(hunter.getHitpoints());
console.log(beast.getHitpoints());
hunter.fight(beast);
hunter.fight(beast);
hunter.fight(beast);
hunter.fight(beast);


hunter.fight(beast);
beast.fury();
hunter.fight(beast);
console.log(beast.getHitpoints());
console.log(hunter.getAttack());*/