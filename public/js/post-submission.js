const postSubmission = async (event) => {
    const title = document.getElementById('post-title');
    const content = document.getElementById('post-content');

    if (title && content){
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ 
                title: title,
                content: content
            }),
        })
    }
}


console.log("post-submission.js accessed")
function test() {
    console.log("click!")
}

document.getElementById('post-button').addEventListener('click', postSubmission);
