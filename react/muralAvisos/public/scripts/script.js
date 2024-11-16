
document.addEventListener("DOMContentLoaded", ()=> {
     updatePosts();
    
})
    
function updatePosts(){
  fetch("http://localhost:3000/api/all").then(res =>{
        return res.json();
    }).then(json => {
       
    let postElements = '';
    let posts = JSON.parse(json);
    posts.forEach((post) => {
        let postElement = `<div id=${post.id} class="card mb-4">
                            <div class="card-header">
                             <h5 class="card-title">${post.title}</h5>
                            </div>
                            <div class="card-body">
                            <div class="card-text">${post.description}</div>
                            </div>
                            </div>`
        postElements += postElement;
    })
    /*fetch('/api')
    .then(response => response.json())
    .then(data => {
        const postContainer = document.getElementById('post-container');
        postContainer.innerHTML = '';
        data.forEach(element => {
            const post = document.createElement('div');
            post.className = 'post';
            post.innerHTML = `
                <h2>${element.title}</h2>
                <p>${element.content}</p>
            `;
            postContainer.appendChild(post);
        });
    });*/
    document.getElementById("posts").innerHTML = postElements;

}
)}


function newPost(){
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let post = {title: title, description: description};
    fetch("http://localhost:3000/api/new", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(res => {
        console.log("Request complete! response:", res);
        updatePosts();
    })
}