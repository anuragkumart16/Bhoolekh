async function getPrice(location, total_sqft, bath, bhk) {
    const formData = new FormData();
    formData.append("total_sqft", total_sqft);
    formData.append("location", location);
    formData.append("bhk", bhk);
    formData.append("bath", bath);
    const response = await fetch('https://bhoolekh.onrender.com/predict_home_price', {
        method: 'POST',
        body: formData
    })
    const data = await response.json()
    return data
}

export default getPrice