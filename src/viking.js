// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {return `${this.name} has received ${damage} points of damage`}
        else {return `${this.name} has died in act of combat`}
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health > 0) {return `A Saxon has received ${damage} points of damage`}
        else {return `A Saxon has died in combat`}
    }
}

// War
class War {
    vikingArmy = []
    saxonArmy = []
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        let vikingSoldier = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        let saxonSoldier = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let resultOfAttack = saxonSoldier.receiveDamage(vikingSoldier.strength)
        if (saxonSoldier.health <= 0) {this.saxonArmy.splice(this.saxonArmy.indexOf(saxonSoldier),1)}
        return resultOfAttack
    }
    saxonAttack() {
        let vikingSoldier = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
        let saxonSoldier = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
        let resultOfAttack = vikingSoldier.receiveDamage(saxonSoldier.strength)
        if (vikingSoldier.health <= 0) {this.vikingArmy.splice(this.vikingArmy.indexOf(vikingSoldier),1)}
        return resultOfAttack
    }
    attack(armyAttacker, armyAttacked) {
        let soldierAttacker = this.armyAttacker[Math.floor(Math.random()*this.armyAttacker.length)]
        let soldierAttacked = this.armyAttacked[Math.floor(Math.random()*this.armyAttacked.length)]  
        let resultOfAttack = soldierAttacked.receiveDamage(soldierAttacker.strength)
        if (soldierAttacked.health <= 0) {this.armyAttacked.splice(this.armyAttacked.indexOf(soldierAttacked),1)}
        return resultOfAttack
    }
    showStatus() {
        if (this.saxonArmy.length == 0) {return "Vikings have won the war of the century!"}
        if (this.vikingArmy.length == 0) {return "Saxons have fought for their lives and survived another day..."}
        if (this.saxonArmy.length >= 1 || this.vikingArmy.length >= 1) {return "Vikings and Saxons are still in the thick of battle."}
    }
}
