const factorial = (num) =>  num<2 ? 1 : (num*factorial(num-1));
    // for(let i = num - 1; i > 0; i--) {
    //     num = num * i;
    // }
    // return num;

    // if (num == 0) {
    //     return 1;
    // } else {
    //     return num * factorial(num - 1);
    // }

   


console.log(factorial(5))