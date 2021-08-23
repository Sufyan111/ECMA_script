const FindSortedUniqueArr = (objArr) => {
    let mergedArr = [];
    objArr.data.forEach(element => {
        mergedArr=[...mergedArr,...element]
    });
    
    const uniqueArr = [...new Set(mergedArr.sort((a, b) => a-b))]
    return uniqueArr;
}

console.log(FindSortedUniqueArr({
    data: [
        [24, 75, 12, 14, 1],
        [35, 24, 13, 2],
        [7, 1, 75, 24, 15],
        [43,57,3,79,0,55],
        [0,4,8,99,23,-1,-888,-75]
    ]
}))