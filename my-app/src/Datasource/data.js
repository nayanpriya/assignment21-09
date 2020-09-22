export async function getData(searchtext) {
    console.log(searchtext)
    // will get data here from api
    try {
        const response = await fetch("http://www.mocky.io/v2/5ba8efb23100007200c2750c")
        if (response.ok) {
            var userDetails = await response.json()
            var list = getDataByUserDetails(userDetails, searchtext)
            console.log(list)
            ///return userDetails
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
    let searchedUsers = []
    return userDetails.map(user => {
        if (user.id || user.name || user.address || user.pincodeincludes(searchtext)) {
            searchedUsers.push(user)
        }
        return searchedUsers
    })

}



// export async function getDataPromise() {
//     // will get data here from api
//     try {
//         const promise = new Promise((resolve, reject) => {

//         })
//         return promise
//     }
//     catch (err) {
//         console.log(err)
//     }

// }