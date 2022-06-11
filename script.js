const btn = document.querySelector(".btn");

const aBtn = document.querySelector(".btn a");
const load = document.querySelector("iframe");
const mainBody = document.querySelector(".main-body");

btn.addEventListener("click", () => {
  aBtn.textContent = "Jazakumullahu Khairan for downloading";

  setTimeout(() => {
    aBtn.textContent = "Download Now";
  }, 2000);
});

window.addEventListener("load", (event) => {
  setTimeout(() => {
    load.style.display = "none";
    mainBody.style.display = "unset";
  }, 2000);
});
