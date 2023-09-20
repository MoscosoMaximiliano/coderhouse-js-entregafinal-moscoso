import { ToastifyMessage } from "./modules/Toastify.js"
import { LoadData, CreateNewClass } from "./modules/UILoader.js"
import { GetJsonData } from "./api/index.js"
import { ChangePage } from "./modules/utils.js"

window.onload = async () => {
    let playerData =  window.localStorage.getItem("player")

    if(playerData === null){
        try {
            playerData = await GetJsonData()
            LoadData(playerData)
        } catch (error) {
            ToastifyMessage("Error loading the Data")
        }
        

        document.getElementById("createClassForm").addEventListener("submit", CreateNewClass)
    } else {
        ChangePage()
    }
    
}