const postSubmission = async (event) => {
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    if (title && content) {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' }
        })
        console.log(response);
        document.location.replace('/')
    }
}


console.log("post-submission.js accessed")
function test() {
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    console.log("Title: ", title);
    console.log("Content:", content);
}

document.getElementById('post-button').addEventListener('click', postSubmission);
