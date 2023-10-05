export async function searchCoctailByName(name) {
    const BASE_URL = "https://drinkify.b.goit.study/api/v1";
    try {
        const resp = await fetch(`${BASE_URL}/cocktails/search?s=${name}`)    
        if (!resp.ok) {
            throw new Error(resp.statusText)
        }
        return resp.json()
    }
    catch (error) {
        console.log(error.message)
    }
}


