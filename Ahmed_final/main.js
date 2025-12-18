const tips = [
  "Tip: Start light. Focus on form.",
  "Tip: Warm up for 5 minutes before lifting.",
  "Tip: Add reps first, then add weight.",
  "Tip: Sleep matters. Recovery builds strength."
];

const tipBtn = document.getElementById("tipBtn");
const tipText = document.getElementById("tipText");
let tipIndex = 0;

if (tipBtn && tipText) {
  tipBtn.addEventListener("click", () => {
    tipIndex = (tipIndex + 1) % tips.length;
    tipText.textContent = tips[tipIndex];
  });
}

$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").slideToggle("fast");
  });
});

