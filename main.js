
let ratingButtons = document.querySelectorAll('.btn-container button');
let mainCard = document.querySelector('.card');
let thankYouCard = document.querySelector('.thank-you-card');
let span = document.querySelector('.rating-value');
let submitBtn = document.querySelector('.submit-button');

Array.from(ratingButtons).forEach(btn => {
    btn.addEventListener('click', (e)=> {
        const rating = e.target.textContent;
        span.textContent = rating;
        btn.classList.toggle("active");
    })
})


submitBtn.addEventListener("click", (e)=> {
    mainCard.setAttribute("hidden", "true");
    thankYouCard.setAttribute("style", "display: initial");
})