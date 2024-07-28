function myMap(list, fun, defult) {
    temp = []
    temp2 = []
    list.reduce(function (a, b) {
        temp.push(fun(a))
        temp2.push(defult[a])
        return b
    })
    var result = (defult) ? temp2 : temp;
    return result
}

a = [1, 2, 3, 4, 5]
aka = ['a', 'b', 'c', 'd', 'e', 'f']
d = myMap(a, function (n, p, q) {
    p = a.indexOf(n)
    q = a
    return n * 2
}, aka)

console.log(d)
