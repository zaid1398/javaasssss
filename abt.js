function generateArray(n1, n2) {
    let arr = new Array();
    for (let n = n1; n<= n2; n++){
        arr.push(n);
    }
    return arr;
}

let arr = generateArray(3, 7);
console.log(arr);
