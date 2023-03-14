function validateForm() {
  const companyName = document.forms["myForm"]["companyName"].value;
  const email = document.forms["myForm"]["email"].value;
  const password = document.forms["myForm"]["password"].value;
  const confirmPassword = document.forms["myForm"]["confirmPassword"].value;

  if (companyName == "") {
    alert("Please enter your company name.");
    return false;
  }

  if (email == "") {
    alert("Please enter your email address.");
    return false;
  }

  if (password == "") {
    alert("Please enter your password.");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }

  if (confirmPassword == "") {
    alert("Please confirm your password.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  return true;

}
