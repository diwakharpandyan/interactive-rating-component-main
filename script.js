const ratings = document.querySelectorAll(".rating");

ratings.forEach((rating)=>{
rating.addEventListener("click", ()=>{
    document.querySelector(".rating-active")?.classList.remove("rating-active");
rating.classList.add("rating-active");
});
});

const submit = document.querySelector(".submit-button");

submit.addEventListener("click", ()=>{
submit.classList.add("submit-button-active");
const selectedRating = document.querySelector('.rating-active').innerHTML;
document.querySelector('.selected-rating').innerHTML = "You selected" + " " + selectedRating + " " + "out of 5";
document.getElementById('rating-state').style.display = 'none';
document.getElementById('thank-you-state').style.display = 'block';
});



