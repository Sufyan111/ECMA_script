const GreatestNum=(arrNum)=>{
    let maxNum=0;
    arrNum.forEach(element => {
        if(element>maxNum){
            maxNum=element;
        }
    });
    return maxNum;
}

console.log(GreatestNum([1,2,3,4,5,6,7,8,9,7,2,21,2,13,31,1,511,65,6,4,64,{-4054}]))