// Selecting Elements

const loginEl = document.querySelector(".user-wrap .login-btn");
const overlayEl = document.querySelector(".overlay");
const loginRegisterFormEl = document.querySelector(".login-register");

const loginBtnEl = document.querySelector(".login-register_btn .login-btn");
const registerBtnEl = document.querySelector(
  ".login-register_btn .register-btn"
);

const formLoginEl = document.querySelector(".login-register .form-login");
const formRegisterEl = document.querySelector(".login-register .form-register");

const eyeOnEl = document.querySelectorAll(".fa-eye");
const eyeOffEl = document.querySelectorAll(".fa-eye-slash");

const inputPasswordLoginEl = document.querySelector(".password-login");
const inputPasswordRegisterEl = document.querySelector(".password-register");
const inputEmailLoginEl = document.querySelector(".email-login");
const inputEmailRegisterEl = document.querySelector(".email-register");
const inputFullNameRegisterEl = document.querySelector(".text-register");

const formLoginBtnEl = document.querySelector(".form-login .btn");
const formRegisterBtnEl = document.querySelector(".form-register .btn");

const errorPasswordLoginEl = document.querySelector(".error-password-login");
const errorEmailLoginEl = document.querySelector(".error-email-login");
const errorEmailRegisterEl = document.querySelector(".error-email-register");
const errorPasswordRegisterEl = document.querySelector(
  ".error-password-register"
);
const errorFullNameRegisterEl = document.querySelector(
  ".error-fullname-register"
);

const notExistAlert = document.querySelector(".not-exist");

// Function

const formOn = function () {
  overlayEl.classList.remove("hidden");
  loginRegisterFormEl.classList.remove("hidden");
};

const formOff = function () {
  overlayEl.classList.add("hidden");
  loginRegisterFormEl.classList.add("hidden");
};

const switchLogin = function () {
  formLoginEl.classList.remove("hidden");
  formRegisterEl.classList.add("hidden");
  loginBtnEl.classList.add("active");
  registerBtnEl.classList.remove("active");
};

const switchRegister = function () {
  formLoginEl.classList.add("hidden");
  formRegisterEl.classList.remove("hidden");
  loginBtnEl.classList.remove("active");
  registerBtnEl.classList.add("active");
};

const handleChangeInputLogin = function () {
  if (inputEmailLoginEl.value === "") {
    errorEmailLoginEl.classList.remove("hidden");
    inputEmailLoginEl.classList.add("error-input");
  } else {
    errorEmailLoginEl.classList.add("hidden");
    inputEmailLoginEl.classList.remove("error-input");
  }

  if (inputPasswordLoginEl.value === "") {
    inputPasswordLoginEl.classList.add("error-input");
    errorPasswordLoginEl.classList.remove("hidden");
  } else {
    errorPasswordLoginEl.classList.add("hidden");
    inputPasswordLoginEl.classList.remove("error-input");
  }
};

const handleChangeInputRegister = function () {
  if (inputEmailRegisterEl.value === "") {
    errorEmailRegisterEl.classList.remove("hidden");
    inputEmailRegisterEl.classList.add("error-input");
  } else {
    errorEmailRegisterEl.classList.add("hidden");
    inputEmailRegisterEl.classList.remove("error-input");
  }

  if (inputPasswordRegisterEl.value === "") {
    inputPasswordRegisterEl.classList.add("error-input");
    errorPasswordRegisterEl.classList.remove("hidden");
  } else {
    errorPasswordRegisterEl.classList.add("hidden");
    inputPasswordRegisterEl.classList.remove("error-input");
  }

  if (inputFullNameRegisterEl.value === "") {
    inputFullNameRegisterEl.classList.add("error-input");
    errorFullNameRegisterEl.classList.remove("hidden");
  } else {
    errorFullNameRegisterEl.classList.add("hidden");
    inputFullNameRegisterEl.classList.remove("error-input");
  }
};

