//Responsive Nav Bar

let hb = document.getElementById("hamburger");
let navlinks = document.getElementById("nav-ul");

function navmenu() {
  if (navlinks.style.display == "none") {
    navlinks.style.display = "block";
  } else {
    navlinks.style.display = "none";
  }
}

hb.addEventListener("click", navmenu);

function resetmenu() {
  if (window.innerWidth > 768) {
    navlinks.style.display = "flex";
  } else if (window.innerWidth <= 768) {
    navlinks.style.display = "none";
  }
}

window.addEventListener("resize", resetmenu);

// Counter

const counters = document.querySelectorAll(".number");

counters.forEach((counter) => {
  counter.innerText = 0;

  const updatecounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const inc = target / 65;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + inc)}`;
      setTimeout(updatecounter, 75);
    }
  };

  updatecounter();
});
