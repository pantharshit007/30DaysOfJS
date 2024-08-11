// Day 30: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197523

// Activity 1: Setting Up the Project
// • Task 1: Initialize a new project directory and set up the basic HTML structure for the final project.
// • Task 2: Add a basic CSS file to style the social media dashboard, including containers for posts, a sidebar for user information, and a form for creating new posts.
//     Activity 2: User Authentication
// • Task 3: Create a login and registration form that collects a username, email, and password.Style the forms using CSS.
// • Task 4:
// Write scripts to handle user registration and login, storing user information in localStorage or sessionStorage.Include basic validation for input fields.
//     Activity 3: User Profiles
// • Task 5: Create a user profile page that displays the logged -in user's information, including their username, email, and a profile picture. Allow users to update their profile information.
// • Task 6: Write a script to handle updating the user profile information and saving the changes to localStorage or sessionStorage.
//     Activity 4: Creating and Displaying Posts
// • Task 7: Add a form to the HTML structure with fields for entering post details(e.g., text, image).Style the form using CSS.
// • Task 8: Write a script to handle form submission, creating a new post object and adding it to an array of posts.Display the new post in the feed, including the username of the logged -in user.
//     Activity 5: Post Interactions
// • Task 9: Add "Like" and "Comment" buttons to each post.Write functions to handle liking a post and adding comments to a post.
// • Task IO: Display the number of likes and comments for each post.Update the display when users interact with the posts.
//     Activity 6: Notifications
// • Task 1: Implement a simple notification system that alerts users when they receive a new like or comment on their posts.Display notifications in a sidebar.
// • Task 12: Write a script to handle generating and displaying notifications based on user interactions.
//     Activity 7: Enhancing the IJI
// • Task 13: Add CSS styles to differentiate posts by different users.Display the logged -in user's posts with a distinct style.
// • Task 14: Add CSS animations or transitions to make the social media dashboard more interactive and visually appealing.

document.addEventListener('DOMContentLoaded', function () {


    const profileModal = document.getElementById("profile-modal");
    const closeProfileModalButton = document.getElementById("close-profile-modal");
    const editProfileButton = document.getElementById("edit-profile-button");
    const saveProfileButton = document.getElementById("save-profile-button");
    const editProfileForm = document.getElementById("edit-profile-form");


    // Set username and email from session storage
    const username = sessionStorage.getItem("loggedInUser") || "Guest";
    const email = sessionStorage.getItem("userEmail") || "No email provided";

    document.getElementById("profile-username").textContent = username;
    document.getElementById("profile-email").textContent = email;
    console.log("Email from sessionStorage:", email);

    if (profileModal && closeProfileModalButton) {

        closeProfileModalButton.addEventListener("click", function () {
            window.location.href = "../Day29/index.html";
        });


        if (editProfileButton && saveProfileButton && editProfileForm) {
            editProfileButton.addEventListener("click", function () {
                editProfileForm.classList.remove("hiddenn");
                editProfileButton.classList.add("hiddenn");
                saveProfileButton.classList.remove("hiddenn");
            });

            saveProfileButton.addEventListener("click", function () {
                const newUsername = document.getElementById("edit-username").value.trim();
                const newEmail = document.getElementById("edit-email").value.trim();

                if (newUsername) sessionStorage.setItem("loggedInUser", newUsername);
                if (newEmail) sessionStorage.setItem("userEmail", newEmail);

                document.getElementById("profile-username").textContent = newUsername || username;
                document.getElementById("profile-email").textContent = newEmail || email;

                editProfileForm.classList.add("hiddenn");
                editProfileButton.classList.remove("hiddenn");
                saveProfileButton.classList.add("hiddenn");
            });
        }
    } else {
        console.error("Profile modal elements not found");
    }
})