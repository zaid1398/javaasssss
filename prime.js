function isPrime(n) {
    for (let i = 2; i * i <= n; i++){
        if(n%i==0)
        {    console.log(n+" "+"It is not Prime Number");
            return false ;
        }
    }
    console.log(n+" "+"It is a Prime Number");
    return n > 1;
}
console.log(isPrime(6));