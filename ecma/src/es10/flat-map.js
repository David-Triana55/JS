// aplanar arrays bidimensionales

const array = [1,23,4,5,2,2,1, [1,1,2,4, [1,1,2]]];

console.log(array.flat(3));

// flat map

const array2 = [1,2,3,4,5]
console.log(array2.flatMap(v => [v,v*2]));