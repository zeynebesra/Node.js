// Promise bir işlemin sonucunu temsil eden bir Javascript nesnesidir.

//Promise nesnesi Resolve ve Reject adında iki tane parametre alır ve olumlu durumlarda Resolve ile belirtilen işlemlerin,
// olumsuz durumlarda da Reject ile belirtilen işlemlerin yapılacağına dair güvence verir.
// Promise yapısı olumlu sonuçları .then(), olumsuz sonuçları da .catch() ile karşılar.

// const promise1 = new Promise((resolve, reject) => {
//   //reject('BAĞLANTI HATASI');
//   resolve("VERILER ALINDI");
// });

// promise1
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const books = [
  { name: "Kitap 1", author: "Yazar 1" },
  { name: "Kitap 2", author: "Yazar 2" },
  { name: "Kitap 3", author: "Yazar 3" },
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.name);
  });
};

const addBook = (newBook) => {
  const promise1 = new Promise((resolve, reject) => {
    books.push(newBook);
    //reject('BIR HATA OLUSTU');
  });

  return promise1;
};

addBook({ name: "Kitap 4", author: "Yazar 4" })
  .then(() => {
    console.log("YENI LISTE");
    listBooks();
  })
  .catch((error) => {
    console.log(error);
  });

listBooks();
