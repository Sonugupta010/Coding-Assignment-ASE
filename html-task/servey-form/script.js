function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const genderElements = document.getElementsByName("gender");
    const gender = [...genderElements].filter((el) => el.checked).map((el) => el.value);
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
  
    // Validate the form (you can add more specific validation rules here)
    if (
      !firstName ||
      !lastName ||
      !dob ||
      country === "" ||
      gender.length === 0 ||
      !profession ||
      !email ||
      !mobile
    ) {
      alert("Please fill in all required fields.");
      return;
    }
  
    // Display the selected values in a popup
    const popup = document.getElementById("popup");
    const popupData = document.getElementById("popupData");
    popupData.innerHTML = "";
    const values = [
      `First Name: ${firstName}`,
      `Last Name: ${lastName}`,
      `Date of Birth: ${dob}`,
      `Country: ${country}`,
      `Gender: ${gender.join(", ")}`,
      `Profession: ${profession}`,
      `Email: ${email}`,
      `Mobile Number: ${mobile}`,
    ];
    values.forEach((value) => {
      const listItem = document.createElement("li");
      listItem.textContent = value;
      popupData.appendChild(listItem);
    });
    popup.style.display = "block";
  
    // Reset the form
    resetForm();
  }
  
  function resetForm() {
    document.getElementById("surveyForm").reset();
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  