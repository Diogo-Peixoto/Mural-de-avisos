module.exports = {
    posts: [],

    getAll(){
        return this.posts;
    },

    newPost(title,description){
        this.posts.push({id:generateID(),title,description})
    },
    
    delPost(id){

        for(let i = 0; i < this.posts.length;i++){
            if(this.posts[i].id == id){
                this.posts.splice(i,1)
            }
        }
    }
        


}

function generateID(){
    return Math.random().toString(36).substr(2, 9);
}