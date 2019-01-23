// Q5. The MixUP

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

// mixUp('mix', 'pod'); // Outputs: 'pox mid'
// mixUp('dog', 'dinner'); // Outputs:  'dig donner'

function mixUp(str1="aaaa", str2="bbbb"){
    if (str1.length>=2 && str2.length>=2){
        var temp1 = str1.slice(0,2)
        var temp2 = str2.slice(0,2)
        var mixed1 = temp2+str1.slice(2, str1.length)
        var mixed2 = temp1+str2.slice(2, str2.length)
        var final = mixed1 + " " + mixed2
        console.log(final)


    }
    else{
        console.log("The length of string must be more than two")
    }

}

mixUp("","")
mixUp("Bantan","Sonyeondon")