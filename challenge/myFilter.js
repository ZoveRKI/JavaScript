function myFilter(list, fun, defult) {
    temp = []
    list.reduce(function (a, b) {
        if (fun(a) && a > defult.MAX) {
            temp.push(a)
        }
        return b
    })
    return temp
}

var a = [1, 2, 3, 4, 5]
var obj = { MAX: 3 }
d = myFilter(a, function (n, p, q) {
    p = a.indexOf(n)
    q = a
    // if (n > this.MAX) {
    return n % 2 === 0
    // }
}, obj)
console.log(d)
