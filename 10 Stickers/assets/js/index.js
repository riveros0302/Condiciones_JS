function calculateStickers() {
  const sticker1 = parseInt(document.getElementById("sticker1").value) || 0;
  const sticker2 = parseInt(document.getElementById("sticker2").value) || 0;
  const sticker3 = parseInt(document.getElementById("sticker3").value) || 0;

  const totalStickers = sticker1 + sticker2 + sticker3;
  const resultElement = document.getElementById("result");

  if (totalStickers <= 10) {
    resultElement.textContent = `Llevas ${totalStickers} stickers`;
  } else {
    resultElement.textContent = "Llevas demasiados stickers";
  }
}
