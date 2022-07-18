function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b; 
}
function divide(a, b) {
    return a / b; 
}
function increment(n) {
    return (n += 1);
}
function decrement(n) {
    return (n -= 1);
}
function makeInt(n) {
    const a = parseInt(n, 10);
    return a; 
    
}
function preserveDecimal(n) {
    const a = parseFloat(n);
    return a;
}