export async function getData() {
    // will get data here from api
    try {
        const response = await fetch("http://www.mocky.io/v2/5ba8efb23100007200c2750c")
        if (response.ok) {
            var userDetails = await response.json()
            return userDetails
        }
        else {
            console.log(response.status)
        }
    }
    catch (err) {
        console.log(err)
    }
}

export function getDataByUserDetails(userDetails, searchtext) {
    // TODO * minimum 3 chars
    console.log(userDetails.filter(user => user.name.toLowerCase().includes(searchtext)))
    return userDetails.filter(user => user.name.includes(searchtext))
}


