// ¡Buena suerte!
const button = document.querySelector('.card__dice');
button.addEventListener("click", function() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        const advice = data.slip.advice;
        const id = data.slip.id;
        document.querySelector('.card__quote').textContent = advice;
        document.querySelector('.card__number').textContent = `Advice #${id}`;
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
})