class Ninja {
    constructor(name, health, speed=3, strength=3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    sayName() {
        console.log(`This ninjas name is ${this.name}`)
    }
    showStats() {
        console.log(`This ninjas name is ${this.name}, he has a strength of ${this.strength}, speed of ${this.speed}, and health of ${this.health}`)
    }
    drinkSake() {
        this.health += 10
        console.log(`${this.name} drank some sake and now has ${this.health}`)
    }
}

class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10) {
        super(name, health, speed, strength)
        this.wisdom = wisdom
    }
    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

