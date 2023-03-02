x = document.getElementById("audio");
y = document.getElementById("el7mar");
function myfunction() {
  val = document.querySelector("#input");
  message = document.querySelector("#test");
  message.innerHTML = "welcome " + val.value;
  if (val.value === "واعدو") {
    x.play();
  } else if ((val.value = "Waleed-Alaa")) {
    y.play();
    document.getElementById("img").style.display = "block";
  }
}
