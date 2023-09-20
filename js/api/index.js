export const GetJsonData = async() => {
    return await fetch("../../json/classes.json")
    .then(res => res.json())
    .then(data => {return data})
    .catch((err) => {
        console.error(err)
    })
}