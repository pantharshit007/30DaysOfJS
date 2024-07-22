// Day 10: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197174

// • Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

// task1:
const task1 = document.querySelector('.task1');
function task1click() {
    task1.textContent = 'task1 clicked'
}

// task2:
const task2 = document.querySelector('.task2');
task2.addEventListener('dblclick', () => {
    task2.classList.toggle('imgOpacity')
})

// task3:
task2.addEventListener('mouseover', () => {
    task2.style.backgroundColor = 'pink'
})

// task4:
task2.addEventListener('mouseout', () => {
    task2.style.backgroundColor = 'transparent'
})

// task5:
const task5 = document.getElementById('task5')
task5.addEventListener('keypress', (e) => {
    console.log('> Key pressed:', e.key)
})

// task6:
const task6 = document.getElementById('task6')
const display = document.getElementById('display')
task6.addEventListener('keyup', (e) => {
    display.textContent = task6.value;
    console.log('> Key up:', e.target.value);
})

// task7:
const form = document.getElementById('form')
form.addEventListener('submit', submit)

function submit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('firstName');
    const age = formData.get('age');

    console.log('> Submitted');
    console.log(`my name is ${name} and age is ${age}`);
}

// task8:
const task8 = document.getElementById('task8')
const display2 = document.querySelector('.display2')
const option = document.getElementById('option')

task8.addEventListener('change', (e) => {
    if (e.target.value == "default") {
        return;
    }
    const value = e.target.value;
    display2.textContent = value;
})

// task9:
unordered = document.querySelector('.unordered-list')
const display3 = document.querySelector('.display3')

unordered.addEventListener("click", (e) => {
    if (e.target && e.target.nodeName == "LI") {
        const value = e.target.textContent;
        display3.textContent = value;
    }
    else return;
})

// task10:
parent = document.querySelector('.parent');

// Create a MutationObserver instance
const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // Iterate through all added nodes
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'P') {
                    // Handle the newly added paragraph element
                    console.log('New paragraph added:', node);
                    parent.style.border = '2px solid red';
                }
                else if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'SPAN') {
                    // Handle the newly added span element
                    console.log('New span added:', node);
                    parent.style.border = '4px solid yellow';
                }
            });
        }
    }
});

// Start observing the parent element for childList changes
observer.observe(parent, { childList: true });


function addnewparagraph() {
    // Dynamically add a new paragraph element
    let p = document.createElement('p');
    p.textContent = 'new paragraph';
    p.style.color = 'blue';
    parent.appendChild(p);
}

function doubleclick() {
    let p1 = document.createElement('span');
    p1.textContent = 'new paragraph - 2';
    p1.style.color = 'green';
    parent.appendChild(p1);
}