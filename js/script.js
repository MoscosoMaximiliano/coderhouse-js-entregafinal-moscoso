import { LoadData, clearContentTable, CreateNewClass } from "./modules/UILoader.js"

import playerClasses from "../json/classes.json" assert {type: "json"}

window.onload = () => {
    let playerData =  window.localStorage.getItem("player")

    if(playerData === null){
        LoadData(playerClasses)

        document.getElementById("createClassForm").addEventListener("submit", CreateNewClass)
    } else {
        console.log(window.location.hostname);
        // TODO: Load data and enter the game
        if(document.location.host === "127.0.0.1:5500")
            window.location.href = "http://127.0.0.1:5500/mainGame.html"
        else
            window.location.href = "https://moscosomaximiliano.github.io/coderhouse-js-preentrega3-moscoso/mainGame.html"
    }
    
}

