// Day 20: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197444

function task1() {
    // task1
    const str = 'random billi'
    localStorage.setItem('task1', str)

    // task2
    const obj = { 1: 'random billi', 2: 'hey mom!' }
    localStorage.setItem('task2', JSON.stringify(obj))

    // task5:
    const str2 = 'save in session!'
    sessionStorage.setItem('task5', str2)

    // task6:
    const obj2 = { 3: 'random billi', 4: 'hey mom!' }
    sessionStorage.setItem('task6', JSON.stringify(obj2))

    const local1 = localStorage.getItem('task1');
    const local2 = JSON.parse(localStorage.getItem('task2'));
    const session = sessionStorage.getItem('task5')
    const session2 = JSON.parse(sessionStorage.getItem('task6'))

    console.log(local1);
    console.log(local2);
    console.log(session);
    console.log(session2);
}

// task3:
document.addEventListener('DOMContentLoaded', () => {
    displaySavedData();
    document.getElementById('userForm').addEventListener('submit', task3);
    task9()
})

function task3(e) {
    e.preventDefault();

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    // task7:
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);

}

function displaySavedData() {
    const savedDataDiv = document.getElementById('savedData');
    const savedDataDiv2 = document.getElementById('savedData2');

    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    // task7:
    const name2 = sessionStorage.getItem('name');
    const email2 = sessionStorage.getItem('email');

    if (name && email) {
        savedDataDiv.innerHTML = `<p><strong>Name:</strong> ${name}</p>
                                      <p><strong>Email:</strong> ${email}</p>`;
    } else {
        savedDataDiv.innerHTML = '<p>No data saved</p>';
    }

    if (name2 && email2) {
        savedDataDiv2.innerHTML = `<p><strong>Name:</strong> ${name2}</p>
                                      <p><strong>Email:</strong> ${email2}</p>`;
    } else {
        savedDataDiv2.innerHTML = '<p>No data saved</p>';
    }
}

// task4:
function task4() {
    localStorage.removeItem('name')
    localStorage.removeItem('email')

    console.log("> task4:", localStorage.getItem('name'));
    console.log("> task4:", localStorage.getItem('email'));
}

// task8:
function task8() {
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('email')

    console.log("> task8:", sessionStorage.getItem('name'));
    console.log("> task8:", sessionStorage.getItem('email'));
}

// task9:
function task9() {
    const object = { "one": 1, "two": 2, "three": 3 };

    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            value = object[key];
            localStorage.setItem(key, value);
            sessionStorage.setItem(key, value);
        }
    }

}

// task10:
function task10() {
    localStorage.clear();
    sessionStorage.clear();
}