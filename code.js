const calculate = document.getElementById('calculate');
calculate.addEventListener('click',()=>{
    let minutes = document.getElementById('minutes').value;
    let total = (minutes * 60 );
    document.getElementById('display').innerHTML =
    total +" Seconds" ;
}
);

