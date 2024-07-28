function myFilter(list, fun, defult) {
    temp = []
    list.reduce(function (a, b) {
        if (fun(a)) {
            temp.push(a)
        }
        return b
    })
    return temp
}

a = [1, 2, 3, 4, 5]
d = myFilter(a, function (n, p, q) {
    return n % 2 === 0
})
console.log(d)
