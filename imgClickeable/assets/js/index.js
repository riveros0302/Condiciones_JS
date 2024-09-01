function imageClicked() {
  const image = document.getElementById("clickimage");

  if (image.style.border) {
    image.style.border = "";
  } else {
    image.style.border = "2px solid red";
    image.style.borderRadius = "6%";
  }
}
