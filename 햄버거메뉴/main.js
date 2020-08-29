/** @format */

"use strict";

{
  const open = document.getElementById("open");
  const overlay = document.querySelector(".overlay");
  const close = document.getElementById("close");
  open.addEventListener("click", () => {
    overlay.classList.add("show"); //클릭시 메뉴 나옴.
    open.classList.add("hide"); //클릭하면 메뉴 나오는 버튼 사라지게
  });
  close.addEventListener("click", () => {
    overlay.classList.remove("show"); //클릭시 메뉴 나옴.
    open.classList.remove("hide"); //클릭하면 메뉴 나오는 버튼 사라지게
  });
}
