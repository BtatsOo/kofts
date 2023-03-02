x = document.getElementById("audio");
y = document.getElementById("el7mar");
function myfunction() {
  val = document.querySelector("#input");
  message = document.querySelector("#test");
  message.innerHTML = "welcome " + val.value + " in 7meer company! ";
  if (val.value === "واعدو") {
    x.play();
  } else if (val.value) {
    y.play();
    document.getElementById("img").style.display = "block";
  }
}
