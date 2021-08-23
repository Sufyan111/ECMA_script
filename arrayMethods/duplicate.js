const dupilcate = (arr) => {
    let duplicateArr = [];
    let originalArr = [];
    arr.forEach((element, index) => {
        if (arr.indexOf(element) !== index) {
            duplicateArr.push(element)
        } else {
            originalArr.push(element);
        }
    });
    return {
        Duplicates: duplicateArr,
        Originals: originalArr,
    };
}

console.log(dupilcate([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 5, , 5, 55, 6, 5, 12, 66, 75, -1, -1]))