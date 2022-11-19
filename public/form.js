const form = document.getElementById("contact-us-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  //   formData.append("name", document.querySelector('input[name="name"]').value);

  console.log(
    "kent this is js",
    document.querySelector('input[name="name"]').value
  );
  fetch("/testform", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => console.log(response.json()))
    .catch((error) => console.log(error));
});
