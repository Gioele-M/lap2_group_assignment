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
