function showMessage(message, type) {
  const outputMessage = document.getElementById("output-message");
  outputMessage.textContent = message;
  outputMessage.className =
    "output-message " + (type === "success" ? "success" : "error");
  outputMessage.style.display = "block";
}

(function () {
  emailjs.init("qHHuV8qmQsBcHWhLE");
  console.log("FKDoWlMgxXTG3984p");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");

    emailjs.sendForm("service_13xunae", "template_ylqw3vd", this).then(
      function () {
        console.log("Email sent successfully");
        showMessage("Thank you! Your message has been sent.", "success");
      },
      function (error) {
        console.error("Error sending email:", error);
        showMessage(
          "Failed to send the message: " + JSON.stringify(error),
          "error"
        );
      }
    );
  });
