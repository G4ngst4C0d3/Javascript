function getUser(id){
    return(`https://reqres.in/api/user?id=${id}`)
    .then(data => data.json())
    .catch(err =>console.log(err))
}


async function showUsername(id){
    const username = await getUser(id)
    console.log(`Nome do usuário: ${username.data.first_name}`)
}

showUsername(7)