function pressButton() {
  const audio = document.getElementById("click-sound");
  audio.currentTime = 0;
  audio.play();
  const messageBox = document.getElementById("message");
  const form = document.getElementById("winner-form");
  const share = document.getElementById("share");
  const chance = 124500000;
  const isWinner = Math.floor(Math.random() * chance) === 0;

  const button = document.getElementById("button");
  button.style.pointerEvents = "none";

  if (isWinner) {
    messageBox.textContent = "アナタノユメカナウ";
    messageBox.className = "show winner";
    form.classList.remove("hidden");
  } else {
    messageBox.textContent = "ハズレ、アシタユメカナウ";
    messageBox.className = "show";
    share.classList.remove("hidden");

    const text = encodeURIComponent("#ユメボタン #ユメカナウ");
    document.getElementById("share-x").href = `https://twitter.com/intent/tweet?text=${text}`;
  }
}
