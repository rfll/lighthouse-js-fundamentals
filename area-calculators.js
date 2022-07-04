const calculateRectangleArea = function (length, width) {
  let rectangle = length * width;
  if (rectangle <= 0) {
    return undefined;
  }
    else {return rectangle};
  return rectangle;
}

const calculateTriangleArea = function (base, height) {
  let triangle = (base * height) / 2;
    if (triangle <= 0) {
      return undefined;
    }
      else {return triangle};
  return triangle;
}

const calculateCircleArea = function (radius) {
  let circle = Math.PI * Math.pow(radius, 2);
  if (radius <= 0) {
    return undefined;
  }
    else {return circle};
  return circle;
}


console.log(calculateRectangleArea(10, 5));
console.log(calculateRectangleArea(1.5, 2.5));
console.log(calculateRectangleArea(10, -5));

console.log(calculateTriangleArea(10, 5));
console.log(calculateTriangleArea(3, 2.5));
console.log(calculateTriangleArea(10, -5));

console.log(calculateCircleArea(10));
console.log(calculateCircleArea(3.5));
console.log(calculateCircleArea(-1));