
const GetRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const GetRandomDate = () => {
    let from = new Date("02/12/1888")
    let to = new Date()
    let date = new Date(
        from.getTime() + Math.random() * (to.getTime() - from.getTime())
    )

    console.log(date)

    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

class PlayerClass {
    constructor (name, birthday, stats, evolutions) {
        this.name = name,
        this.birthday = birthday
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
        GetRandomDate(),
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
        GetRandomDate(),
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
    document.getElementById("btnCreateClass").addEventListener("click", CreateNewClass)
}

const LoadData = () => {
    // Creation of page content
    playerClasses.forEach((playerClass, i) => {
        let container = document.createElement("div")
        container.className = "swiper-slide"

        LoadClassContent(playerClass, container, i)

        document.getElementById("swiper-container").appendChild(container)
    })

    ToastifyMessage("Classes Loaded")
}

const clearContentTable = () => {
    document.getElementById("swiper-container").replaceChildren()
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
    
    let button = document.createElement("button")
    button.classList.add("btn")
    button.textContent = "Select"

    button.onclick = () => {
        alert(`You select ${playerClass.name}`)

        const name = prompt("Enter your name")

        //? TODO: What can i do here?
    }

    container.appendChild(button)
    
}

const CreateNewClass = () => {
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


const ToastifyMessage = (msg) => {
    Toastify({
        text: msg,
        duration: 1000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
}