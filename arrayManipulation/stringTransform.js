// This is the String Transformation challenge



function transformString(string) {
    let result = string.replace(/\s+/g,''); //removes all the whitespace characters 
    const length = string.length;
    

    //check whether the length of a string is divisible by 3 without a remainder.
    if (length % 3 === 0) {
        // Reverse the entire string if it's true
        result = result.split('').reverse().join(''); 
    }
    

    //check whether the length of a string is divisible by 5 without a remainder.
    if (length % 5 === 0) {

        // Replace each character with its ASCII code if the condition is true
        result = result.split('').map(c => c.charCodeAt(0)).join(' '); 
    }
    
    return result;
}

// Test cases
const inputs = ["Hamburger", "Pizza", "Chocolate Chip Cookie"];
inputs.forEach(input => {
    const output = transformString(input);
    console.log(`Input: "${input}"`);
    console.log(`Output: "${output}"`);
    console.log();
});