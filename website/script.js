document.addEventListener('DOMContentLoaded', function () {
    const postsContainer = document.getElementById('posts');

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            data.slice(0, 10).forEach(post => {
                const postCard = document.createElement('div');
                postCard.classList.add('post-card');

                postCard.innerHTML = `
                    <div class="post-title">${post.title}</div>
                    <div class="post-body">${post.body}</div>
                `;

                postsContainer.appendChild(postCard);
            });
        })
        .catch(error => {
            postsContainer.innerHTML = '<p>Failed to load posts. Please try again later.</p>';
        });
});
