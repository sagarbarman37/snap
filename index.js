const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector(".close");
const slider = document.querySelector(".navbar-slider");
const body = document.querySelector("body");

let display = "none";
menuBtn.addEventListener("click", () => {
  if (display === "none") {
    slider.style.display = "flex";
  }
});

closeBtn.addEventListener("click", () => {
  closeFunc();
});

slider.addEventListener("click", (e) => {
  if (e.target == slider) {
    closeFunc();
  }
});

function closeFunc() {
  if (display === "none") {
    slider.style.display = "none";
  }
}

////////////////////////////feature///////////////////////////////

const downArrowOne = document.querySelector(".downArrowOne");
const downArrowTwo = document.querySelector(".downArrowTwo");
const features = document.querySelector(".features");
const company = document.querySelector(".company");

let opacity = 0;

downArrowOne.addEventListener("click", () => {
  if (opacity === 0) {
    features.style.opacity = "1";
    company.style.opacity = "0";
    opacity = 1;
  } else {
    features.style.opacity = "0";
    opacity = 0;
  }
});
downArrowTwo.addEventListener("click", () => {
  if (opacity === 0) {
    company.style.opacity = "1";
    features.style.opacity = "0";
    opacity = 1;
  } else {
    company.style.opacity = "0";
    opacity = 0;
  }
});

/*********************************************************/

const slidefeatureBox = document.querySelector(".features-slide");
const slideCompanyBox = document.querySelector(".company-slide");
const slideFeatures = document.querySelector(".features-li");
const slideCompany = document.querySelector(".company-li");

slideFeatures.addEventListener("click", () => {
  if (display === "none") {
    slidefeatureBox.style.display = "flex";
    display = "flex";
  } else {
    slidefeatureBox.style.display = "none";
    display = "none";
  }
});
slideCompany.addEventListener("click", () => {
  if (display === "none") {
    slideCompanyBox.style.display = "flex";
    display = "flex";
  } else {
    slideCompanyBox.style.display = "none";
    display = "none";
  }
});

/*************************Login btn***************************/
const offEye = document.querySelector(".offEye");
const onEye = document.querySelector(".onEye");
const password = document.querySelector("#password");

offEye.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    onEye.style.display = "block";
    offEye.style.display = "none";
  } else {
    password.type = "password";
  }
});

onEye.addEventListener("click", () => {
  if (password.type === "text") {
    password.type = "password";
    onEye.style.display = "none";
    offEye.style.display = "block";
  } else {
    password.type = "text";
  }
});

const loginBtn = document.querySelector("#login-btn");
const sliderLogin = document.querySelector("#slLogin");
const loginCloseBtn = document.querySelector(".login-close");
const loginContainer = document.querySelector(".login-container");

loginBtn.addEventListener("click", () => {
  if (display === "none") {
    loginContainer.style.display = "flex";
  }
});
sliderLogin.addEventListener("click", () => {
  if (display === "none") {
    loginContainer.style.display = "flex";
  }
});

loginCloseBtn.addEventListener("click", () => {
  closeLogin();
});

loginContainer.addEventListener("click", (e) => {
  if (e.target == loginContainer) {
    closeLogin();
  }
});

function closeLogin() {
  if (display === "none") {
    loginContainer.style.display = "none";
  }
}

/**********************Register*******************8*/

const regBtn = document.querySelector("#register-btn");
const regContainer = document.querySelector(".reg-container");
const regClose = document.querySelector(".reg-close");
const slRegBtn = document.querySelector("#slRegister");

regBtn.addEventListener("click", () => {
  if (display === "none") {
    regContainer.style.display = "flex";
  }
});
slRegBtn.addEventListener("click", () => {
  if (display === "none") {
    regContainer.style.display = "flex";
  }
});

regClose.addEventListener("click", () => {
  regCloseFunc();
});

regContainer.addEventListener("click", (e) => {
  if (e.target == regContainer) {
    regCloseFunc();
  }
});

function regCloseFunc() {
  if (display === "none") {
    regContainer.style.display = "none";
  }
}

const loginText = document.querySelector("#loginText");
const regText = document.querySelector("#regText");

regText.addEventListener("click", () => {
  if (display === "none") {
    regContainer.style.display = "flex";
    loginContainer.style.display = "none";
  }
});
loginText.addEventListener("click", () => {
  if (display === "none") {
    regContainer.style.display = "none";
    loginContainer.style.display = "flex";
  }
});
