class Monster {
  constructor(multiplier) {
      this.health = 30 * multiplier;
      this.attack = 10 * multiplier;
  }

  decreaseHealth(player) {
    var randomAttack = Math.ceil(Math.random() * 5) + player.attack;
    this.health -= randomAttack;
  }
}

module.exports = Monster;
