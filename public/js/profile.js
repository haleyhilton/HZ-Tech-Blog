const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#post-name').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  console.log(true)
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post');
      }
    }
  };


  const editButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to edit post');
      }
    }
  };
  // Dyno create element
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);


    // This is for the delete button
  var postlist = document.querySelector('.post-list')

  if (postlist) {
    postlist.addEventListener('click', (e) => {
      console.log();
      if (e.target.classList.contains("deleteB")) {
        delButtonHandler(e)
      } else if (e.target.classList.contains("editB")) {
        editButtonHandler(e)

      }
    })
  }
  