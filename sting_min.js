//string x === string y 
function test(x, y) {
    let min = Math.min(x.length, y.length)
    return x.substring(x.length - min) + y.substring(y.length - min)
}
