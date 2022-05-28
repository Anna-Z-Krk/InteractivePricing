// Here are the different page view ranges and the corresponding monthly price totals:
// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month
// If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.
// onmousemove="setValue()"

const sliderInput = document.querySelector(".top__slider-input");
const pageViews = document.querySelector(".top__pageviews-amount-no");
const sliderProgressBar = document.querySelector(".top__slider-progressbar");
const price = document.querySelector("#price");
const timeSlider = document.querySelector(".top__time-slider-chackbox");
const btnStartTrial = document.querySelector(".bottom__btn");
const pageViewsValues = ["10K", "50K", "100K", "500K", "1M"];
const priceMth = [8, 12, 16, 24, 36];
const sliderProbressBarWidth = ["0%", "25%", "50%", "75%", "100%"];
// timeSlider.checked = false;

const progressBar = () => {
  if (sliderInput.value == 1) {
    sliderProgressBar.style.width = "0%";
    pageViews.innerHTML = "10K";
    if (timeSlider.checked !== false) {
      price.innerHTML = 8 * 0.75;
    } else {
      price.innerHTML = 8;
    }
  }
  if (sliderInput.value == 2) {
    sliderProgressBar.style.width = "25%";
    pageViews.innerHTML = "50K";
    if (timeSlider.checked !== false) {
      price.innerHTML = 12 * 0.75;
    } else {
      price.innerHTML = 12;
    }
  }
  if (sliderInput.value == 3) {
    sliderProgressBar.style.width = "50%";
    pageViews.innerHTML = "100K";
    if (timeSlider.checked !== false) {
      price.innerHTML = 16 * 0.75;
    } else {
      price.innerHTML = 16;
    }
  }
  if (sliderInput.value == 4) {
    sliderProgressBar.style.width = "75%";
    pageViews.innerHTML = "500K";
    if (timeSlider.checked !== false) {
      price.innerHTML = 24 * 0.75;
    } else {
      price.innerHTML = 24;
    }
  }
  if (sliderInput.value == 5) {
    sliderProgressBar.style.width = "100%";
    pageViews.innerHTML = "1M ";
    if (timeSlider.checked !== false) {
      price.innerHTML = 36 * 0.75;
    } else {
      price.innerHTML = 36;
    }
  }
};

const discount = () => {
  progressBar();
};

timeSlider.addEventListener("change", discount);
// const discount = () => {
//   if ((timeSlider.checked == true)) {
//     price.innerHTML * 0.75;
//   } else {
//     price.innerHTML;
//   }
// };

// for (let i = 0; i < 5; i++) {
//   if ((timeSlider.checked = false)) {
//     console.log(pageViewsValues[i]);
//     console.log(priceMth[i]);
//     console.log(sliderProbressBarWidth[i]);
//   } else {
//     console.log(pageViewsValues[i]);
//     console.log(priceMth[i] * 0.75);
//     console.log(sliderProbressBarWidth[i]);
//   }
// }

// console.log(sliderInput.value);
// console.log(price.innerHTML * 0.75);
// console.log(timeSlider.checked);

sliderInput.addEventListener("input", progressBar);

btnStartTrial.addEventListener("click", function () {
  if (confirm("Do you want to start trial?")) {
    alert("You have properly subbmited for trial. Welcome!");
  } else {
    alert("If you decide to do so, come back here. You are always welcome!");
  }
});

// slider.oninput = function () {
//   selector.style.left = this.value;
//   progressBar.style.width = this.value;
// };

// console.log(progressBar.value);
