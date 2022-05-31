
// Request handling
const form = document.querySelector('form');
form.addEventListener('submit', handlePost);

async function handlePost(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target))
  let currentDate = new Date();
  currentDate = `${currentDate.getDate()} / ${currentDate.getMonth() + 1}`
  try {
    const options = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, date: currentDate})
    }

    console.log(options.body);

    const response = await fetch('http://localhost:3000/posts/new', options);
    const { id, err } = await response.json();
    console.log(id);
    if (err) {
      throw Error(err);
    } else {
      window.location.hash = `${id}`;
    }
    location.reload()
  } catch (err) {
    console.warn(err);
  }
}

async function getPost(id) {
  try {
    const response = await fetch(`http://localhost:3000/posts/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}


async function getAllPost() {
    try {
      const response = await fetch(`http://localhost:3000/posts/`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.warn(err);
    }
}

// Get the data and export create the sections to append to the html
const parent = document.querySelector('#parent-div')
const allData = getAllPost()

allData.then(e=>{
    loopAndAppend(e, parent)
})





//Meant to be in another file (?)

function createPost(data){
    const {title, name, body} = data

    const main_section = document.createElement('section')
    main_section.className = 'post2'
    
    const title_section = document.createElement('h5')
    title_section.textContent = title
    title_section.className = 'postTitle'

    const name_section = document.createElement('h6')
    name_section.textContent = name
    name_section.className = 'postName'

    const body_section = document.createElement('p')
    body_section.textContent = body
    body_section.className = 'postBody'


    main_section.appendChild(title_section)
    main_section.appendChild(name_section)
    main_section.appendChild(body_section)

    return main_section
}


function loopAndAppend(data, parent_div){
    data.forEach(element => {
        let html = createPost(element)
        parent_div.appendChild(html)
    });
}
