const GetRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class PlayerClass {
    constructor (name, stats, evolutions) {
        this.name = name,
        this.stats = stats,
        this.evolutions = evolutions
    }

    Attack = () => {
        alert("Attacking")
    }

    Defense = () => {
        alert("Defending")
    }
}

const playerClasses = [
    new PlayerClass("Human", 
        {
            Strength: GetRandomValue(6, 10),
            Defense: GetRandomValue(6, 10),
            MagicPower: GetRandomValue(1, 6),
            MagicDefense: GetRandomValue(3, 7),
            Speed: GetRandomValue(4, 9),
            Luck: GetRandomValue(1, 5)
        }, 
        ["Warrior", "Rogue", "Warlock"]
    ),

    new PlayerClass(
        "Elf", 
        {
            Strength: GetRandomValue(1, 6),
            Defense: GetRandomValue(1, 5),
            MagicPower: GetRandomValue(6, 10),
            MagicDefense: GetRandomValue(4, 9),
            Speed: GetRandomValue(7, 11),
            Luck: GetRandomValue(2, 7)
        }, 
        ["Warrior", "Rogue", "Warlock"]
    ),
]
window.onload = () => {
    LoadData()
}

const LoadData = () => {
    // Creation of page content
    playerClasses.forEach((playerClass, i) => {
        let container = document.createElement("div")
        container.className = "swiper-slide"

        let name = document.createElement("h2")
        name.textContent = playerClass.name
        container.appendChild(name)

        for (const value in playerClass.stats) {
            // Used for get the name and value on a object
            if (Object.hasOwn(value, i)) {
                let stat = document.createElement("h3")
                stat.textContent = `${value}: ${playerClass.stats[value]}`

                if (playerClass.stats[value] < 5)
                    stat.style.color = "red"
                else if (playerClass.stats[value] === 5)
                    stat.style.color = "black"
                else
                    stat.style.color = "green" 

                container.appendChild(stat)
            }
        }
        let button = document.createElement("button")
        button.textContent = "Select"
        button.onclick = () => {
            alert(`You select ${playerClass.name}`)

            const name = prompt("Enter your name")

            //? TODO: What can i do here?
        }
        container.appendChild(button)

        document.getElementById("swiper-container").appendChild(container)
    })

    
}
