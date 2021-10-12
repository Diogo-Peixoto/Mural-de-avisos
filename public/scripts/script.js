document.addEventListener('DOMContentLoaded', () =>{
    updatePost();
})

function updatePost(){

    fetch("http://192.168.1.4:5000/api/all").then(res=>{
        return res.json()
    }).then(json =>{


        let postElements = '';

        let posts = JSON.parse(json);
        posts.forEach(post => {
           let postElement =`<div id=${post.id} class="card mb-4">
                                <div class="card-header">
                                <button type="button" class="btn btn-outline-danger" onclick="excluir(${post.id})">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </button>
                                    <h5 class="card-title">${post.title}</h5>
                                </div>
                                <div class="card-body">
                                    <div class="card-text">${post.description}</div>
                                </div>
                            </div>` 
            postElements += postElement;

        });

        document.getElementById("posts").innerHTML = postElements;

    })

}

function newPost(){
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;

    let post = {title, description};

    const option = {method:"POST", headers: new Headers({'content-type':'application/json'}),body:JSON.stringify(post)} 

    if(title != "" & description != ""){
        fetch("http://192.168.1.4:5000/api/new", option).then(res =>{
            updatePost();
            title = document.getElementById("title").value = "";
            document.getElementById("desc").value = "";
        })
    } 
    
}
function excluir(id){

}

    