const defaultAllLogin = function () {
  inputPasswordLoginEl.value = "";
  inputPasswordLoginEl.classList.remove("error", "error-input");
  errorPasswordLoginEl.classList.add("hidden");

  inputEmailLoginEl.value = "";
  inputEmailLoginEl.classList.remove("error", "error-input");
  errorEmailLoginEl.classList.add("hidden");

  notExistAlert.classList.add("hidden");
};

const defaultAllRegister = function () {
  inputPasswordRegisterEl.value = "";
  inputPasswordRegisterEl.classList.remove("error", "error-input");
  errorPasswordRegisterEl.classList.add("hidden");

  inputEmailRegisterEl.value = "";
  inputEmailRegisterEl.classList.remove("error", "error-input");
  errorEmailRegisterEl.classList.add("hidden");

  inputFullNameRegisterEl.value = "";
  inputFullNameRegisterEl.classList.remove("error", "error-input");
  errorFullNameRegisterEl.classList.add("hidden");

  notExistAlert.classList.add("hidden");
};

// On/Off Form

loginEl.addEventListener("click", formOn);
overlayEl.addEventListener("click", formOff);

// Switching login/register tabs

loginBtnEl.addEventListener("click", switchLogin);
registerBtnEl.addEventListener("click", switchRegister);

// On/Off Password Hidden

eyeOnEl.forEach(function (item) {
  item.addEventListener("click", function () {
    item.classList.add("hidden");
    eyeOffEl.forEach(function (item) {
      item.classList.remove("hidden");
    });
    inputPasswordLoginEl.type = "text";
    inputPasswordRegisterEl.type = "text";
  });
});

eyeOffEl.forEach(function (item) {
  item.addEventListener("click", function () {
    item.classList.add("hidden");
    eyeOnEl.forEach(function (item) {
      item.classList.remove("hidden");
    });
    inputPasswordLoginEl.type = "password";
    inputPasswordRegisterEl.type = "password";
  });
});

//  Checking info on input

inputEmailLoginEl.addEventListener("input", handleChangeInputLogin);

inputPasswordLoginEl.addEventListener("input", handleChangeInputLogin);

inputPasswordRegisterEl.addEventListener("input", handleChangeInputRegister);

inputEmailRegisterEl.addEventListener("input", handleChangeInputRegister);

inputFullNameRegisterEl.addEventListener("input", handleChangeInputRegister);

// Checking info on blur

inputEmailLoginEl.addEventListener("blur", handleChangeInputLogin);

inputPasswordLoginEl.addEventListener("blur", handleChangeInputLogin);

inputPasswordRegisterEl.addEventListener("blur", handleChangeInputRegister);

inputEmailRegisterEl.addEventListener("blur", handleChangeInputRegister);

inputFullNameRegisterEl.addEventListener("blur", handleChangeInputRegister);

// Checking info on click btn

formLoginBtnEl.addEventListener("click", handleChangeInputLogin);

formRegisterBtnEl.addEventListener("click", handleChangeInputRegister);

// Reset on changing tab

registerBtnEl.addEventListener("click", defaultAllLogin);

loginBtnEl.addEventListener("click", defaultAllRegister);

// Reset on new turn

loginEl.addEventListener("click", defaultAllLogin);

loginEl.addEventListener("click", defaultAllRegister);

// Check account not exist

formLoginBtnEl.addEventListener("click", function () {
  if (inputEmailLoginEl.value !== "" && inputPasswordLoginEl.value !== "") {
    notExistAlert.classList.remove("hidden");
  }
});

inputEmailLoginEl.addEventListener("input", function () {
  let value = inputEmailLoginEl.value;
  if (!value.includes("@") || value.includes("@@")) {
    errorEmailLoginEl.textContent = "Vui lòng nhập đúng định dạng email";
    errorEmailLoginEl.classList.remove("hidden");
  }
});
