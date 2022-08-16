function reverse(arr){
    const reversedArray = []
    
    for (let i = 0; i < arr.length; i++) [
        reversedArray[i] = arr[arr.length -1 -i]
    ]

    return reversedArray
}

console.log(reverse([0,13,22,26,27,29 ,31]))
console.log(reverse["Oh", "Hi", "Peters"])
console.log(reverse([false, true, true, true]))