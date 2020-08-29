/** @format */

"use strict"; //엄밀한 에러체크 하게끔 설정

{
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const modal = document.getElementById("modal");
  const mask = document.getElementById("mask");

  open.addEventListener("click", () => {
    modal.classList.remove("hidden");
    mask.classList.remove("hidden");
  });

  close.addEventListener("click", () => {
    modal.classList.add("hidden");
    mask.classList.add("hidden");
  });

  // 회색배경 클릭시 모달창 닫힘 (정확히 말하면 위로 ㅋㅋ)
  mask.addEventListener("click", () => {
    // modal.classList.add("hidden");
    // mask.classList.add("hidden");
    close.click();
  });
}
