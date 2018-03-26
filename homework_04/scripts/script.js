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
// Task 2
function Warrior(obj) {
  this.name = obj.name;
  this.attack = obj.attack;
  this.hitpoints = obj.hitpoints;
  this.totalHitpoints = obj.hitpoints;
  this.getHitpoints = function() {
    return this.hitpoints
  };

  this.setHitpoints = function(val) {
    if (val < this.totalHitpoints) {
      this.hitpoints = val;
    } else {
      this.hitpoints = this.totalHitpoints
    }
  };

  this.getTotalHitpoints = function() {
    return this.totalHitpoints
  };

  this.setTotalHitpoints = function(val) {
    this.setTotalHitpoints = val;
  };

  this.getAttack = function() {
    return this.attack;
  };

  this.setAttack = function(val) {
    this.attack = val;
  };

  this.fight = function(opp) {
    if (!opp.isAlive()) {
      console.log(`${opp.name} is killed`);
    } else {
      if (opp.counterDefence === true) {
        opp.hitpoints = opp.hitpoints;
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
  };
  this.isAlive = function() {
    return this.hitpoints > 0;
  };
  this.killOpp = function(opp) {
  }
}

function Champion() {
  this.counterDefence = false;
  Warrior.apply(this, arguments);
  this.heal = function() {
    this.hitpoints = this.hitpoints + 5;
    if (this.hitpoints > this.totalHitpoints) {
      this.hitpoints = this.totalHitpoints
    }
  }
  this.defence = function() {
    this.counterDefence = true;
    this.totalHitpoints++;
  }
  this.killOpp = function(opp) {
    this.attack++;
  }
}
Champion.prototype = Object.create(Warrior.prototype);

function Monster() {
  this.counterDefence = false;
  this.enrageCounter = 0;
  Warrior.apply(this, arguments);
  this.enrage = function() {
    this.enrageCounter = 2;
  };
  this.fury = function() {
    if (this.hitpoints > 5) {
      this.attack = this.attack + 2;
      this.hitpoints = this.hitpoints - 5;
      this.totalHitpoints = this.totalHitpoints - 5;
    } else {
      console.log(`The ${this.name} does not have enough hitpoints to fury`)
    }
  };
  this.killOpp = function(opp) {
    this.totalHitpoints = this.totalHitpoints + Math.floor(0.1 * opp.totalHitpoints);
    this.hitpoints = this.hitpoints + Math.floor(0.25 * opp.totalHitpoints);
  }
}
Monster.prototype = Object.create(Warrior.prototype);