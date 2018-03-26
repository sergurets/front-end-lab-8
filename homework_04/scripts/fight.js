
function fighting(obj1, obj2) {
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
//fighting(beast, hunter);