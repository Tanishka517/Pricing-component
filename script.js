const toggle = document.getElementbyID("billingToggle");
const basic_price = document.getElementbyID("basic-price");
const pro_price = document.getElementbyID("pro-price");
const master_price = document.getElementbyID("master-price");

toggle.addEventListener("change", () => {
if(toggle.checked){

basic_price.textContent="$199.99 ";
pro_price.textContent="$249";
master_price.textContent="$399";
    }

    else{
basic_price.textContent="$19.99";
pro_price.textContent="$29.99";
master_price.textContent="$39.99";

    }




}
)
