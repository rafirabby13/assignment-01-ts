{
    function formatString(input: string, toUpper?: boolean): string{

        if (typeof toUpper === "undefined") {
            console.log(typeof toUpper)
            return input.toUpperCase()
        }
        if (toUpper) {
            return input.toUpperCase()
        }
        return input.toLocaleLowerCase()
        
        
    
    }

    const result = formatString("Hello", false); 
    console.log(result)
}