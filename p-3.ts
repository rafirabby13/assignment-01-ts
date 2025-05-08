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

    const res = concatenateArrays(["a", "b"], ["c"], ['2', '45']);  
    console.log(res)
}