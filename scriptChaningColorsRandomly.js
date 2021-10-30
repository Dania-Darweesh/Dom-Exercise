///// colors Randomly


const boxDiv = document.getElementById("mydiv3");
let counter = randomNum(3, 0);

const arr = ['red', 'green', 'blue'];
boxDiv.style.background = arr[counter];

boxDiv.addEventListener('click', () => {
    counter++;
    changeColor();
});

function randomNum(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

function changeColor() {
    if (counter === 1)
        boxDiv.style.background = 'red';
    else if (counter === 2)
        boxDiv.style.background = 'green';
    else if (counter === 3)
        boxDiv.style.background = 'blue';
    else
        counter = 0;
}