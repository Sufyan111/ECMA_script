const greatestStr=(arrStr)=>{
    let maxStr=arrStr[0].length;
    let strData=arrStr[0];

    arrStr.forEach(element => {
        if(element.length>maxStr){
            maxStr=element.length;
            strData=element;
        };
    });
    return strData;
}

console.log(greatestStr(["cat","bat0","Raect","abcdefghijklmnopqrstuvwxyz"]))`q`