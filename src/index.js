// Fizz Buzz

// for (let i = 1; i < 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i, 'FizzBuzz')
//   } else if (i % 3 === 0) {
//     console.log(i, 'Fizz')
//   } else if (i % 5 === 0) {
//     console.log(i, 'Buzz')
//   } else {
//     console.log(i)
//   }
// }

// Functions exercise

const bob = document.querySelector('.face')
let count = 0

function moveBob() {
  count += 50
  bob.style.left = count + 'px'
}

bob.addEventListener('click', moveBob)
