module.exports = {
   posts : [   
        {id: 1, title: "Aviso 1", description: "Descrição do Aviso 1"}
    
    ],

    getAll(){
        return this.posts;
    },

    newPost(title, description){
        let id = this.generateID();
        this.posts.push({id:generateID() ,id, title, description});
    },
    deletePost(id){
        this.posts = this.posts.filter(post => post.id !== id);
    }
}

function generateID() {
    return Math.random().toString(36).substr(2, 9);
}