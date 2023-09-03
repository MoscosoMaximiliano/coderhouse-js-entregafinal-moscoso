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