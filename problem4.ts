function maxSequence(nilaiArr: number[]): number {
    let nilaiMaxsum: number = nilaiArr[0]
    let nilaiSum: number = nilaiArr[0]

    for (let i = 1; i < nilaiArr.length; i++) {

        nilaiSum = Math.max(nilaiArr[i], nilaiSum + nilaiArr[i])

        nilaiMaxsum = Math.max(nilaiMaxsum, nilaiSum)
    }

    return nilaiMaxsum
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSequence([-2, -5, 6, -2, -3, 1, 5, -6]))
console.log(maxSequence([-2, -3, 4, -1, -2, 1, 5, -3]))
console.log(maxSequence([-2, -5, 6, -2, -3, 1, 6, -6]))
console.log(maxSequence([-2, -5, 6, 2, -3, 1, 6, -6]))
