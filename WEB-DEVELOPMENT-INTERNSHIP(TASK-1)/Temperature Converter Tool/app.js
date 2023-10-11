/* ------ Digital Clock feature ------ */
function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  //  if h == 0 than show 12
  if (h == 0) {
    h = 12;
  }

  //  add "PM" if h > 12
  if (h >= 12) {
    h = h - 12;
    session = "PM";
  }

  //  Add "0" before h,m,s if equals to 0-9 all
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("digitalClock").innerHTML =
    h + ":" + m + ":" + s + " " + session;

  setTimeout(showTime, 1000);
}

showTime();

/* ------ script ------ */
let celsiusField = document.querySelector("#celsius");
let degree = document.querySelector("#degree");
let tempType = document.querySelector("#temp-type");
let convertBtn = document.querySelector("#convert-btn");

/* ------ window loading reset ------ */
window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();

  /* ------ add loading feature ------ */
  convertBtn.innerHTML =
    "<span><i class='fa fa-spinner fa-spin'></i>Converting..</span>";
  setTimeout(() => {
    convertBtn.innerHTML = "<span>Convert</span>";
  }, 1000);
});

function convertToCelsius() {
  let inputValue = degree.value;

  setTimeout(() => {
    if (tempType.value === "fahrenheit") {
      let fahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;C`;
    } else if (tempType.value === "kelvin") {
      let kelvinToCelsius = inputValue - 273.15;
      celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;K`;
    } else if (tempType.value === "celsius") {
      let celsiusToFahrenheit = (inputValue * 9) / 5 + 32;
      celsiusField.innerHTML = `${celsiusToFahrenheit.toFixed(4)} &deg;F`;
    } else {
      celsiusField.innerHTML = `You have Enter Invalid Input!!!`;
    }
  }, 1200);
}
