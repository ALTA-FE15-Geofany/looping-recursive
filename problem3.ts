function isPrime(number: number): boolean {
    if (number <= 1) {
      return false
    }
  
    for (let i: number = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false
      }
    }
  
    return true
  }
  
  function primaSegiEmpat(wide: number, high: number, start: number): string {
    let numberSekarang: number = start
    let hasil: string = ""
  
    for (let i: number = 0; i < high; i++) {
      let row: string = ""
  
      for (let j: number = 0; j < wide; j++) {
        while (!isPrime(numberSekarang)) {
          numberSekarang++
        }
  
        row += numberSekarang + " "
        numberSekarang++
      }
  
      hasil += row.trim() + "\n"
    }
  
    let nilaiPrimeSum: number = 0
    for (let i: number = start; i < numberSekarang; i++) {
      if (isPrime(i)) {
        nilaiPrimeSum += i
      }
    }
  
    hasil += nilaiPrimeSum.toString()
  
    return hasil
  }
  
  console.log(primaSegiEmpat(2, 3, 13))
  console.log(primaSegiEmpat(5, 2, 1))