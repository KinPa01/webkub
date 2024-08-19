document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("nav ul li a:not(:only-child)").forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const siblingDropdown = this.nextElementSibling;
            if (siblingDropdown && siblingDropdown.classList.contains("nav-dropdown")) {

                siblingDropdown.classList.toggle("show");

                document.querySelectorAll(".nav-dropdown").forEach(function(dropdown) {
                    if (dropdown !== siblingDropdown) {
                        dropdown.classList.remove("show");
                    }
                })
            }
            e.stopPropagation();
        })
    })

    document.addEventListener("click", function() {
        document.querySelectorAll(".nav-dropdown").forEach(function(dropdown) {
            dropdown.classList.remove("show");
        });
    })
})

function toggleMenuIcon(el) {
    el.classList.toggle("change");
}

const menuIcon = document.getElementById("menuIcon");
const navParent = document.getElementById("navParent");

menuIcon.addEventListener("click", function() {
    if (navParent.style.display === "block") {
        navParent.style.display = "none";
    } else {
        navParent.style.display = "block";
    }
})



let currentNumber = 1;
const numberElement = document.getElementById('number');

function changeNumber(amount) {
    currentNumber = Math.max(1, Math.min(30, currentNumber + amount));
    numberElement.textContent = currentNumber;
}

function handleScroll(event) {
    event.preventDefault();
    if (event.deltaY > 0) {
        changeNumber(1);
    } else {
        changeNumber(-1);
    }
}

function handleNumberClick() {

    if (currentNumber === 1) {
        window.location.href = 'Chooseprofile1.html';
    } else if (currentNumber === 29) {
        window.location.href = 'Chooseprofile.html';
    }
}

numberElement.addEventListener('click', handleNumberClick);
document.querySelector('.square').addEventListener('wheel', handleScroll);

