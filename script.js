document.getElementById("close").addEventListener("click", e => {
  activateStealth();
});

function activateStealth() {
  document.addEventListener("contextmenu", event => event.preventDefault());
  document.getElementById("tip").style.display = "none";
  sleep(100).then(() => {
    document.body.style.cursor = "none";
  });
}

let percentage = 99;
updatePercent();
function updatePercent() {
  document.getElementById("percentage").innerHTML = percentage;
}

window.addEventListener("resize", e => {
  document.body.style.cursor = "auto";
});

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

document.addEventListener("keydown", e => {
  if (e.key == "F11") {
    activateStealth();
  } else if (e.key == "F5") {
  } else if (e.key == "ArrowUp") {
    if (percentage < 100) {
      percentage++;
      updatePercent();
    }
  } else if (e.key == "ArrowDown") {
    if (percentage > 0) {
      percentage--;
      updatePercent();
    }
  } else if (e.key == "F12") {
  } else {
    e.preventDefault();
  }
});
