module.exports = function reverse(n) {
    let result = ''
    let str = Math.abs(n).toString();
    for (symbol of str) {
        result = symbol + result;
    }
    return Number(result);
}
