// Day 29: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197513

// Activity 1: Setting Up the Project
// • Task 1: Initialize a new project directory and set up the basic HTML structure for the social media dashboard.
// • Task 2: Add a basic CSS file to style the social media dashboard, including a container for posts and a form for creating new posts.
//     Activity 2: User Authentication
// • Task 3: Create a simple login form that collects a username and password.Style the form using CSS.
// • Task 4:
// Write a script to handle user login and store the logged -in user's information in localStorage or sessionStorage.
// Activity 3: Creating Posts
// • Task 5: Add a form to the HTML structure with fields for entering post details(e.g., text, image).Style the form using CSS.
// • Task 6.
// • Write a script to handle form submission, creating a new post object and adding it to an array of posts.Display the new post in the feed.
//     Activity 4: Displaying Posts
// • Task 7: Write a function to iterate over the array of posts and display each post in the feed.Include post details like text, image, username, and timestamp.
// • Task 8: Style the post feed using CSS to make it visually appealing.
//     Activity 5:
// Post Interactions
// • Task 9: Add "Like" and "Comment" buttons to each post.Write functions to handle liking a post and adding comments to a post.
// • Task IO: Display the number of likes and comments for each post.Update the display when users interact with the posts.
//     Activity 6: Enhancing the Ul
// • Task 1 1: Add CSS styles to differentiate posts by different users.Display the logged -in user's posts with a distinct style.
// • Task 12: Add CSS animations or transitions to make the social media dashboard more interactive and visually appealing.
// 4

document.addEventListener('DOMContentLoaded', function () {
    const username = sessionStorage.getItem('loggedInUser') || 'Guest';
    document.getElementById('username-placeholder').textContent = username;

    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    displayPosts(posts);

    const postButton = document.getElementById('post-button');
    const postFormContainer = document.getElementById('post-form-container');
    const cancelPostButton = document.getElementById('cancelPost');

    postButton.addEventListener('click', function () {
        postFormContainer.classList.remove('hidden');
    });

    cancelPostButton.addEventListener('click', function () {
        postFormContainer.classList.add('hidden');
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
            likes: 0
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
        postFormContainer.classList.add('hidden');
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
                window.location.href = '../index.html'; // Adjust path if necessary
            }
        });
    } else {
        console.error('Logout button not found');
    }

    const deleteAccountButton = document.querySelector('.delete-account-button');
    if (deleteAccountButton) {
        deleteAccountButton.addEventListener('click', function () {
            if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                // Clear session and local storage
                sessionStorage.removeItem('loggedInUser');
                localStorage.removeItem('posts');

                // You might also want to remove user-specific data from a server here

                // Redirect to login page or a confirmation page
                window.location.href = '../index.html'; // Adjust path if necessary
            }
        });
    } else {
        console.error('Delete Account button not found');
    }
});
