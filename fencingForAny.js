const fencingForAny = (edges, numOfWires, rate) =>{
 let perimeter = 0 ;
    for (let i = 0; i<edges.length; i++){
        perimeter = perimeter + edges[i];
    }
 
 return perimeter*numOfWires*rate;
}

console.log(fencingForAny([30, 20, 30, 20], 5, 10));
