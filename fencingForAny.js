const fencingForAny = (edges, numOfWires, rate) => {
    let sum = 0;
    //     for (i = 0; i < edges.length; i++) {
    //         perimeter = perimeter + edges[i];
    //     }

    edges.forEach(element =>
        sum = sum + element
    )
    return sum * numOfWires * rate;
}
console.log(`The total cost for fencing is Rs. ${fencingForAny([10, 15, 10, 10, 10, 10, 22], 5, 10)}`); 