const adviceIdElement = document.getElementById('advice-id');
const adviceTextElement = document.getElementById('advice-text');
const newAdviceButton = document.getElementById('advice-btn');

async function fetchAdvice() {

    newAdviceButton.disabled = true;
    adviceTextElement.innerText = 'Loading...';
    
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();

        adviceIdElement.innerText = `"Advice #${data.slip.id}`;
        adviceTextElement.innerText = `"${data.slip.advice}"`;
    } catch (error) {
        adviceTextElement.innerText = "Ops! Something went wrong. Please try again later.";
    }

    setTimeout(() => {
        newAdviceButton.disabled = false;
    }, 2000);
}

newAdviceButton.addEventListener('click', fetchAdvice);