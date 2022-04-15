const btnToggle = document.querySelector(".toggle__fill");

const checkBoxEl = document.querySelector(".toggle__input");

const inputSliderEl = document.querySelector(".input__slider");
const ProgressBarEl = document.querySelector(".progress-bar");

const planEl = document.querySelector(".price-plan");
const planAmountEl = document.querySelector(".price-box__plan-amount");
const planDurationEl = document.querySelector(".price-box__plan-duration");

// GLOBAL VARIABLES
let plan = {
  amountArr: [8, 12, 16, 24, 36],
  planVal: ["10k", "50k", "100k", "500k", "1m"],
};

// HELPER FUNCTION
const changePlan = function () {
  planAmountEl.textContent = `$${plan.amountArr[
    inputSliderEl.value - 1
  ].toFixed(2)}`;
  planEl.textContent = `${plan.planVal[inputSliderEl.value - 1]} pageviews`;
};
// CHAINGING PLAN
checkBoxEl.addEventListener("input", function () {
  if (this.checked) {
    plan.amountArr = [72, 108, 144, 216, 324];
    planDurationEl.textContent = "/Year";

    changePlan();
  } else {
    plan.amountArr = [8, 12, 16, 24, 36];
    planDurationEl.textContent = "/Month";

    changePlan();
  }
});

// Handling slider functionality
inputSliderEl.addEventListener("input", function () {
  // progress bar
  ProgressBarEl.style.width = `${(inputSliderEl.value - 1) * 25}%`;

  // main values
  changePlan();
});
