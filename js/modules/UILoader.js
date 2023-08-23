import { ToastifyMessage } from "./Toastify.js"
export const LoadData = (playerClasses) => {
    // Creation of page content
    playerClasses.forEach((playerClass, i) => {
        let container = document.createElement("div")
        container.className = "swiper-slide"

        LoadClassContent(playerClass, container, i)

        document.getElementById("swiper-container").appendChild(container)
    })

    ToastifyMessage("Classes Loaded")
}
const LoadClassContent = (playerClass, container, i) => {
    let name = document.createElement("h2")
    name.textContent = playerClass.name
    container.appendChild(name)

    let birthday = document.createElement("h3")
    birthday.textContent = `Birthday: ${playerClass.birthday}`
    container.appendChild(birthday) 

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

    let evolutions = document.createElement("h3")
    evolutions.textContent = "Evolutions: \n"
    playerClass.evolutions.map((evolution) => {
        evolutions.textContent += `${evolution}, `
    })

    container.appendChild(evolutions)
    
    let button = document.createElement("button")
    button.classList.add("btn")
    button.textContent = "Select"

    button.onclick = () => {
        alert(`You select ${playerClass.name}`)

        const name = prompt("Enter your name")

        playerClass.name = name

        //? TODO: Load a table with the selected class
    }

    container.appendChild(button)
    
}

export const clearContentTable = () => {
    document.getElementById("swiper-container").replaceChildren()
}

export const CreateNewClass = () => {
    console.log("Creating New Class")

    let name, birthday, strength, defense, magicPower, magicDefense, speed, luck

    //! Need Validation
    name = prompt("Name of the class")
    birthday = prompt("Birthday (e.x 12/03/2012)")
    alert("Now you going to setup the stats of you new class")
    strength = prompt("Enter the strength")
    defense = prompt("Enter the defense")
    magicPower = prompt("Enter the Magic Power")
    magicDefense = prompt("Enter the Magic Defense")
    speed = prompt("Enter the Speed")
    luck = prompt("Enter the luck")
    
    alert("Now can say the possible evolutions of the character (need to be separated with a 'comma' if has multiples evolutions")
    evolutions = prompt("Enter evolutions")
    evolutions = evolutions.split(",")
    
    playerClasses.push(new PlayerClass(name, birthday, {strength, defense, magicPower, magicDefense, speed, luck}, evolutions))

    clearContentTable()
    LoadData()
    ToastifyMessage("Added a new Class")
}

