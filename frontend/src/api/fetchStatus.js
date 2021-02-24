export const fetchStatus = async (url, status ) => {
    const bodyRequest = {
        method: 'POST',
        body: JSON.stringify({ status }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    try {
        await fetch(url, bodyRequest)
    } catch (e) {
        console.log(e)
    }
}