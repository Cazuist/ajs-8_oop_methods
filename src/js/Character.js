export default class Character {
  constructor(name, type) {
    this.checkParam(name, type);

    this.name = name;
    this.type = type;

    this.health = 100;
    this.level = 1;

    this.attack = this.getCharactersList()[type].attack;
    this.defence = this.getCharactersList()[type].defence;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      return;
    }
  }

  checkParam(name, type) {
    const list = this.getCharactersList();
    const types = Object.keys(list);

    if (typeof name !== 'string') {
      throw new Error('Имя персонажа должно быть строкой!');
    } else if (name.length < 2 || name.length > 10) {
      throw new Error('Имя персонажа должно быть не менее 2 и не более 10 символов!');
    } else if (this.constructor.name === 'Character' && !types.includes(type)) {
      throw new Error('Неизвестный тип персонажа!');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getCharactersList() {
    return {
      Bowman: { attack: 25, defence: 25 },
      Swordsman: { attack: 40, defence: 10 },
      Magician: { attack: 10, defence: 40 },
      Daemon: { attack: 25, defence: 25 },
      Undead: { attack: 40, defence: 10 },
      Zombie: { attack: 10, defence: 40 },
    };
  }
}
