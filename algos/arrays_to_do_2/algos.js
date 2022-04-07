// Reverse Array
const reverseArray = (arr) =>{
    let first = 0
    let last = arr.length - 1
    while (first < last){
        let temp = arr[first]
        arr[first] = arr[last]
        arr[last] = temp

        first++
        last--
    }
}

let myArr = [1,2,3,4,5]
reverseArray(myArr)
console.log(myArr)

// Rotate
var reverse = function(nums, start, end) {
    while(start < end){
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }
}
var rotateArr = function(nums, k){
    k = k % nums.length

    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length -1)
    console.log(nums)
}


rotateArr([1,2,3,4,5,6,7], 1)

// Filter Range
const filterRange = (arr, min, max) =>{
    for(var i = 0; i < arr.length; i++){
        if(arr[i]<min || arr[i]>max){
            for(var j =i+1; j<arr.length; j++){
                arr[j-1] = arr[j]
            }
            arr.length--
            i--
            
        }
    }
}

// Concat

const concat = (arr1, arr2) =>{
    const mergedArr = [...arr1, ...arr2]
    console.log(mergedArr)
}

concat([1,2,3], [4,5,6])


// ConcatV2

const concatV2 = (arr1, arr2) =>{
    let start = arr1.length
    for(let i = 0; i < arr2.length; i++){
        arr1[start++] = arr2[i]
    }
    return arr1
}

console.log(concatV2([4,5,6], [7,8,9]))
