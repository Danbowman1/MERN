// Push Front
const pushToFront = (arr, val) => {
    for(var i = arr.length - 1; i >=0; i--){
        arr[i+1] = arr[i]
    }
    arr[0] = val
}



// Pop Front

const popFront = (arr) => {
    var val = arr[0]
    for(var i = 1; i<arr.length; i++){
        arr[i-1] = arr[i]
    }
    return val
    
}

// Insert At

const insertAt = (arr, val, index) =>{
    for(var i = arr.length - 1; i>=index; i--){
        arr[i+1] = arr[i]
    }
    arr[index] = val
}

// Remove At

const removeAt = (arr, index) =>{
    index = Math.floor(index)
    if(index >+ arr.length || index < 0) {
        return null
    }
    var val = arr[index]
    for(var i = index + 1; i<arr.length; i++){
        arr[i-1] = arr[i]
    }
    arr.pop()
    return val
    
}

// Swap Pairs

const swapPairs = (arr) => {
    for(var i =0; i < arr.length - 1; i+=2){
        var temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
    }
}

// Remove Duplicates

const removeDuplicates = () =>{
    if(arr.length <= 1) {
        return
    }
    var lastVal = arr[0]
    var nextValIndex = 1
    for(var i = 1; i <arr.length; i++){
        if (arr[i] != lastVal){
            lastVal = arr[i]
            arr[nextValIndex] = arr[i]
            nextValIndex++
        }
    }
    arr.length = nextValIndex
}

