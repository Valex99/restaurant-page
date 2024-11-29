export default function createContact() {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-container");

  const contactHeader = document.createElement("h2");
  contactHeader.classList.add("contact-header");
  contactHeader.textContent = "Get in Touch";
  contactDiv.appendChild(contactHeader);

  const address = document.createElement("p");
  address.classList.add("contact-info");
  address.innerHTML = `<strong>Address:</strong> 1776 Freedom Street, Liberty Town, USA`;
  contactDiv.appendChild(address);

  const email = document.createElement("p");
  email.classList.add("contact-info");
  email.innerHTML = `<strong>Email:</strong> <a href="mailto:contact@patriotgrill.com">contact@patriotgrill.com</a>`;
  contactDiv.appendChild(email);

  const phone = document.createElement("p");
  phone.classList.add("contact-info");
  phone.innerHTML = `<strong>Phone:</strong> <a href="tel:+1234567890">(123) 456-7890</a>`;
  contactDiv.appendChild(phone);

  const hours = document.createElement("p");
  hours.classList.add("contact-info");
  hours.innerHTML = `<strong>Hours:</strong> Mon-Sun: 11 AM - 10 PM`;
  contactDiv.appendChild(hours);

  // Contact form
  const form = document.createElement("form");
  form.classList.add("contact-form");

  // Name input
  const nameField = document.createElement("input");
  nameField.type = "text";
  nameField.placeholder = "Your Name";
  nameField.classList.add("form-input");
  form.appendChild(nameField);

  // Email input
  const emailField = document.createElement("input");
  emailField.type = "email";
  emailField.placeholder = "Your Email";
  emailField.classList.add("form-input");
  form.appendChild(emailField);

  // Message textarea
  const messageField = document.createElement("textarea");
  messageField.placeholder = "Your Message";
  messageField.classList.add("form-textarea");
  messageField.maxLength = 500;
  form.appendChild(messageField);

  // Submit button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Send";
  submitButton.classList.add("form-button");
  form.appendChild(submitButton);

  // Append form to the contact container
  contactDiv.appendChild(form);

  return contactDiv;
}
