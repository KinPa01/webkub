document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll("nav ul li a:not(:only-child)")
    .forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const siblingDropdown = this.nextElementSibling;
        if (
          siblingDropdown &&
          siblingDropdown.classList.contains("nav-dropdown")
        ) {
          siblingDropdown.classList.toggle("show");

          document
            .querySelectorAll(".nav-dropdown")
            .forEach(function (dropdown) {
              if (dropdown !== siblingDropdown) {
                dropdown.classList.remove("show");
              }
            });
        }
        e.stopPropagation();
      });
    });

  document.addEventListener("click", function () {
    document.querySelectorAll(".nav-dropdown").forEach(function (dropdown) {
      dropdown.classList.remove("show");
    });
  });
});

function toggleMenuIcon(el) {
  el.classList.toggle("change");
}

const menuIcon = document.getElementById("menuIcon");
const navParent = document.getElementById("navParent");

menuIcon.addEventListener("click", function () {
  if (navParent.style.display === "block") {
    navParent.style.display = "none";
  } else {
    navParent.style.display = "block";
  }
});

let currentNumber = 1;
const numberElement = document.getElementById("number");
let intervalId;

function changeNumber(amount) {
  currentNumber += amount;
  if (currentNumber > 30) {
    currentNumber = 1;
  } else if (currentNumber < 1) {
    currentNumber = 30;
  }
  numberElement.textContent = currentNumber;
}

function startChangingNumber(amount) {
  changeNumber(amount);
  intervalId = setInterval(() => changeNumber(amount), 100);
}

function stopChangingNumber() {
  clearInterval(intervalId);
}

document
  .querySelector(".arrow.left")
  .addEventListener("mousedown", function () {
    startChangingNumber(-1);
  });

document
  .querySelector(".arrow.right")
  .addEventListener("mousedown", function () {
    startChangingNumber(1);
  });

document.addEventListener("mouseup", stopChangingNumber);

// For touch devices
document
  .querySelector(".arrow.left")
  .addEventListener("touchstart", function () {
    startChangingNumber(-1);
  });

document
  .querySelector(".arrow.right")
  .addEventListener("touchstart", function () {
    startChangingNumber(1);
  });

document.addEventListener("touchend", stopChangingNumber);

numberElement.addEventListener("click", function () {
  handleNumberClick();
});

document.querySelector(".square").addEventListener("wheel", function (event) {
  event.preventDefault();
  if (event.deltaY > 0) {
    changeNumber(1);
  } else {
    changeNumber(-1);
  }
});

function handleNumberClick() {
  if (currentNumber === 1) {
    window.location.href = "Chooseprofile1.html";
  } else if (currentNumber === 29) {
    window.location.href = "Chooseprofile.html";
  }
}
