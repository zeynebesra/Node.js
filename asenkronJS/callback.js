// const books = [
//   { name: "Kitap 1", author: "Yazar 1" },
//   { name: "Kitap 2", author: "Yazar 2" },
//   { name: "Kitap 3", author: "Yazar 3" },
// ];

// const listBooks = () => {
//   books.map((book) => {
//     console.log(book.name);
//   });
// };

// const addBook = (newBook) => {
//   books.push(newBook);
// };

// addBook({ name: "Kitap 4", author: "Yazar 4" });

// listBooks();

let x = 5;
console.log("1. gelen veri: ", x);

setTimeout(() => {
  x = x + 5;
  console.log("2. gelen veri: ", x); //callback function
}, 5000);

x = x + 5;
console.log("3. gelen veri: ", x);
