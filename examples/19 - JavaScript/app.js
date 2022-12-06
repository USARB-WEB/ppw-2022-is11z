

document.getElementById('pageBody').style.backgroundColor = 'yellow';


setTimeout(() => {
    document.getElementById('pageBody').style.backgroundColor = 'green';
}, 3000)

const x = 1;
const y = 2;
console.log(x + y);


function greetings(){
    alert('Hello, I am JavaScript');
    const name = prompt("What is your name?")
    alert(`Hello, ${name}`)

    const age  = prompt('How old are you?')
    if(age >= 7){
        alert('You can go to school!')
    } else {
        alert('You can learn JavaScript!')
    }

}

greetings();