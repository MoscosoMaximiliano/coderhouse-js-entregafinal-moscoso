import { ChangePage } from "./modules/utils.js"
window.onload = () => {
    let playerData = window.localStorage.getItem("player")

    if(playerData === null) {
        ChangePage()
    }
    

    playerData = JSON.parse(playerData)

    console.log(playerData);

    LoadDataPlayer(playerData)
}

const LoadDataPlayer = (playerData) => {
    // TODO: Need better improvements!
    document.getElementById("playerClassName").value = playerData.name
    document.getElementById("playerClassBirthday").value = playerData.birthday
    document.getElementById("playerClassDefense").value = playerData.stats.defense
    document.getElementById("playerClassMagicDefense").value = playerData.stats.magicDefense
    document.getElementById("playerClassStrength").value = playerData.stats.strength
    document.getElementById("playerClassLuck").value = playerData.stats.luck
    document.getElementById("playerClassMagicPower").value = playerData.stats.magicPower

    playerData.evolutions.forEach((evolution) => {
        let evolutionElement = document.createElement("li")
        evolutionElement.textContent = evolution
        document.getElementById("playerClassEvolutions").appendChild(evolutionElement)
    })

}

document.getElementById("resetButton").addEventListener("click", () => {
    window.localStorage.removeItem('player') 
    ChangePage()
})