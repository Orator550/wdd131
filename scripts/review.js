let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

const counter = document.querySelector("#reviewCounter");

counter.textContent = reviewCount;

const reviewText = reviewCount === 1 ? "review" : "reviews";

counter.parentElement.innerHTML = `You have completed <strong>${reviewCount} ${reviewText}.</strong>`;