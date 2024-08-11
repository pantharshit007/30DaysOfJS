document.addEventListener('DOMContentLoaded', function () {
    const username = sessionStorage.getItem('loggedInUser') || 'Guest';
    document.getElementById('username-placeholder').textContent = username;

    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    displayPosts(posts);

    const postButton = document.getElementById('post-button');
    const postFormContainer = document.getElementById('post-form-container');
    const cancelPostButton = document.getElementById('cancelPost');

    postButton.addEventListener('click', function () {
        postFormContainer.classList.remove('hiddenn');
    });

    cancelPostButton.addEventListener('click', function () {
        postFormContainer.classList.add('hiddenn');
        document.getElementById('postForm').reset();
    });

    document.getElementById('postForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const postText = document.getElementById('postText').value;
        const postImage = document.getElementById('postImage').files[0];

        const newPost = {
            id: Date.now(),
            username: username,
            text: postText,
            image: null,
            likes: 0,
            comments: [] // Add an empty array to store comments
        };

        if (postImage) {
            const reader = new FileReader();
            reader.onload = function (event) {
                newPost.image = event.target.result;
                saveAndDisplayPost(newPost);
            };
            reader.readAsDataURL(postImage);
        } else {
            saveAndDisplayPost(newPost);
        }
    });

    function saveAndDisplayPost(post) {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.unshift(post);
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts(posts);
        document.getElementById('postForm').reset();
        postFormContainer.classList.add('hiddenn');
    }

    function displayPosts(posts) {
        const postsContainer = document.getElementById('posts-container');
        postsContainer.innerHTML = '';

        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.dataset.id = post.id;

            const postUsername = document.createElement('div');
            postUsername.className = 'post-username';
            postUsername.textContent = post.username;

            const postText = document.createElement('div');
            postText.className = 'post-text';
            postText.textContent = post.text;

            postElement.appendChild(postUsername);
            postElement.appendChild(postText);

            if (post.image) {
                const postImage = document.createElement('img');
                postImage.src = post.image;
                postElement.appendChild(postImage);
            }

            const likeButton = document.createElement('div');
            likeButton.className = 'like-button';
            likeButton.innerHTML = `<i class="far fa-heart"></i> ${post.likes}`;
            likeButton.dataset.liked = 'false';

            likeButton.onclick = function () {
                toggleLike(likeButton, post.id);
            };

            postElement.appendChild(likeButton);

            // Add comments section
            const commentsContainer = document.createElement('div');
            commentsContainer.className = 'comments-container';

            post.comments.forEach(comment => {
                const commentElement = document.createElement('div');
                commentElement.className = 'comment';
                commentElement.textContent = `${comment.username}: ${comment.text}`;
                commentsContainer.appendChild(commentElement);
            });

            const commentForm = document.createElement('form');
            commentForm.className = 'comment-form';
            commentForm.innerHTML = `
                <textarea placeholder="Add a comment" rows="2" required></textarea>
                <button type="submit">Comment</button>
            `;

            commentForm.addEventListener('submit', function (e) {
                e.preventDefault();
                const commentText = commentForm.querySelector('textarea').value;

                const newComment = {
                    username: username,
                    text: commentText
                };

                post.comments.push(newComment);
                localStorage.setItem('posts', JSON.stringify(posts));
                displayPosts(posts);
            });

            postElement.appendChild(commentsContainer);
            postElement.appendChild(commentForm);
            postsContainer.appendChild(postElement);
        });
    }

    function toggleLike(button, postId) {
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        const post = posts.find(p => p.id == postId);

        if (post) {
            const isLiked = button.dataset.liked === 'true';

            if (isLiked) {
                post.likes--;
                button.dataset.liked = 'false';
            } else {
                post.likes++;
                button.dataset.liked = 'true';
            }

            localStorage.setItem('posts', JSON.stringify(posts));
            displayPosts(posts);
            button.innerHTML = `<i class="far fa-heart"></i> ${post.likes}`;
        }
    }

    const logoutButton = document.querySelector('.logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            if (confirm('Are you sure you want to logout?')) {
                sessionStorage.removeItem('loggedInUser');
                window.location.href = './login.html';
            }
        });
    } else {
        console.error('Logout button not found');
    }

    const deleteAccountButton = document.querySelector('.delete-account-button');
    if (deleteAccountButton) {
        deleteAccountButton.addEventListener('click', function () {
            if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                sessionStorage.removeItem('loggedInUser');
                localStorage.removeItem('posts');
                window.location.href = '../index.html';
            }
        });
    } else {
        console.error('Delete Account button not found');
    }

});

function profile() {
    console.log('Profile button clicked');
    window.location.href = '../Day30/index.html';
}
