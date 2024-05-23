let prog = document.querySelectorAll(".circle_bar");
let prog_val = document.querySelectorAll(".prog_val");

prog.forEach((prog, index) => {
  let val = 0;
  let interval;

  prog.addEventListener("mouseover", () => {
    clearInterval(interval);
    interval = setInterval(() => {
      if (val >= 0 && val < 90) {
        val++;
        prog.style.background = `conic-gradient(rgb(250, 250, 250) ${
          val * 3.6
        }deg, #0e1f34 0deg)`;
        prog_val[index].innerText = `${val}%`;
      }

      if (val == 90) {
        clearInterval(interval);
      }
    }, 10);
  });
  prog.addEventListener("mouseout", () => {
    clearInterval(interval);
    interval = setInterval(() => {
      val--;

      prog.style.background = `conic-gradient(rgb(250, 250, 250) ${
        val * 3.6
      }deg, #0e1f34 0deg)`;
      prog_val[index].innerText = `${val}%`;

      if (val <= 0) {
        clearInterval(interval);
      }
    }, 10);
  });
});

let icon = document.querySelectorAll(".btn_icon");
let bar = document.querySelectorAll(".bar");

icon.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    bar[index].style.width = "80%";
    bar[index].style.transition = "0.5s  ease-in";
  });
  icon.addEventListener("blur" , () => {

    bar[index].style.width = "0%";
    bar[index],style.transition = "0.5s  ease-in";
  })
});


