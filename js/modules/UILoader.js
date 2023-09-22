import { ToastifyMessage } from "./Toastify.js"
import {ChangePage} from "./utils.js"
import {PlayerClass} from "./CharacterClass.js"
export const LoadData = (playerClasses) => {
    console.log("asd");
    // Creation of page content
    playerClasses.map((playerClass, index) => {
        let container = document.createElement("div")
        container.className = "swiper-slide"

        LoadClassContent(playerClass, container, index)

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
        window.localStorage.setItem("player", JSON.stringify(playerClass))

        ToastifyMessage("Class Selected, redirecting to new page")

        let changeScreen = setTimeout(() => {
            ChangePage()
            window.clearTimeout(changeScreen)
        }, 3000) // 3 seconds
    }

    container.appendChild(button)
    
}


export const CreateNewClass = (e) => {
    e.preventDefault()

    let formData = document.getElementById("createClassForm")

    let newPlayer = new PlayerClass(
        formData.elements["nameClass"].value,
        formData.elements["birthdayClass"].value,
        {
            "strength": formData.elements["strenghtClass"].value,
            "defense": formData.elements["defenseClass"].value,
            "magicPower": formData.elements["magicPowerClass"].value,
            "magicDefense": formData.elements["magicDefenseClass"].value,
            "speed": formData.elements["speedClass"].value,
            "luck": formData.elements["luckClass"].value,
        },
        EvolutionsList()
    )

    console.log(newPlayer);

    window.localStorage.setItem("player", JSON.stringify(newPlayer))
    
    ToastifyMessage("Created and selected character, redirecting to new page")

    let changeScreen = setTimeout(() => {
        ChangePage()
        window.clearTimeout(changeScreen)
    }, 3000) // 3 seconds
}

const EvolutionsList = () => {
    let containerEvolutions = document.getElementById("evolutionsClassHolder")
    let checkboxes = containerEvolutions.querySelectorAll('input[type="checkbox"]')
    
    let result = []

    checkboxes.forEach((item) => {
        if(item.checked) {
            result.push(item.value)
        }
    })

    return result
}

