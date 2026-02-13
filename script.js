const textArray = [
  "I analyze data.",
  "I build predictive models.",
  "I turn insights into strategy."
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  if (i < textArray.length) {
    if (!isDeleting && j <= textArray[i].length) {
      currentText = textArray[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = textArray[i].substring(0, j--);
    }

    document.getElementById("typing").textContent = currentText;

    if (j === textArray[i].length) isDeleting = true;
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i++;
    }

    setTimeout(type, 100);
  }
}

type();

function toggle(element) {
  const p = element.querySelector("p");
  p.classList.toggle("hidden");
}

function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}
