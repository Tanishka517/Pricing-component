const toggle = document.getElementById("billingToggle");
const basic_price = document.getElementById("basic-price");
const pro_price = document.getElementById("pro-price");
const master_price = document.getElementById("master-price");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    basic_price.textContent = "$199.99";
    pro_price.textContent = "$249.99";
    master_price.textContent = "$399.99";
  } else {
    basic_price.textContent = "$19.99";
    pro_price.textContent = "$29.99";
    master_price.textContent = "$39.99";
  }
});