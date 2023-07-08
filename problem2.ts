function fibonacci(number: number): number {
    if (number === 0) {
      return 0 
    } else if (number === 1 || number === 2) {
      return 1
    }
  
    let nilaiSebelum = 1
    let nilaiSekarang = 1
  
    for (let i = 3; i <= number; i++) {
      let niaiSetelah: number = nilaiSebelum + nilaiSekarang
      nilaiSebelum = nilaiSekarang
      nilaiSekarang = niaiSetelah
    }
  
    return nilaiSekarang
  }
  


console.log(fibonacci(0)) 
console.log(fibonacci(2)) 
console.log(fibonacci(9)) 
console.log(fibonacci(10))
console.log(fibonacci(12))