// concatenate method
const arr1 = [2,1,3,4]
const arr2 = [11,12]
const arr3 = arr1.concat(arr2)
console.log(arr3)

//spread method
const arr4 = [...arr1, ...arr2]
console.log(arr4)

// flat opeartor 
const newarr = [3,4, [5,6,9], 10, [11,[8,3,0]]]
const real_newarr = newarr.flat(1)
console.log(real_newarr)

