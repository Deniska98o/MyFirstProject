function readMore() {
   var dots = document.getElementById("dots");
   var more = document.getElementById("more");
   var btn = document.getElementById("btn");


   if (dots.style.display === "none") {
      dots.style.display = "inline";
      btn.innerHTML = "Подробнее";
      more.style.display = "none";
   } else {
      dots.style.display = "none";
      btn.innerHTML = "Скрыть";
      more.style.display = "inline";
   }

}
function myFunctions() {
   var dots = document.getElementById("dots");
   var moreHistory = document.getElementById("moreHistory");
   var btnHistory = document.getElementById("btnHistory");

   if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnHistory.innerHTML = "Подробнее";
      moreHistory.style.display = "none";
   } else {
      dots.style.display = "none";
      btnHistory.innerHTML = "Скрыть";
      moreHistory.style.display = "inline";
   }
}
function myFunction() {
   var dots = document.getElementById("dots");
   var moreText = document.getElementById("moreText");
   var btnText = document.getElementById("btnText");

   if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Подробнее";
      moreText.style.display = "none";
   } else {
      dots.style.display = "none";
      btnText.innerHTML = "Скрыть";
      moreText.style.display = "inline";
   }
}

