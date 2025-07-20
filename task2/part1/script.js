document.querySelector("form").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  let errorMsg = "";

  if (!name) errorMsg += "Please enter your full name.\n";
  if (!email || !emailPattern.test(email)) errorMsg += "Please enter a valid email address.\n";
  if (!subject) errorMsg += "Please enter a subject.\n";
  if (!message) errorMsg += "Please enter a message.\n";

  if (errorMsg) {
    alert(errorMsg);
    e.preventDefault();
  } else {
    alert("Form submitted successfully!");
  }
});

