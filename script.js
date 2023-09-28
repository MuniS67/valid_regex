let forma = document.forms.login;
let inps = document.querySelectorAll("input");

let pattern = {
  name: /^[a-z ,.'-]+$/i,
  age: /^\S[0-9]{0,3}$/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
};

inps.forEach((inp) => {
  inp.onkeyup = () => {
    if (pattern[inp.name].test(inp.value)) {
      inp.parentElement.classList.remove("error");
    } else {
      inp.parentElement.classList.add("error");
    }
  };
});

forma.onsubmit = (event) => {
  event.preventDefault();

  let error = false;
  inps.forEach((inp) => {
    if (
      inp.parentElement.classList.contains("requared") &&
      inp.value.length === 0
    ) {
      inp.parentElement.classList.add("error");
      error = true;
      inp.nextElementSibling.innerHTML = "Does not fill";
    } else {
      inp.parentElement.classList.remove("error");
      inp.nextElementSibling.innerHTML = "Need to fill";
    }
  });
  if (error === false) {
    submit(forma);
  } else {
    null;
  }
};

function submit(form) {
  let user = {};

  let fm = new FormData(form);

  fm.forEach((value, key) => {
    user[key] = value;
  });
  console.log(user);
  form.reset();
}
