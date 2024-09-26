
fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'John Doe',
        job: 'Developer'
    })
})

fetch('https://reqres.in/api/users')
.then((res) => res.json())
.then((data) => console.log(data)).catch((err) => console.log(err));


let url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL"



function converter(){
    let input = document.getElementById("valor")
    let valor  = input.value
    fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        let rate = data.rate.BRL;
        let resultado = `${valor} dolares = ${rate * valor} em reais.`;
        document.getElementById("resultado").innerHTML = resultado;
    })

}