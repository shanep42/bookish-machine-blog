console.log("view-single-post.js accessed")

const commentSubmission = async () => {
    const content = document.getElementById('comment-content').value;

    if (content) {
        const response = await fetch('api/comment', {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: { 'Content-Type': 'application/json' }
        })
        console.log(response);
        // document.location.replace('/')
    }
}

function test() {
    console.log(req.session.loggedIn)
}

document.getElementById('comment-button').addEventListener('click', test);