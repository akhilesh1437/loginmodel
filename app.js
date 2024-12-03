/* Created by Tivotal */

let wrapper = document.querySelector(".wrapper");
let signup_link = document.querySelector(".signup-link");
let login_link = document.querySelector(".login-link");

let modalSilder = document.querySelector("#modalSilder2");
let modalSilder2 = document.querySelector(".modalSilder3");


signup_link.addEventListener("click", () => {
  wrapper.classList.add("active");
});

login_link.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

modalSilder.addEventListener("click", () => {
  wrapper.classList.add("OnclickModal");
});

modalSilder2.addEventListener("click", () => {
  wrapper.classList.remove("OnclickModal");
});



