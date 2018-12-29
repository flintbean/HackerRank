function repeatedString(s, n) {
    let matchArr = [];
    console.log(s + s )
    let arr = s.split('')
    matchArr = arr.filter(value => {
        return value === 'a';
    })

    return matchArr.length * s.length
}

console.log(repeatedString("aba", 10))