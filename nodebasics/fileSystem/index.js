const fs = require("fs");

//DOSYA OKUMA

// fs.readFile("password.txt", "utf8", (err, data) => {
//   // callback fonksiyonu ile birlikte çalıştırıyoruz.
//   if (err) console.log(err); // hata kontrolü

//   console.log("---------------------------");
//   console.log(data); // okunan verinin çıktısının alınması
//   console.log("---------------------------");
//   console.log("Dosya okundu.");
//   console.log("---------------------------");
// });

//DOSYA YAZMA

// fs.writeFile("example.txt", "Kodluyoruzzzz", "utf8", (err) => {
//   if (err) console.log(err);
//   console.log("Dosya başarılı bir şekilde oluşturuldu.");
// });

// fs.writeFile("example.json", '{"name": "Zey", "age": 24}', "utf8", (err) => {
//   if (err) console.log(err);
//   console.log("Dosya başarılı bir şekilde oluşturuldu.");
// });

//VERİ EKLEME

// fs.appendFile("example.txt", "\n YENI TEXT", "utf8", (err) => {
//   if (err) console.log(err);
//   console.log("Yeni veri başarılı bir şekilde oluşturuldu.");
// });

//DOSYA SİLME

// fs.unlink("example.json", (err) => {
//   if (err) console.log(err);
//   console.log("DOSYA SİLİNDİ.");
// });

// KLASÖR OLUŞTURMA

// fs.mkdir("uploads/img", { recursive: true }, (err) => {
//   if (err) console.log(err);
//   console.log("KLASÖR OLUŞTURULDU.");
// });

//KLASÖR SİLME

fs.rmdir("uploads", { recursive: true }, (err) => {
  if (err) console.log(err);
});
