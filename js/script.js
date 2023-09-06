import { LoadData, clearContentTable, CreateNewClass } from "./modules/UILoader.js"

import playerClasses from "../json/classes.json" assert {type: "json"}

window.onload = () => {
    let playerData =  window.localStorage.getItem("player")

    if(playerData === null){
        LoadData(playerClasses)

        document.getElementById("createClassForm").addEventListener("submit", CreateNewClass)
    } else {
        // TODO: Load data and enter the game
        window.location.href = "http://127.0.0.1:5500/mainGame.html"
    }
    
}

