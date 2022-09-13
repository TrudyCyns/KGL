// Initialising...
// Sales form
const spdtNameField = document.querySelector("#spdt-name");
const sbyrNameField = document.querySelector("#byr-name");
const agtNameField = document.querySelector("#agt-name");

// Regexp
const letters = /^[A-Za-z ]+$/;
const num = /^[0-9]+$/;
const alpnum = /^[a-zA-Z0-9-., ]+$/;
const ninExp = /^[A-Z0-9]+$/;

// Create Element
const errDiv = document.createElement("p");

// Style Element
errDiv.style.color = "red";
errDiv.style.fontSize = "13px";
const bdrStyle = "2px solid red";

// SALES FORM
// Validating Produce Name
const spdtVal = () => {
  const pdtName = document.sales.prodname;
  if (pdtName.value == "") {
    pdtName.focus();
    pdtName.style.border = "2px red solid";
    errDiv.textContent = "You must choose an option.";
    spdtNameField.appendChild(errDiv);
    return false;
  }
};
// Buyer's Name
const byrVal = (min) => {
  const byrName = document.sales.byrname;
  if (byrName.value.match(alpnum) && byrName.value.length > 2) {
    return true;
  }
  byrName.focus();
  byrName.style.border = bdrStyle;
  errDiv.textContent = `Name must be made of more than ${min} alphanumeric characters.`;
  sbyrNameField.appendChild(errDiv);
  return false;
};
// Agent's Name
const agtVal = (min) => {
  const agtName = document.sales.agtname;
  if (agtName.value.match(alpnum) && agtName.value.length > 2) {
    return true;
  }
  agtName.focus();
  agtName.style.border = bdrStyle;
  errDiv.textContent = `Name must be made of more than ${min} alphanumeric characters.`;
  agtNameField.appendChild(errDiv);
  return false;
};

// Amount Paid
const calcAmtPaid = () => {
  const tonnage = document.sales.tonnage.value;
  const unit = document.sales.unit.value;
  const amount = tonnage * 1 * (unit * 1);
  document.sales.amtpaid.value = amount;
};
