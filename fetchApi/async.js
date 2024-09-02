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


async function somaAsync(a, b){
    const numA = parseFloat(a)
    const numB = parseFloat(b)

    return numA + numB
}
const resultado = somaAsync(3, 4)
console.log(resultado)