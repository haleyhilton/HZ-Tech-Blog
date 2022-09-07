const newpost = () => {
    document.location.replace('/dashboard/newpost');
};

const update = (event) => {
    const postid = event.target.name;
    const address = `/dashboard/post/${postid}`;

    document.location.replace(address);
}

const deletePost = async (event) => {
    const postid = event.target.name;
    const address = `/api/posts/${postid}`; 

    const response = await fetch(address, {
        method: 'DELETE',
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete');
    }
}

document.querySelectorAll('.update').forEach(el => el.addEventListener('click', update));
document.querySelectorAll('.delete').forEach(el => el.addEventListener('click', deletePost));
document.querySelector('#newPostBtn').addEventListener('click', newpost);