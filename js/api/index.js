export const GetJsonData = async() => {
    if(window.location.host === "127.0.0.1:5500") {
        return await fetch("../json/classes.json")
        .then(res => res.json())
        .then(data => {return data})
        .catch((err) => {
            console.error(err)
        })
    } else {
        return await fetch(`https://${window.location.host}/coderhouse-js-entregafinal-moscoso/json/classes.json`)
        .then(res => res.json())
        .then(data => {return data})
        .catch((err) => {
            console.error(err)
        })
    }
    
}