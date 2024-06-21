// Q1 - Given an array of numbers, use the map function with an arrow
//  function to square each element of the array.

const Arr=[2, 3, 4, 5, 6, 8, 12, 45];
let sqr=Arr.map((num)=>{ return num*num})

console.log(sqr);


// Q3 Write a JavaScript function that takes a student's score as a parameter
// and returns their grade (A, B, C, D, or F) using a series of ternary operators..

function StudentScore(score){
    
    return (score >80)? 'A':
           (score >60)? 'B':
           (score >40)? 'C':
           (score >35)?'D' : 'F'
}
let Score = 45;
console.log("Your Score Grade is :- " + StudentScore(Score))


// Q3 - Create an object representing a car with properties like Company name, model, and year.
// Write a function to change the car's year property. Also use object destructuring to extract 
// and print the car's Model and Year.
let car = {
     companyName: "Toyota",
     model: "Corolla",
     year: 2015
 };

function changeYear(car, newYear){
     car.year=newYear
}

changeYear(car, 2020)

let { model, year}=car 
console.log(`model:${model}  year:${year}`)


// Q4.Given an array of numbers, use the filter function to create a new array 
// containing only the prime numbers.
let arr=[1, 3, 4, 5, 6, 7, 8, 9, 35, 23, 32, 44, 55]

let prime=arr.filter(
     (num)=>{
          return num%2===0;
     }
)

console.log(prime);

// Q5 -  State different use cases of map, filter and reduce functions.

// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.

// Define an asynchronous function to fetch data from the API
async function fetchData() {
     try {
        
         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
   
         
         
         if (!response.ok) {
             throw new Error('Network response was not ok ' + response.statusText);
         }
 
         
         const data = await response.json();
    
 
         
         console.log(data);
     } catch (error) {
         
         console.error('There has been a problem with your fetch operation:', error);
     }
 }
 

 fetchData();
 

// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.
const person = {
     name: "John Doe",
     address: {
         street: "123 Main St",
         city: "Anytown",
         state: "CA",
         zip: "12345"
     },
     contact: {
         phone: "555-1234",
         email: "john.doe@example.com"
     }
 };
 
 // Use optional chaining to safely access the phone number
 const phoneNumber = person.contact?.phone;
 
 // Output the phone number or a default message if it's not available
 console.log(phoneNumber ?? "Phone number is not available"); // Outputs: "555-1234"
 


