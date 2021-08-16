// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(theDamage){
    this.health -= theDamage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health,strength);
    this.name = name;
  }
  receiveDamage(theDamage){
    super.receiveDamage(theDamage);
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
    return `${this.name} has received ${theDamage} points of damage`;
  }
  battleCry(){
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(theDamage){
    super.receiveDamage(theDamage);
    if (this.health <= 0) {
      return "A Saxon has died in combat";
    }
    return `A Saxon has received ${theDamage} points of damage`;
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  vikingAttack(){
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonVictim = this.saxonArmy[randomSaxon];
    let vikingAttacker = this.vikingArmy[randomViking];
    let damageDone = saxonVictim.receiveDamage(vikingAttacker.strength);
    if(saxonVictim.health <= 0){
      this.saxonArmy.splice(randomSaxon, 1);
    }
    return damageDone;
  }
  saxonAttack(){
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let vikingVictim = this.vikingArmy[randomViking];
    let saxonAttacker = this.saxonArmy[randomSaxon];
    let damageDone = vikingVictim.receiveDamage(saxonAttacker.strength);
    if(vikingVictim.health <= 0){
      this.vikingArmy.splice(randomViking, 1);
    }
    return damageDone;
  }
  showStatus(){
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    }
    else if(this.saxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    }
    return "Vikings and Saxons are still in the thick of battle.";
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
