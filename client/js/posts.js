// Displaying a post
async function loadPost(hash) {
    document.getElementById('postTitle').textContent = "";
    document.getElementById('postBody').textContent = "";
    let postData = await getPost(hash);
    console.log(postData);
    if (postData.err) {
        document.getElementById('postTitle').textContent = "Error post not found";
    } else {
        document.getElementById('postTitle').textContent = `${postData.date} > ${postData.name} > ${postData.title}`;
        document.getElementById('postBody').textContent = postData.body;
    }
}






function createPost(data){
    const {title, name, body} = data
    
    // const html_element = `<section class="d-none">
    // <h5>${title}</h5>
    // <h6>${name}</h6>
    // <p>${body}</p>
    // </section>`

    const main_section = document.createElement('section')
    main_section.className = 'd-none'
    
    const title_section = document.createElement('h5')
    title_section.textContent = title
    const name_section = document.createElement('h6')
    name_section.textContent = name
    const body_section = document.createElement('p')
    body_section.textContent = body

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



const parent = document.querySelector('#parent-div')

const sample_posts = [{title: "sample title", name: "sample name", body: "sample body"}, {title: "sample title 2", name: "sample name2 ", body: "sample body2"},{title: "sample title3", name: "sample name3", body: "sample body3"}]


loopAndAppend(sample_posts,parent)
