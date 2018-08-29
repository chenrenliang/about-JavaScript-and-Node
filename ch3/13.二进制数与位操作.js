function isPowerOfFour(num) {
    return num > 0 && (num & (num-1)) === 0 
                   && (num & 0xAAAAAAAA) === 0;
};

console.log(isPowerOfFour(65536));
//10000 & 1010101010101010....1010 (n & n-1)