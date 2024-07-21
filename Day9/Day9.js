// Day 9: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197157

// task1:
const namee = document.getElementById('name');
namee.innerHTML = 'Task 1';

// task2:
const bg = document.querySelector('.container')
bg.style.backgroundColor = 'yellow'

// task3:
const task3 = document.createElement('div')
task3.textContent = 'Task 3!';
document.body.appendChild(task3)

// task4:
const task4 = document.createElement('li')
task4.textContent = 'Task 4!';
const ul = document.getElementById('list')
ul.appendChild(task4)

// task5:
const task5 = document.getElementById('remove')
task5.remove()

// task6:
const task6 = document.getElementById('elem')
if (task6.lastElementChild) {
    task6.removeChild(task6.lastElementChild)
}

// task7:
const task7 = document.querySelector('.image')
const url = 'https://i.ibb.co/dJwnXWn/logo.png'
task7.src = url

// task8:
const task8 = document.querySelector('.box')
task8.classList.remove('bg-aqua')
task8.classList.add('bg-voilet')

// task9:
const task9 = document.querySelector('.para')
const button = document.getElementById('btn')
button.addEventListener('click', () => task9.textContent = 'para changed')

// task10:
const task10 = document.querySelector('.box2')
task10.addEventListener('mouseover', () => {
    task10.style.border = '2px solid black'
})
