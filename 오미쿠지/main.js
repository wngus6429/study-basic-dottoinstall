/** @format */

"use strict";

//정수나 변수의 유효험위를 한정하고 싶으니, {} 로 가둔다
{
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = "대길";
      //5%로 대길
    } else if (n < 0.2) {
      btn.textContent = "중길";
      //15%
    } else {
      btn.textContent = "흉길";
      //80%
    }
    //const results = ["대길", "대길", "대길", "랜덤"];
    //btn.textContent = results[Math.floor(Math.random() * results.length)];
    //이게 좋네 , 제일 짧고

    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    // 이건 2번쨰로 좋네
  });
}
