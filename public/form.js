/**************************
 * Alert for status update
 **************************/
const alertPlaceholder = document.getElementById("updateAlert");

const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div><svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#${type}Svg"/></svg>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

/**************************
 * Handle Form Submission
 **************************/
const forms = document.querySelectorAll(".statusForm");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    console.log("this is ew", e);
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch("/statusform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          alert("Woohoo, status updated!", "success");
        } else {
          alert("Something went wrong!", "danger");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong!", "danger");
      });
  });
});
