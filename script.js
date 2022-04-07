 const slipNumber = document.querySelector('.slip-number');
const adviceContainer = document.querySelector('.advice');








async function fetchAdvice(){
    const response = await fetch('https://api.adviceslip.com/advice');
    let data = await response.json();

    console.log(data);

    const {advice} = data.slip;
    
    console.log(advice);

    console.log(data.slip.advice);
    adviceContainer.innerText = advice;
    slipNumber.innerText += " #"+data.slip.id;
}

fetchAdvice().catch( error => {console.error(error);});