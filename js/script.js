import { PlayerClass } from "./modules/CharacterClass.js"
import { ToastifyMessage } from "./modules/Toastify.js"
import { GetRandomDate, GetRandomValue } from "./modules/utils.js"
import { LoadData, clearContentTable, CreateNewClass } from "./modules/UILoader.js"

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
    LoadData(playerClasses)
    document.getElementById("btnCreateClass").addEventListener("click", CreateNewClass)
}

