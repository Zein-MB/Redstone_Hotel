let openMenu = document.querySelector(".open-menu i"),
  closeMenu = document.querySelector(".close-menu i"),
  menu = document.getElementById("menu"),
  goTop = document.querySelector(".goTop"),
  header = document.querySelector("header"),
  signupForm = document.getElementById("signup"),
  loginForm = document.getElementById("login"),
  forms = document.querySelectorAll("form"),
  goSign = document.getElementById("goSign"),
  goLog = document.getElementById("goLog"),
  signupInputs = document.querySelectorAll("form:first-of-type input"),
  loginInputs = document.querySelectorAll("form:last-of-type input"),
  SresetBtn = document.querySelector("form:first-of-type .reset"),
  LresetBtn = document.querySelector("form:last-of-type .reset");

openMenu.addEventListener("click", () => {
  if (!menu.classList.contains("opened")) {
    menu.classList.add("opened");
    openMenu.className = "fa fa-close";
  } else {
    menu.classList.remove("opened");
    openMenu.className = "fa fa-navicon";
  }
});

// GoTop button behaviour
window.onscroll = () => {
  if (parseInt(window.scrollY) >= 1100) {
    goTop.style.display = "flex";
    header.style.boxShadow = "0 5px 15px 0 rgb(0 0 0 / 40%)";
  } else {
    goTop.style.display = "none";
    header.style.boxShadow = "unset";
  }
  if (parseInt(window.scrollY) >= 540) {
    header.style.boxShadow = "0 5px 15px 0 rgb(0 0 0 / 40%)";
  } else {
    header.style.boxShadow = "unset";
  }
};

window.onload = () => {
  goTop.style.display = "none";
};

goTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// GoSign and goLog behaviour
goLog.addEventListener("click", () => {
  if (!signupForm.classList.contains("closed")) {
    signupForm.classList.add("closed");
    loginForm.classList.remove("closed");
  } else {
    signupForm.classList.remove("closed");
    loginForm.classList.add("closed");
  }
});

goSign.addEventListener("click", () => {
  if (!loginForm.classList.contains("closed")) {
    loginForm.classList.add("closed");
    signupForm.classList.remove("closed");
  } else {
    loginForm.classList.remove("closed");
    signupForm.classList.add("closed");
  }
});

// ResetBtn behaviour
SresetBtn.addEventListener("click", () => {
  signupInputs.forEach((input) => {
    input.value = "";
  });
});

LresetBtn.addEventListener("click", () => {
  loginInputs.forEach((input) => {
    input.value = "";
  });
});

forms.forEach((form) => {
  form.onsubmit = (e) => {
    e.preventDefault();
  };
});
