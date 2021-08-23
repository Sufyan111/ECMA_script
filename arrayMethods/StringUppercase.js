var arrayOld = [1, null, "Kya hai ye", undefined, "Person", null, "Hello"]


let arrayNew = []
arrayOld.forEach(element => {
    if (typeof element == "string") {
        arrayNew.push(element.toUpperCase());
    }
});

console.log(arrayNew)

console.log("0112"-"1")