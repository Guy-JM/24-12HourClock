const time = document.querySelector(".clock");
let twelvedHour = true;

const twentyfourhourbtn = document.querySelector(".TFbtn");
twentyfourhourbtn.addEventListener("click", () => {
  twelvedHour = false;
  document.querySelector(".active").classList.remove("active");
  twentyfourhourbtn.classList.add("active");
});
const twelvehourbtn = document.querySelector(".OTbtn");
twelvehourbtn.addEventListener("click", () => {
  twelvedHour = true;
  document.querySelector(".active").classList.remove("active");
  twelvehourbtn.classList.add("active");
});

const RNtime = () => {
  let today = new Date(),
    h = today.getHours(),
    m = today.getMinutes(),
    s = today.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  if (twelvedHour && h > 12) {
    h = h - 12;
  }

  time.innerText = h + ":" + m + ":" + s;

  console.log("running");
};
setInterval(RNtime, 1000);
RNtime();
