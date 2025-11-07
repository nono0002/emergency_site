// Select the form
const form = document.querySelector("#webform");

// Select all output fields
const navnOutput = document.querySelector("#navn_output");
const emailOutput = document.querySelector("#email_output");
const katastrofeOutput = document.querySelector("#katastrofe_output");
const alvorlighedOutput = document.querySelector("#alvorlighed_output");
const hvorOutput = document.querySelector("#hvor_output");
const datoOutput = document.querySelector("#dato_output");
const beskrivelseOutput = document.querySelector("#beskrivelse_output");

// Prevent default invalid popup (optional, nice touch)
function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

// Handle form submission
function handleSubmit(event) {
  event.preventDefault(); // stop page reload

  // Collect form data
  const formData = new FormData(form);

  // Get values from fields
  const navn = formData.get("name") || "—";
  const email = formData.get("email") || "—";

  // Get all selected katastrofer (can be multiple checkboxes)
  const katastrofer = formData.getAll("katastrofe");
  let katastrofeText = katastrofer.join(", ");
  // If "andet" is checked and user wrote something
  const andetBeskrivelse = formData.get("andet-beskrivelse");
  if (andetBeskrivelse) {
    katastrofeText += katastrofeText
      ? `, ${andetBeskrivelse}`
      : andetBeskrivelse;
  }
  if (!katastrofeText) katastrofeText = "—";

  // Get severity (radio)
  const alvorlighed = formData.get("severity") || "—";

  // Get location (select)
  const hvor = formData.get("location") || "—";

  // Get date
  const dato = formData.get("date") || "—";

  // Get description (textarea)
  const beskrivelse = formData.get("details") || "—";

  // Insert into summary section
  navnOutput.textContent = navn;
  emailOutput.textContent = email;
  katastrofeOutput.textContent = katastrofeText;
  alvorlighedOutput.textContent = alvorlighed;
  hvorOutput.textContent = hvor;
  datoOutput.textContent = dato;
  beskrivelseOutput.textContent = beskrivelse;

  // Reset form after submit
  form.reset();
}

// Add event listeners
form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
