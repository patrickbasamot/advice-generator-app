const slipNumber = document.querySelector('.slip-number');
const adviceContainer = document.querySelector('.advice');
const nextQuote = document.querySelector('.next-quote');



//Onclick next random 
nextQuote.addEventListener('click',() => fetchAdvice().catch( error => {console.error(error);}));








async function fetchAdvice(){
    const response = await fetch('https://api.adviceslip.com/advice');
    let data = await response.json();

    console.log(data);

    const {advice} = data.slip;
    
 
    //Fill the innerText of the called html tag selectors above 
    adviceContainer.innerText = "\""+ advice +"\"";
    slipNumber.innerText = "ADVICE"+" #"+data.slip.id;
}

fetchAdvice().catch( error => {console.error(error);});