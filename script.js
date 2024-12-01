function updateTotal() {
  const unit1 = document.getElementById("unit1");
  const unit2 = document.getElementById("unit2");
  const unit3 = document.getElementById("unit3");
  const total = document.getElementById("total");

  document.querySelectorAll(".option").forEach((option) => {
    option.classList.remove("expanded");
  });

  if (unit1.checked) {
    total.textContent = "$10.00 USD";
    document.getElementById("option1").classList.add("expanded");
  } else if (unit2.checked) {
    total.textContent = "$18.00 USD";
    document.getElementById("option2").classList.add("expanded");
  } else if (unit3.checked) {
    total.textContent = "$24.00 USD";
    document.getElementById("option3").classList.add("expanded");
  } else {
    total.textContent = "$0.00 USD";
  }
}
