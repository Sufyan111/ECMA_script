const leastNum=(arrNum)=>{
    let minNum= arrNum[0];
    arrNum.forEach(element => {
        if(element<minNum){
            minNum=element;
        }
    });
    return minNum;
}

console.log(leastNum([1,2,3,4,5,6,7,8,9,7,2,21,2,13,31,1,511,65,6,4,64,-4054]))