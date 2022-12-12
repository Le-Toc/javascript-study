// Functions
const bob = document.querySelector('.face')

let movement = 0

function moveBob() {
    movement += 50
    bob.style.left = movement + 'px'
}

bob.addEventListener('click', moveBob)