// Q7. The Pluralizer

// Write a function named pluralize that: takes 2 arguments, a noun and a number. returns the number and pluralized form, like "5 cats" or "1 dog".

// For example:

// pluralize('cat', 1) // Outputs: 1 cat
// pluralize('cat', 2) // Outputs: 2 cats

function pluralize(noun = "cat", number = 1){
    if (number>1){
        console.log(number + " " + noun + "s")
    }
    else{
        console.log(number + " " + noun)

    }
}

console.log(pluralize("bat",10))
console.log(pluralize("cat", 2))
console.log("panda", 1)
