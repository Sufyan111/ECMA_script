const FenceForTri = (h, b, a, numberofwire, costPerFoot) => {
    const perimeter = h + a + b;

    return perimeter * numberofwire * costPerFoot;
}

console.log(`The total cost for the fencing is Rs. ${FenceForTri(10, 12, 18, 5, 10)}`);