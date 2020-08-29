/** @format */

"use strict"; //엄밀한 에러체크

{
  const menuItems = document.querySelectorAll(".menu li a");
  const contents = document.querySelectorAll(".content");

  menuItems.forEach((clickeditem) => {
    clickeditem.addEventListener("click", (e) => {
      e.preventDefault();
      menuItems.forEach((item) => {
        item.classList.remove("active");
      });
      clickeditem.classList.add("active");

      contents.forEach((content) => {
        content.classList.remove("active");
      });
      // 클릭된 메뉴항목에 대응하는 content 의 요소를 취득하고 싶으므로,
      // id 를 넣어놨으므로, getElementById를 사용하면 OK 입니다.
      // 클릭된 메뉴 항목의 dataset.id로 취득
      document.getElementById(clickeditem.dataset.id).classList.add("active");
    });
  });
}
