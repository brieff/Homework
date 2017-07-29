//Homework 2
//Problem 1

for (let i = 1; i < 101; i++) {
  if(i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz');
  }
  else if (i % 3 === 0) {
    console.log('Fizz')
  }
  else if(i % 5 === 0) {
    console.log('Buzz')
  }
  else {
    console.log(i);
  }
}

//Problem 2

function getAverage(array) {
let sum = 0;
let average = 0;

  for (let i = 0; i < array.length; i++) {
    sum += parseInt(array[i], array.length);
    average = sum / array.length;
  }

  return Math.floor(average);
}

console.log(getAverage([1,2,3,4,5,]));
