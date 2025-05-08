{
    function concatenateArrays<T>(...arrays: T[][]): T[]{
       let concateArray: T[] = []
        arrays.map(array=>{
            // console.log(array)
            concateArray.push(...array)

        })
        // console.log(concateArray)
        return concateArray

    
    }

    const res = concatenateArrays([1, 2], [3, 4], [5]);  
    console.log(res)
}