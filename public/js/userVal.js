const userVal = () => {
  // Error Fields
  const errFName = document.getElementById("errFName");
  const errLName = document.getElementById("errLName");
  const errTelNo = document.getElementById("errTelNo");
  const errRole = document.getElementById("errRole");
  const errBranch = document.getElementById("errBranch");
  const errPwd = document.getElementById("errPwd");
  const errPwdConf = document.getElementById("errPwdConf");
  // InputFields
  const fstName = document.register.firstname;
  const lstName = document.register.lastname;
  const role = document.register.role;
  const branch = document.register.branch;
  const tel = document.register.telno;
  const pwd = document.register.password;
  const pwdConf = document.register.passconf;

  // Regexp
  const letters = /^[A-Za-z\s]+$/;
  const num = /^[0-9]+$/;

  const errStyle = "font-size:13px; color:red;";
  const bdrStyle = "2px solid red";

  // First Name Validation.
  if (fstName.value.length == 0) {
    fstName.focus();
    fstName.style.border = bdrStyle;
    errFName.style = errStyle;
    errFName.innerHTML = "Field must not be left empty.";
  } else if (fstName.value.length < 3 || fstName.value.length > 15) {
    fstName.focus();
    fstName.style.border = bdrStyle;
    errFName.style = errStyle;
    errFName.innerHTML = `Name must be between 3 and 15 characters.`;
  } else if (!fstName.value.match(letters)) {
    fstName.focus();
    fstName.style.border = bdrStyle;
    errFName.style = errStyle;
    errFName.innerHTML = "Name must be made of strictly alphabet characters.";
  }

  // Last Name Validation
  if (lstName.value.length == 0) {
    lstName.focus();
    lstName.style.border = bdrStyle;
    errLName.style = errStyle;
    errLName.innerHTML = "Field must not be left empty.";
  } else if (lstName.value.length < 3 || lstName.value.length > 15) {
    lstName.focus();
    lstName.style.border = bdrStyle;
    errLName.style = errStyle;
    errLName.innerHTML = "Name must be between 3 and 15 characters.";
  } else if (!lstName.value.match(letters)) {
    lstName.focus();
    lstName.style.border = bdrStyle;
    errLName.style = errStyle;
    errLName.innerHTML = "Name must be made of strictly alphabet characters.";
  }

  //  Role Validation
  if (role.value == "") {
    role.focus();
    role.style.border = bdrStyle;
    errRole.style = errStyle;
    errRole.innerHTML = "You must choose an option.";
  }

  //  Branch Validation
  if (branch.value == "") {
    branch.focus();
    branch.style.border = bdrStyle;
    errBranch.style = errStyle;
    errBranch.innerHTML = "You must choose an option.";
  }

  // Contact Validation
  if (!tel.value.length == 10 && !tel.value.match(num)) {
    tel.focus();
    tel.style.border = bdrStyle;
    errTelNo.style = errStyle;
    errTelNo.innerHTML = "Format: 0701234567";
  }

  // Password Validation
  if (pwd.value.length == 0) {
    pwd.focus();
    pwd.style.border = bdrStyle;
    errPwd.style = errStyle;
    errPwd.innerHTML = "Field must not be left empty.";
  } else if (pwd.value.length < 6) {
    pwd.focus();
    pwd.style.border = bdrStyle;
    errPwd.style = errStyle;
    errPwd.innerHTML = "Password must be more than 6 characters.";
  }

  // Password Confirmation
  if (pwdConf.value !== pwd.value) {
    pwdConf.focus();
    pwdConf.style.border = bdrStyle;
    errPwdConf.style = errStyle;
    errPwdConf.innerHTML = `Passwords don't match.`;
  }
  Event.preventDefault();
};
