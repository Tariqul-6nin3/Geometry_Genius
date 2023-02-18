document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

/* -------------
Triangle Calculation
  ---------------- */
document
  .getElementById("calculate-btn-1")
  .addEventListener("click", function () {
    const lengthValue = innerTextValue("length-field", true);
    const heightValue = innerTextValue("height-field", true);
    const nameOfObject = innerTextValue("triangle");
    const cm = Math.pow("cm", 2);
    console.log(cm);
    const areaOfTriangle =
      0.5 * parseFloat(lengthValue) * parseFloat(heightValue) + cm;
    if (
      isNaN(parseFloat(lengthValue), isNaN(parseFloat(heightValue))) === true
    ) {
      alert(
        "Please enter a number.Value of length & height always should be a number"
      );
    } else if ((parseFloat(lengthValue), parseFloat(heightValue) <= 0)) {
      alert(
        "Value of length & height must be more than Zero otherwise it can't be a triangle"
      );
    } else {
      const showdata = displayData(nameOfObject, areaOfTriangle);
    }
  });

/* ---------------------
     Rectangle Calculation
  ----------------------- */
document
  .getElementById("calculate-btn-2")
  .addEventListener("click", function () {
    const widthValueRectangle = innerTextValue("width-field-rect", true);
    const lengthValueRectangle = innerTextValue("length-field-rect", true);
    const nameOfObject = innerTextValue("rectangle");
    const areaOfrectangle =
      parseFloat(lengthValueRectangle) * parseFloat(widthValueRectangle);
    // console.log(areaOfrectangle);
    if (
      isNaN(
        parseFloat(widthValueRectangle),
        isNaN(parseFloat(lengthValueRectangle))
      ) === true
    ) {
      alert(
        "Please enter a number.Value of length & height always should be a number"
      );
    } else if (
      (parseFloat(widthValueRectangle), parseFloat(lengthValueRectangle) <= 0)
    ) {
      alert(
        "Value of length & height must be more than Zero otherwise it can't be a triangle"
      );
    } else {
      const showdata = displayData(nameOfObject, areaOfrectangle);
    }
  });

/* ---------------------
    Paralle Calculation
  ----------------------- */
document
  .getElementById("calculte-btn-3")
  .addEventListener("click", function () {
    const baseValuePara = innerTextValue("base-field-para", true);
    const heightValuePara = innerTextValue("height-field-para", true);
    const nameOfObject = innerTextValue("Parallelogram");
    const areaOfPara = parseFloat(baseValuePara) * parseFloat(heightValuePara);
    console.log(areaOfPara);
    if (
      isNaN(parseFloat(baseValuePara), isNaN(parseFloat(heightValuePara))) ===
      true
    ) {
      alert(
        "Please enter a number.Value of length & height always should be a number"
      );
    } else if ((parseFloat(baseValuePara), parseFloat(heightValuePara) <= 0)) {
      alert(
        "Value of length & height must be more than Zero otherwise it can't be a triangle"
      );
    } else {
      const showdata = displayData(nameOfObject, areaOfPara);
    }
  });

// some common utility :
function innerTextValue(idName, isInput) {
  if (isInput === true) {
    const inputField = document.getElementById(idName);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
  } else {
    const textField = document.getElementById(idName);
    const textFieldValue = textField.innerText;
    return textFieldValue;
  }
}
function displayData(nameOfObject, areaOfTriangle, areaOfPara) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${1}</td>
    <td>${nameOfObject}</td>
    <td>${areaOfTriangle}</td>
    <td></td>
  `;
  const td = tr.querySelector("td:last-child");
  const button = document.createElement("button");
  button.textContent = "Convert to m\u00B2";
  td.appendChild(button);
  container.appendChild(tr);
}

// const card = document.querySelectorAll(".single-card");

// // Define an array of random colors
// const colors = [
//   "#1abc9c",
//   "#2980b9",
//   "#f368e0",
//   "#222f3e",
//   "#10ac84",
//   "#cf6a87",
// ];

// // Add a mouseover event listener to the card
// card.addEventListener("mouseover", function () {
//   // Get a random color from the colors array
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];
//   // Set the background color of the card to the random color
//   card.style.backgroundColor = randomColor;
// });
