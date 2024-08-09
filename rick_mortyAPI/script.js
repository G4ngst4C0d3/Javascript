const characterId = document.getElementById('characterId');
const btnGo = document.getElementById('btn-go');
const content = document.getElementById('content');
const image = document.getElementById('img');

const fetchApi = (value) => {
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res) => res.json())  //callback transforma em json
    .then((data)  => {
        return data;   
    });
    
    return result;
}

btnGo.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await fetchApi(characterId.value);
    content.textContent =  `${JSON.stringify(result, undefined, 2)}`;
    image.src = `${result.image}`;
});