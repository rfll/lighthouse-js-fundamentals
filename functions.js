function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

/* finish the function expression */
emotions("happy", function(x) {
  let y = "";
  for (i = 0; i < x; i++) {
      y = y + "ha";
  }
  y = y + "!"
  return y;
}
);


function greeting (name = 'guest') {
  console.log("Hello, " + name + "." );
}

greeting ('YY');
greeting ();


function rectangleArea (length, width) {
 let area = length * width;
 console.log(area);
 return area;
}

rectangleArea(4, 5);


