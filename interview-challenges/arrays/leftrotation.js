function rotLeft(a, d) {
    return a.map((x, index) => {
        return a[(index + d) % (a.length)]
    })
}

console.log(rotLeft([1,2,3,4,5], 4))