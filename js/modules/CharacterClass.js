export class PlayerClass {
    constructor (name, birthday, stats, evolutions, portrait = "") {
        this.name = name,
        this.birthday = birthday
        this.stats = stats,
        this.evolutions = evolutions
        this.portrait = portrait
    }

    Attack = () => {
        alert("Attacking")
    }

    Defense = () => {
        alert("Defending")
    }
}