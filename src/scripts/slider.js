var slideIndex = 3;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("cardSlide");
  if (n > x.length) { slideIndex = 3 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "flex";
  x[slideIndex - 2].style.display = "flex";
  x[slideIndex - 3].style.display = "flex";
}