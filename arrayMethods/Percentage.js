const Percentage = (arr) => arr.reduce((a, b) => a + b) / arr.length;
// let MarksGained = 0;
// arr.forEach(element => {
//     MarksGained += element;
// });

//array.reduce(accumulator, current value)=> any operation on acc and cv 


console.log(Percentage([45, 43, 67, 89, 68]))
console.log(Percentage([95, 90, 87, 94, 87, 86, 80]))
console.log(Percentage([78, 89, 35, 68, 99, 95, 97, 98, 69]))