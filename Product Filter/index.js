const buttons = document.querySelectorAll(".btn");
const boxes = document.querySelectorAll(".box");
const search = document.querySelector("#search");

search.addEventListener("keyup", (e) => {
  text = e.target.value.toLowerCase().trim();
  boxes.forEach((box) => {
    data = box.dataset.item;
    if (data.includes(text)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
  buttons.forEach((btn) => {
    btn.classList.remove("btn-clicked");
  });
  buttons[0].classList.add("btn-clicked");
});
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    setActivebtn(e);
    const btnfilter = e.target.dataset.filter;

    boxes.forEach((box) => {
      if (btnfilter == "all") {
        box.style.display = "block";
      } else {
        const boxfilter = box.dataset.item;
        if (btnfilter == boxfilter) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      }
    });
  });
});

function setActivebtn(e) {
  buttons.forEach((btn) => {
    btn.classList.remove("btn-clicked");
  });
  e.target.classList.add("btn-clicked");
}
