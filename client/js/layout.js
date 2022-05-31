// Base layout / homepage
const formArea = document.querySelector('#form-area');
const submitBtn = document.querySelector('#submit-btn')
const postArea = document.querySelector('#post')

window.addEventListener('hashchange', updateContent);
window.addEventListener('load', updateContent)

function updateView(hash) {
  if (hash) {
    formArea.className = 'd-none';
    postArea.className = '';
    loadPost(hash);
  } else {
    formArea.className = '';
    postArea.className = 'd-none';
  }
}

function updateContent() {
  let hash = window.location.hash.substring(1);
  updateView(hash);
}


