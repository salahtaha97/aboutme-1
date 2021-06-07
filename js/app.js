'use strict'

let userName = prompt('whats your name ?');
alert("welcome" +userName);

let pizzaFlav = prompt('do i like pizza with painapple ?').toLowerCase();
//YES 
//Yes yes yEs yeS

console.log(pizzaFlav);

 //pizzaFlav = pizzaFlav.toLowerCase();






if(pizzaFlav === 'yes' || pizzaFlav === 'y') {
    alert("false never like it ");
  } else if (pizzaFlav === 'no' || pizzaFlav === 'n') {
    alert("true");
  } else {
    alert("Pease type (yes) or (no) or (y) or (n)");
  }


  let gaming = prompt('do i like gaming?');
  
  console.log(gaming);

  
if(gaming === 'yes' || gaming === 'y') {
  alert("sure i do ");
} else if (gaming === 'no' || gaming === 'n') {
  alert("false");
} else {
  alert("Pease type (yes) or (no) or (y) or (n)");
}

let rage = prompt('do i rage so fast ?');
console.log(rage);


if(rage === 'yes' ||rage === 'y') {
  alert("true a little bit ");
} else if (rage === 'no' || rage=== 'n') {
  alert("not right");
} else {
  alert("Pease type (yes) or (no) or (y) or (n)");
}

let city = prompt('am i from zarqa city?');
console.log(city);


if(city === 'yes' || city === 'y') {
  alert("true ");
} else if (city === 'no' || city === 'n') {
  alert("false");
} else {
  alert("Pease type (yes) or (no) or (y) or (n)");
}

let heights = prompt('do you think iam afraid from heights?');
console.log(heights);


if(heights === 'yes' || heights === 'y') {
  alert("true ");
} else if (heights === 'no' || heights === 'n') {
  alert("false");
} else {
  alert("Pease type (yes) or (no) or (y) or (n)");
}

