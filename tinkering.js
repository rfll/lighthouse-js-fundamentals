function multiply(a, b) {
  return a * b;
}

const result = multiply(2, 4);

console.log(result);

let price = 15.00 //price of hammer
let money = 10.00 //amount of money I have
if (money >= price) {console.log('Buy the hammer!')}
  else {console.log('Don\'t buy the hammer!')};


  let weather = 'sunny';
  if (weather === 'snow') {console.log('bring a coat');
}   else if (weather === 'rain') {'bring a rain jacket';
}   else {console.log('wear what you have on');
}


let room = 'billiards';
let suspect = 'Parkes';
let weapon = '';
let solved = false;

if (room === 'billiards' && suspect === 'Parkes') {
  weapon = 'pool stick'; solved = true;
}

if (solved === true) {
  console.log('we got it!');
}

let education = "no high school diploma";
let salary = 0

switch (education) {
  case "no high school diploma" : salary += 25636;
  break;
  case "a high school diploma" : salary += 35256;
  break;
  case "an Associate's degree" : salary += 41496;
  break;
  case "a Bachelor's degree" : salary += 59124;
  break;
  case "a Master's degree" : salary += 69732;
  break;
  case "a Professional degree" : salary += 89960;
  break;
  case "a Doctoral degree" : salary += 84396;
  break;
}
console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
