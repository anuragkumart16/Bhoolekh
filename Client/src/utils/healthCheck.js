async function healthCheck() {
    const response = await fetch('https://bhoolekh.onrender.com/health_check')
    const data = await response.json()
    return data
}

export default healthCheck