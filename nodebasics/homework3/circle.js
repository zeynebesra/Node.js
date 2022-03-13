//fonksiyonlar

function circleArea(r) {
  console.log("Circle Area : ", Math.PI * (r * r));
}

function circleCircumference(r) {
  console.log("Circle Circumference : ", 2 * Math.PI * r);
}

//module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
module.exports = { circleArea, circleCircumference };
