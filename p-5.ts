{
    function processValue(value: string | number): number{
        if (typeof value == 'string') {
            return value.length   
        }
        
            return value *2
        
    
    }
   const res =  processValue('5hello5'); // Output: 5
   console.log(res)
// processValue(10);      // Output: 20
}