function solution(n: number): boolean {
    const arr = []
    while(n > 9) {
        const lastDigit =  n % 10
        n = (n - lastDigit) / 10
        arr.push(lastDigit)
    }
    arr.push(n)
    const leftSum = arr.slice(0, arr.length/2 ).reduce((prev, curr) => prev + curr, 0)
    const rightSum = arr.slice(arr.length/2).reduce((prev, curr) => prev + curr, 0)


    return leftSum === rightSum
}

const n = 1230;

console.log(solution(n))

