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

    const response = await fetch('http://localhost:3000/', options);
    const { id, err } = await response.json();
    console.log(id);
    if (err) {
      throw Error(err);
    } else {
      window.location.hash = `${id}`;
    }
  } catch (err) {
    console.warn(err);
  }
}

async function getPost(id) {
  try {
    const response = await fetch(`http://localhost:3000/${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
}


async function getAllPost() {
    try {
      const response = await fetch(`http://localhost:3000/`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.warn(err);
    }
  }


module.exports = {handlePost, getAllPost, getPost}
