const newpostFormHandler = async (event) => {
    event.preventDefault();

    const headline = document.querySelector('#newpost-headline').value.trim();
    const content = document.querySelector('#newpost-content').value.trim();

    if (headline && content) {
        const response = await fetch('/api/posts/currentuser', {
            method: 'POST',
            body: JSON.stringify({ headline, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to log in');
        }
    };
};

document.querySelector('#post-submit').addEventListener('click', newpostFormHandler);