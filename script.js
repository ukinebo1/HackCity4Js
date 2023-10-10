// Grading System:
//  Write a function that takes a student's score as an argument and returns "Pass"
//  if the score is greater than or equal to 60, and "Fail" otherwise.

function studentScore(score) {
  if (score >= 60) {
    // console.log('pass')
    return "Pass";
  } else {
    return "Fail";
  }
}
console.log(studentScore(30));

//  Temperature Converter:
// Write a function that converts a temperature in Celsius to Fahrenheit.
// If the input temperature is in Celsius, use the
// formula: Fahrenheit = (Celsius * 9/5) + 32. If the input is in Fahrenheit, return it as is.

function tempConverter(temp, value) {
  if (value == "Celsius") {
    let newFahrenheit = (temp * 9) / 5 + 32;
    return newFahrenheit;
  } else if (value == "Fahrenheit") {
    return temp;
  } else {
    return "Enter a valid temperature value";
  }
}
console.log(tempConverter(20, "Celsius"));

// User Role Assignment:
// Write a function that takes a user's role as an argument. If the role is "admin," return "Full Access,"
// and if it's "user," return "Limited Access." For any other role, return "No Access."

function hierachy(userRole) {
  if (userRole === "admin") {
    return "Full Access";
  } else if (userRole === "user") {
    return "Limited Access";
  } else {
    return "No Access.";
  }
}
console.log(hierachy("user"));

// Even or Odd:
// Write a function that takes an integer as an argument and returns "Even" if the number is even and
// "Odd" if it's odd. -->

function evenOdd(para) {
  if (para % 2 == 0) {
    return `Even`;
  } else {
    return "Odd";
  }
}
console.log(evenOdd(19));

//Book Object:

// Create a JavaScript object called Book with the following properties:
// title (string): The title of the book.
// author (string): The author of the book.
// isRead (boolean): A flag indicating whether the book has been read (default to false).

let Book = {
  title: "",
  author: "",
  isRead: false,
};

//Library Array:

// Create an empty array called library to represent the library's collection of books

let library = [];

// Functions:

// Create the following functions:
// addBook(title, author): This function should accept title and author as parameters and create a new Book object with these properties. Add the new book to the library array.


function addBook(title, author){
  newBookObj = Object.create(Book);
  newBookObj.title =title;
  newBookObj.author =author;

  library.push(newBookObj)

  
}console.log(addBook('Things Fall Apart', 'Chianu Achebe'))
// removeBook(title): This function should accept the title of a book and remove it from the library array.
function removeBook(title){
  //look fr the location of the book
  let bookIndex =library.findIndex(item => item.title =title)

  if (bookIndex !== -1){
    library.splice(bookIndex, 1)
    console.log(`${title} has been removed`)
  }else{
    `${title} was not found`
  }
}console.log(removeBook())

// listBooks(): This function should display a list of all books in the library, including their titles, authors, and whether they have been read.

function displayBooks(){
  console.log('This is the list of books in the Library')
  //loop tru the array
  library.forEach((item, index)=>{
    //display each book you come across
    console.log(`Book : ${index +1}`);
    console.log(`Title: ${item.title}`);
    console.log(`Author: ${item.author}`)
    console.log(`isBookRead: ${item.isRead ? "Yes" :"No"} `)

  })
}displayBooks()
// markAsRead(title): This function should accept the title of a book and update its isRead property to true.

function markAsRead(title){
  let findTheBook =library.find(book =>book.title ===title)

  if(findTheBook){
    findTheBook.isRead = true
    console.log(`${title} has been read`)
  }else{
    console.log(`${title} has not been read`)
  }
}console.log(markAsRead())
// Menu Loop:

// Create a loop that displays a menu to the user with the following options:

// "1. Add a book"
// "2. Remove a book"
// "3. List all books"
// "4. Mark a book as read"
// "5. Exit"
// Prompt the user to enter their choice (a number from 1 to 5).

// Based on the user's choice, call the corresponding function from step 3.

// Continue displaying the menu until the user selects "5. Exit" to exit the program.

// Example Usage:
// Here's an example of how the program might work:

// Welcome to the Library Management System!

// 1. Add a book
// 2. Remove a book
// 3. List all books
// 4. Mark a book as read
// 5. Exit

// Enter your choice (1-5): 1
// Enter the title of the book: "The Great Gatsby"
// Enter the author of the book: "F. Scott Fitzgerald"

// Book added successfully!

// 1. Add a book
// 2. Remove a book
// 3. List all books
// 4. Mark a book as read
// 5. Exit

// Enter your choice (1-5): 3
// List of books in the library:
// 1. Title: "The Great Gatsby" - Author: "F. Scott Fitzgerald" - Read: No

// 1. Add a book
// 2. Remove a book
// 3. List all books
// 4. Mark a book as read
// 5. Exit

// Enter your choice (1-5): 5
// Goodbye!
