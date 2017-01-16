class BossMonster {
  constructor() {
      this.health = 400;
      this.attack = 40;
  }

  decreaseHealth(player) {
    var randomAttack = Math.ceil(Math.random() * 5) + player.attack;
    this.health -= randomAttack;
  }
}

module.exports = BossMonster;
