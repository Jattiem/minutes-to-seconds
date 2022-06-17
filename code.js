const calculate = document.getElementById('calculate');
calculate.addEventListener('click',()=>{
    let minutes = document.getElementById('minutes').value;
    let total = (minutes * 60 );
    document.getElementById('display').innerHTML =
    total +" Seconds" ;
}
);

const calculate2 = document.getElementById('calculate2');

calculate2.addEventListener('click',()=>{
    let base = document.getElementById('base').value;
    let height = document.getElementById('height').value;
    let total = (0.5 *(base * height) );
    document.getElementById('display2').innerHTML =
    total + " meters" ;
}
);

const calculate3 = document.getElementById('calculate3');
calculate3.addEventListener('click',()=>{
    let age = document.getElementById('age').value;
    let total = (age * 365);
    document.getElementById('display3').innerHTML = total + 'days.';
}
);

// let numbers = [10, 8, 3, 2,20, 7, 5, 9];
// console.log(`Highest number: ${Math.max.apply(0, numbers)}`);
// console.log(`Highest number (Ex2): ${Math.max(...numbers)}`);
// //
// console.log(`Lowest number: ${Math.min.apply(0, numbers)}`);
// console.log(`Math.PI: ${Math.PI}`);
// Ceiling and floor
// Ceil: Round number to the nearest number
// console.log(`ceil(89.45): ${Math.ceil(89.45)}`);
// console.log(`ceil(-12.89): ${Math.ceil(-12.89)}`);
// console.log(`ceil(4.1): ${Math.ceil(4.1)}`);
// floor
// console.log(`floor(89.45): ${Math.floor(89.45)}`);
// console.log(`floor(89.95): ${Math.floor(89.95)}`);
// // round
// console.log(`round(89.45): ${Math.round(89.45)}`);
// console.log(`round(89.95): ${Math.round(89.95)}`);
// ABS = Absolute
// console.log(`ABS: 7: ${Math.abs(7)}`);
// console.log(`ABS: -7: ${Math.abs(-7)}`);
// console.log(`ABS: -50: ${Math.abs(-50)}`);
// console.log(`SQRT 16: ${Math.sqrt(16)}`);
// console.log(`SQRT 2: ${Math.SQRT2 }`);
//Min/Max
let numbers = [1, 2, 3,4,5,6,7,8,9,10];

let min = Math.min(...numbers);  
let max = Math.max(...numbers);

console.log(min);
console.log(max);
/******************* */
//hexToRgb
function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if(result){
        let r= parseInt(result[1], 16);
        let g= parseInt(result[2], 16);
        let b= parseInt(result[3], 16);
        return r+","+g+","+b;
    } 
    return null;};

    console.log(hexToRgb("#0a3678"));
    /************ */
    //RgbToHex
    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      };
    
      console.log(rgbToHex(10, 54, 120));
      /********************** */
      //nextNumber
      const array = [1, 2, 3,4,5,6,7];

      const iterator = array.values();
      let one = iterator.next().value;
      let two = iterator.next().value;
    
    console.log(one);
    console.log(two);