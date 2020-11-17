let dayofweek = new Array();
dayofweek = new Array(7);
dayofweek = new Array('Lunes', 'Martes', 'Miercoels', 'Jueves', 'Viernes', 'Sabado', 'Domingo');
//segunda forma
let dayOfWeekDos = ['Lunes', 'Martes', 'Miercoels', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
//Accessing elements and iterating an array
for(let i = 0; i < dayOfWeekDos.length; i++){
  //  console.log(dayOfWeekDos[i]);
}
console.log(dayOfWeekDos.length);
//inserting an element at the end of the array
let numbers = [0,1,2,3,4,5,6];
numbers[numbers.length] = 7;
for(let i = 0; i < numbers.length; i++){
  //  console.log(numbers[i]);
}
//removing an element from the end of the array
numbers.pop();
for(let i = 0; i < numbers.length; i++){
    //console.log(numbers[i]);
}

//removing an element from the first position
numbers.shift();
// Adding and removing elements form a specific position
let numbersArrays = [-3,-2,-1,0,1,5,6,7,8,9,10];
numbersArrays.splice(5,0,2,3,4); // 5 position initial, 0 number to delete, 2 count numbers add, 3,4 numbers added
for(let i = 0; i < numbersArrays.length; i++){
    console.log(numbersArrays[i]);
}




//Fibonacci 20 numbers
const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;
for(let i = 3; i < 20; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2 ];
}

for(let i = 1; i < fibonacci.length; i++){
    //console.log(fibonacci[i]);
}
