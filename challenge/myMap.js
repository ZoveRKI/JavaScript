function myMap(list, fun, defult) {
    temp = []
    list.reduce(function (a, b) {
        temp.push(fun(a))
        return b
    })
    return temp
}


a = [1, 2, 3, 4, 5]
d = myMap(a, function (n) {
    return n * 2
})
console.log(d)