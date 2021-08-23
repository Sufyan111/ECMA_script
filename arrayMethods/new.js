var getName = (fName, lName) => {
    return fName + " " + lName
}


var getName = (fName, mName, lName) => {
    return fName + " " + mName + " " + lName
}

console.log(getName("Sufyan", "Syed"))
console.log(getName("Sufyan", "    ", "Syed"))