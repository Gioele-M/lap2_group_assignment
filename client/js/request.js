const form = document.querySelector('#new_post');
const postsList = document.querySelector('table');  //THIS IS NEEDED

form.addEventListener('submit', submitPost);

// Fetch all posts as soon as app is loaded
getAllPosts();   // THIS WAS MISSING





// POST FLOW
// index
function getAllPosts(){
    fetch('http://localhost:3000/posts')
        .then(r => r.json())
        .then(appendPosts)
        .catch(console.warn)
};

// create
function submitPost(e){
    e.preventDefault();

    const postData = {
        title: e.target.title.value,
        name: e.target.name.value,
        body: e.target.body.value
    };

    const options = { 
        method: 'POST',
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" }
    };

    fetch('http://localhost:3000/posts', options)
        .then(r => r.json())
        .then(appendPost)
        .then(() => e.target.reset())
        .catch(console.warn)
};






