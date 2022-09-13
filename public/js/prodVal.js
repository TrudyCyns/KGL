// INITIALISING...
// Produce form
const pdtNameField = document.querySelector("#pdt-name");
const byrNameField = document.querySelector("#dlr-name");
const pdTypeField = document.querySelector("#pd-type");
const pdTimeField = document.querySelector("#pd-time");
const dlrTypeField = document.querySelector("#dlr-type");
const ptelNoField = document.querySelector("#ptel-no");
const tonnageField = document.querySelector("#ton-field");

// Regexp
const letters = /^[A-Za-z\s]+$/;
const num = /^[0-9]+$/;
const alpnum = /^[a-zA-Z0-9-.,\s]+$/;
const ninExp = /^[A-Z0-9]+$/;

// Create Element
const errDiv = document.createElement("p");

// Style Element
errDiv.style.color = "red";
errDiv.style.fontSize = "13px";
const bdrStyle = "2px solid red";

// PROCUREMENT FORM
// Validating Produce Name
const pdtVal = () => {
  const pdtName = document.produce.prodname;
  if (pdtName.value.match(alpnum)) {
    return true;
  }
  pdtName.focus();
  pdtName.style.border = bdrStyle;
  errDiv.textContent = `Name must be made of alphanumeric characters.`;
  pdtNameField.appendChild(errDiv);
};
// Product Time
const timeVal = () => {
  const time = document.produce.prodtime;
  if (time.value == "") {
    time.focus();
    time.style.border = "2px red solid";
    errDiv.textContent = "You must choose an option.";
    pdTimeField.appendChild(errDiv);
    return false;
  }
  return true;
};
// Product Type
const typeVal = () => {
  const type = document.produce.prodtype;
  if (type.value == "") {
    type.focus();
    type.style.border = "2px red solid";
    errDiv.textContent = "You must choose an option.";
    pdTypeField.appendChild(errDiv);
    return false;
  }
  return true;
};
// Dealer Type
const dlrTypeVal = () => {
  const type = document.produce.dlrtype;
  if (type.value == "") {
    type.focus();
    type.style.border = "2px red solid";
    errDiv.textContent = "You must choose an option.";
    dlrTypeField.appendChild(errDiv);
    return false;
  }
  return true;
};
// Tonnage
const tonVal = () => {
  const type = document.produce.dlrtype;
  const tonnage = document.produce.tonnage;
  if (type.value == "Individual") {
    if (tonnage.value >= 1000) {
      return true;
    }
    tonnage.focus();
    tonnage.style.border = bdrStyle;
    errDiv.textContent = "Individuals must supply at least 1000 kgs of produce";
    tonnageField.appendChild(errDiv);
    return false;
  }
  return true;
};

// Validating Dealer's Name
const dlrVal = (min) => {
  const byrName = document.produce.dlrname;
  if (byrName.value.match(alpnum) && byrName.value.length > 2) {
    return true;
  }
  byrName.focus();
  byrName.style.border = bdrStyle;
  errDiv.textContent = `Name must be made of more than ${min} alphanumeric characters.`;
  byrNameField.appendChild(errDiv);
  return false;
};
// Validating Contact field.
const ptelNoVal = () => {
  const tel = document.produce.telno;
  const teLen = tel.value.length;

  if (teLen == 10 && tel.value.match(num)) {
    return true;
  }
  tel.style.border = bdrStyle;
  tel.focus();
  errDiv.textContent = "Format: 0701234567";
  ptelNoField.appendChild(errDiv);
  return false;
};
