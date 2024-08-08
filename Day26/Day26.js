// Day 26: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197476

// Activity 1: Setting Up the Project
// • Task 1.
// • Initialize a new project directory and set up the basic HTML structure for the chat application.
// • Task 2: Add a basic CSS file to style the chat application, including a chat window and input area.
//     Activity 2: Setting Up WebSocket Server
// • Task 3: Set up a simple WebSocket server using Node.js and the ws library.Write a script to create the server and handle connections.
// • Task 4:
// Test the WebSocket server by logging messages when clients connect and disconnect.
//     Activity 3: Establishing WebSocket Connection
// • Task 5: Add a script to the HTML file to establish a WebSocket connection to the server.
// • Task 6: Write functions to handle sending and receiving messages through the WebSocket connection.Log received messages to the console.
//     Activity 4: Building the Chat Interface
// • Task 7: Modify the HTML structure to include a chat window and an input area for typing messages.Style the chat window and input area using CSS.
// • Task 8: Write a function to display received messages in the chat window.Add event listeners to send messages when the user presses Enter or clicks a send button.
//     Activity 5: Enhancing the Chat Application
// • Task 9: Add user authentication to the chat application.Allow users to enter a username before joining the chat.Display usernames alongside their messages in the chat window.
// • Task IO: Add CSS styles to differentiate messages sent by different users.Add CSS animations or transitions to make the chat application more interactive and visually appealing.

const ws = new WebSocket('ws://localhost:8080');

const form = document.getElementById('form');
const input = document.getElementById('messageInput');
const usernameDisplay = document.getElementById('username-display');
const chatBox = document.getElementById('chat-box');
let username = '';

function setUsername(name) {
    usernameDisplay.textContent = `Logged in as: ${name || 'Anonymous'}`;
}

ws.onopen = () => {
    console.log("> Connected!")
}

ws.onmessage = (event) => {
    try {
        const { type, message, username } = JSON.parse(event.data);
        if (type === 'incoming') {
            displayReceivedMessage(message, username);
        }
    } catch (error) {
        console.error('Error parsing message:', error);
    }
}

form.addEventListener('submit', (event) => sendMessage(event));

function displaySentMessage(message, username) {
    const messageItem = document.createElement('li');
    messageItem.classList.add('align-right');
    const textMessage = document.createElement('p');
    textMessage.textContent = message;

    const name = document.createElement('span');
    name.classList.add('username', 'username-right');
    name.textContent = username;

    messageItem.style.backgroundColor = 'lightGreen'
    messageItem.appendChild(textMessage);
    messageItem.appendChild(name);
    chatBox.appendChild(messageItem);
}

function displayReceivedMessage(message, username) {
    const messageItem = document.createElement('li');
    messageItem.classList.add('align-left');
    const textMessage = document.createElement('p');
    textMessage.textContent = message;

    const name = document.createElement('span');
    name.classList.add('username', 'username-left');
    name.textContent = username;

    messageItem.style.backgroundColor = 'lightGray'
    messageItem.appendChild(textMessage);
    messageItem.appendChild(name);
    chatBox.appendChild(messageItem);
}

function sendMessage(eve) {
    eve.preventDefault();

    if (!username) {
        username = prompt("Please enter a username");
        setUsername();
    }
    username = username || 'Anonymous';
    if (input.value.trim() !== '') {
        const message = input.value;
        displaySentMessage(message, username);
        const sentMessage = JSON.stringify({ type: 'incoming', message, username });
        ws.send(sentMessage);
        input.value = '';
    }

}


ws.onclose = () => {
    console.log('> Disconnected from WebSocket server');
};


