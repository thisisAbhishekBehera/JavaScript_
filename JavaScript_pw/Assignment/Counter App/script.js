// Getting the html elements

const decreamentBtn = document.getElementById("decreamentBtn")
const increamentBtn = document.getElementById("increamentBtn")
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");

// for decreament button click

decreamentBtn.addEventListener("click" , () => {
    const value = Number(displayValue.innerText)
    if(value > 0) {
        displayValue.innerText = value - 1;
    } else {
        alert("Negative value not allowed")
    }
})

// for increment button click
increamentBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value >= 10) {
      alert("10+ values are not allowed");
    } else {
      displayValue.innerText = value + 1;
    }
  });
  
  // for reset button click
  resetBtn.addEventListener("click", () => {
    displayValue.innerText = 0;
  });