const sumOfOdd = (numbers) => {
    let sumEven = 0;
        sumOdd = 0;
    numbers.forEach((element) =>{
        (element % 2 == 0) ? (sumEven = sumEven + element) : (sumOdd = sumOdd + element);
    }
    ) 
    return `    Sum Of Even numbers is=${sumEven} 
    Sum Of Odd numbers is = ${sumOdd}
    Total sum is = ${sumEven + sumOdd}`;
    
}

console.log(sumOfOdd([5,2,7,9,10]));
