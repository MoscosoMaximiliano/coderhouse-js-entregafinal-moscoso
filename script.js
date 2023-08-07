const GetRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const playerClasses = [
    {
        name: "Human",
        stats: {
            Strength: GetRandomValue(6, 10),
            Defense: GetRandomValue(6, 10),
            MagicPower: GetRandomValue(1, 6),
            MagicDefense: GetRandomValue(3, 7),
            Speed: GetRandomValue(4, 9),
            Luck: GetRandomValue(1, 5)
        },
        evolutions: ["Warrior", "Rogue", "Warlock"]
    },
    {
        name: "Elf",
        stats: {
            Strength: GetRandomValue(1, 6),
            Defense: GetRandomValue(1, 5),
            MagicPower: GetRandomValue(6, 10),
            MagicDefense: GetRandomValue(4, 9),
            Speed: GetRandomValue(7, 11),
            Luck: GetRandomValue(2, 7)
        },
        evolutions: ["Warrior", "Rogue", "Warlock"]
    },
]

window.onload = () => {
    LoadData()
}

const LoadData = () => {
    playerClasses.forEach((playerClass, i) => {
        let container = document.createElement("div")
        container.className = "swiper-slide"

        let name = document.createElement("h2")
        name.textContent = playerClass.name
        container.appendChild(name)

        for (const value in playerClass.stats) {
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
        }
        container.appendChild(button)

        document.getElementById("swiper-container").appendChild(container)
    })

    
}


