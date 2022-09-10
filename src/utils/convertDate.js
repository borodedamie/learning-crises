export const convertDate = (str) => {
    let date = new Date(str)
    return date.toDateString()
}