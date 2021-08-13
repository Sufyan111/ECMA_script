let firstIndex = 0;
let lastIndex = 0;

const findIndex = (arrNum, findNum) => {
    let mid = Math.floor((firstIndex + lastIndex) / 2);

    if (arrNum[mid] == findNum) {
        return mid;
    } else if (arrNum[mid] > findNum) {
        firstIndex = mid;
    } else {
        lastIndex = mid;
    }
    findIndex(arrNum, findNum);
}

const bisectionAlgo = (arrNum, findNum) => {
    let firstIndex = 0;
    let lastIndex = arrNum.length - 1;
    findIndex(arrNum, findNum);
}

console.log(bisectionAlgo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5))