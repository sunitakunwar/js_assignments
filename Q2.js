// Q2. Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".
function circleProp(radius =0){
    let area = Math.PI*radius*radius;
    let circumference = 2*Math.PI*radius;
    return "The area is " + area+ " the circumference is" + circumference;
}
console.log(circleProp(5));