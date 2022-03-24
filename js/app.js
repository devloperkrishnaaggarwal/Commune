//Responsive Nav Bar

let hb = document.getElementById("hamburger");
let navlink = document.getElementById("nav-ul");
let navuls = document.querySelectorAll(".nav-ul-li");
console.log(navuls);
function navmenu() {
  if (navlink.style.display == "none") {
    navlink.style.display = "block";
  } else {
    navlink.style.display = "none";
  }
}

hb.addEventListener("click", navmenu);

function resetmenu() {
  if (window.innerWidth > 768) {
    navlink.style.display = "flex";
  } else if (window.innerWidth <= 768) {
    navlink.style.display = "none";
  }
}

navuls.forEach((navul) => {
  navul.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      navlink.style.display = "none";
    }
  });
});

window.addEventListener("resize", resetmenu);

function navlinks() {
  if (window.innerWidth > 768) {
    navlink.style.display = "none";
  }
}

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
      setTimeout(updatecounter, 125);
    }
  };

  updatecounter();
});
