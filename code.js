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