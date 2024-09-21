async function execute(){
    const postsList = document.getElementById("postsList")
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts')// chama api
    const data = await resposta.json()// converte o json para um objeto Js
    
    console.log(data)

    data.forEach(function (post){
        const postElement = document.createElement("Article")
        
        const postTitle = document.createElement("h2")
        postTitle.textContent = post.title

        const postAuthor = document.createElement("span")
        postAuthor.textContent = `Autor: ${post.userId}`

        const postContent = document.createElement("p")
        postContent.textContent = post.body

        postElement.append(postTitle, postAuthor, postContent, document.createElement("hr"))
        postsList.appendChild(postElement)
    })
}

execute()