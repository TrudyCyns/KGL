const credVal = () => {
  // Input Fields
  const byrName = document.csales.byrname;
  const nin = document.csales.nin;
  const location = document.csales.location;
  const tel = document.csales.telno;
  const type = document.csales.pdtype;
  const pdtName = document.csales.prodname;
  const agtName = document.csales.agtname;

  // Error Fields
  const errByrName = document.querySelector("#errByrName");
  const errNin = document.querySelector("#errNin");
  const errLocation = document.querySelector("#errLocation");
  const errProdType = document.querySelector("#errProdType");
  const errProdName = document.querySelector("#errProdName");
  const errAgtName = document.querySelector("#errAgtName");
  const errTelNo = document.querySelector("#errTelNo");

  // Regexp
  const num = /^[0-9]+$/;
  const alpnum = /^[a-zA-Z0-9-.,\s]+$/;
  const ninExp = /^[A-Z0-9]+$/;

  const errStyle = "font-size:13px; color:red;";
  const bdrStyle = "2px solid red";

  // Buyer's Name
  if (!byrName.value.match(alpnum) && !(byrName.value.length > 2)) {
    byrName.focus();
    byrName.style.border = bdrStyle;
    errByrName.style = errStyle;
    errByrName.innerHTML =
      "Name must be made of more than 2 alphanumeric characters.";
  }

  // NIN Validation
  if (!nin.value.match(ninExp) && nin.value.length !== 14) {
    nin.focus();
    nin.style.border = bdrStyle;
    errNin.style = errStyle;
    errNin.innerHTML = "NIN is of 14 characters (numbers and capital letters).";
  }

  // Location Validation
  if (!location.value.match(alpnum) && location.value.length < 2) {
    location.focus();
    location.style.border = bdrStyle;
    errLocation.style = errStyle;
    errLocation.innerHTML =
      "Location must be made of more than 2 alphanumeric characters.";
  }

  // Validating Contact field.
  if (tel.value.length !== 10 && !tel.value.match(num)) {
    tel.style.border = bdrStyle;
    tel.focus();
    errTelNo.style = errStyle;
    errTelNo.innerHTML = "Format: 0701234567";
  }

  // Produce Type Validation
  if (type.value == "") {
    type.focus();
    type.style.border = bdrStyle;
    errProdType.style = errStyle;
    errProdType.innerHTML = "You must choose an option.";
  }

  // Produce Name Validation
  if (pdtName.value == "") {
    pdtName.focus();
    pdtName.style.border = bdrStyle;
    errProdName.style = errStyle;
    errProdName.innerHTML = "You must choose an option.";
  }

  // Sales Agent's Name Validation
  if (!agtName.value.match(alpnum) && agtName.value.length < 3) {
    agtName.focus();
    agtName.style.border = bdrStyle;
    errAgtName.style = errStyle;
    errAgtName.innerHTML = `Name must be made of more than 3 alphanumeric characters.`;
  }

  Event.preventDefault();
};
