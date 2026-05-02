document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let email = document.getElementById("email").value.trim();
  let gender = document.querySelector('input[name="gender"]:checked');
  let course = document.getElementById("course").value;

  let hobbies = [];
  document.querySelectorAll('input[name="hobby"]:checked')
    .forEach(h => hobbies.push(h.value));

  let skills = [];
  let skillOptions = document.getElementById("skills").selectedOptions;
  for (let option of skillOptions) {
    skills.push(option.value);
  }

  // Errors
  let isValid = true;

  document.getElementById("nameError").innerHTML = "";
  document.getElementById("phoneError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("genderError").innerHTML = "";
  document.getElementById("courseError").innerHTML = "";

  // Name validation
  if (!/^[A-Za-z\s]+$/.test(name)) {
    document.getElementById("nameError").innerHTML = "Invalid name";
    isValid = false;
  }

  // Phone validation
  if (!/^[0-9]{10}$/.test(phone)) {
    document.getElementById("phoneError").innerHTML = "Invalid phone";
    isValid = false;
  }

  // Email validation
  if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
    document.getElementById("emailError").innerHTML = "Invalid email";
    isValid = false;
  }

  // Gender
  if (!gender) {
    document.getElementById("genderError").innerHTML = "Select gender";
    isValid = false;
  }

  // Course
  if (course === "") {
    document.getElementById("courseError").innerHTML = "Select course";
    isValid = false;
  }

  if (isValid) {
    let output = `
      <h3>Submitted Data</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Gender:</strong> ${gender.value}</p>
      <p><strong>Hobbies:</strong> ${hobbies.join(", ")}</p>
      <p><strong>Course:</strong> ${course}</p>
      <p><strong>Skills:</strong> ${skills.join(", ")}</p>
    `;

    document.getElementById("output").innerHTML = output;
    document.getElementById("myForm").reset();
  }
});
