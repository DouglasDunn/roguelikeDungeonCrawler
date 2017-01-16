class Player {
  constructor() {
    this.health = 100;
    this.attack = 10;
    this.experienceLeft = 100;
    this.level = 1;
  }

  increaseHealth() {
    this.health += 50;
  }

  decreaseHealth(monster) {
    var randomAttack = Math.ceil(Math.random() * 5) + monster.attack;
    this.health -= randomAttack;
  }

  increaseAttack() {
    this.attack += 20;
  }

  decreaseExperienceLeft() {
    this.experienceLeft -= 10;
  }

  resetExperienceLeft() {
    this.experienceLeft = 100;
  }

  incrementLevel() {
    this.level++;
  }
}

module.exports = Player;
