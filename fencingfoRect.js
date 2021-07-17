const FenceForRect = (b, w, numberofwire, costPerFoot) => {
    const perimeter = b + b + w + w;

    return perimeter * numberofwire * costPerFoot;
}

console.log(`The total cost for the fencing is Rs. ${FenceForRect(30, 20, 7, 12)}`);