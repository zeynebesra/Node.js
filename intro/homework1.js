/*
Ödev 1
Node.JS Komut Satırı Kullanımı
Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. 
Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. 
Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.
 */

let arguments = process.argv.slice(2);

const circleArea = (r) => {
  const PI = Math.PI;
  const result = PI * r ** 2;
  console.log("Yarıçapı " + r + " olan dairenin alanı: " + result);
};

//console.log("Dairenin alanı:");
circleArea(arguments[0] * 1);
