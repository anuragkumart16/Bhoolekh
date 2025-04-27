async function getPlaces() {
    const response = await fetch('https://bhoolekh.onrender.com/get_location_names')
    const data = await response.json()
    return data
}

export default getPlaces