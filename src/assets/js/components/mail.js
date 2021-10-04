const formContacts = document.querySelector(".contacts__form");
const formCalc = document.querySelector(".calc-form");
const formProject = document.querySelector(".consultation__form");

if (formContacts) {
  formContacts.addEventListener("submit", formSend);
  formCalc.addEventListener("submit", formSend);
}

if (formProject) {
  formProject.addEventListener("submit", formSend);
}

async function formSend(e) {
  e.preventDefault();

  let formData = new FormData(this);

  let response = await fetch("sendmail.php", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    let result = await response.json();

    this.reset();

    openModalForm();
  } else {
    alert("Ошибка");
  }
}
