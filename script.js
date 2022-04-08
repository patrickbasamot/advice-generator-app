 const slipNumber = document.querySelector('.slip-number');
const adviceContainer = document.querySelector('.advice');
const nextQuote = document.querySelector('.next-quote');

nextQuote.addEventListener('click',() => fetchAdvice().catch( error => {console.error(error);}));








async function fetchAdvice(){
    const response = await fetch('https://api.adviceslip.com/advice');
    let data = await response.json();

    console.log(data);

    const {advice} = data.slip;
    
    console.log(advice);

    console.log(data.slip.advice);
    adviceContainer.innerText = "\""+ advice +"\"";
    slipNumber.innerText = "Advice"+" #"+data.slip.id;
}

fetchAdvice().catch( error => {console.error(error);});