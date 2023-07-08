function primeX(number: number): number {
  if (number === 1) {
      return 2
  }
  let tempPrime: number = 1
  let numberNow: number = 3
  let prime: any = [2]

  while (tempPrime < number) {
      let isPrime: boolean = true


      for (let i: number = 0; i < prime.length; i++) {
          if (numberNow % prime[i] === 0) {
              isPrime = false
              break
          }
      }

      if (isPrime) {
          tempPrime++
          prime.push(numberNow)
      }

      numberNow += 2
  }

  return prime[number - 1]
}

console.log(primeX(1))
console.log(primeX(5))
console.log(primeX(10)) 
console.log(primeX(15)) 
console.log(primeX(20))