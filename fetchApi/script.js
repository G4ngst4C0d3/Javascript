
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
