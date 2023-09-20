export const GetRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
export const GetRandomDate = () => {
    let from = new Date("02/12/1888")
    let to = new Date()
    let date = new Date(
        from.getTime() + Math.random() * (to.getTime() - from.getTime())
    )

    console.log(date)

    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

export const ChangePage = () => {
    console.log(window.location.href)
    window.location.href = (window.location.host === "127.0.0.1:5500") ? 
    (window.localStorage.getItem("player") === null) ? "/" :
    "/mainGame.html" :
    (window.localStorage.getItem("player") === null) ? "/coderhouse-js-preentrega3-moscoso/mainGame.html" :
    "/coderhouse-js-preentrega3-moscoso/"
}