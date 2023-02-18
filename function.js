/*----------------------
Change to another window
------------------------ */

document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

/*------------------
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
      0.5 * parseFloat(lengthValue) * parseFloat(heightValue);
    if (
      isNaN(parseFloat(lengthValue), isNaN(parseFloat(heightValue))) === true
    ) {
      alert(
        "Please enter a number.Value of length & height always should be a number"
      );
    } else if ((parseFloat(lengthValue), parseFloat(heightValue) <= 0)) {
      alert(
        "Value of length & height must be more than Zero.PLz add any Number"
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
        "Value of length & height must be more than Zero.PLz add any Number"
      );
    } else {
      const showdata = displayData(nameOfObject, areaOfrectangle);
    }
  });

/* ---------------------------
    Parallelogram Calculation
  ---------------------------- */
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
        "Value of length & height must be more than Zero.PLz add any Number"
      );
    } else {
      const showdata = displayData(nameOfObject, areaOfPara);
    }
  });

/* ----------------------
    Rhombos Calculation
  ----------------------- */

document
  .getElementById("calculte-btn-4")
  .addEventListener("click", function () {
    const rhombosDiagonal1 = innerTextValue("diagonal1", true);
    const rhombosDiagonal2 = innerTextValue("diagonal2", true);
    const nameOfObject = innerTextValue("rhombus");
    const areaOfRhombos =
      0.5 * parseFloat(rhombosDiagonal1) * parseFloat(rhombosDiagonal2);
    if (
      isNaN(
        parseFloat(rhombosDiagonal1),
        isNaN(parseFloat(rhombosDiagonal2))
      ) === true
    ) {
      alert(
        "Please enter a number.Value of length & height always should be a number"
      );
    } else if (
      (parseFloat(rhombosDiagonal1), parseFloat(rhombosDiagonal2) <= 0)
    ) {
      alert(
        "Value of length & height must be more than Zero.PLz add any Number"
      );
    } else {
      const showdata = displayData(nameOfObject, areaOfRhombos);
    }
  });

/* ---------------------------
    Pentagone Calculation
  ---------------------------- */

document
  .getElementById("calculte-btn-5")
  .addEventListener("click", function () {
    const pentaPerimeter = innerTextValue("perimeter", true);
    const pentaApothem = innerTextValue("apothem", true);
    const nameOfObject = innerTextValue("pentagone");
    const areaOfPentagone =
      0.5 * parseFloat(pentaPerimeter) * parseFloat(pentaApothem);
    if (
      isNaN(parseFloat(pentaPerimeter), isNaN(parseFloat(pentaApothem))) ===
      true
    ) {
      alert(
        "Please enter a number.Value of length & height always should be a number"
      );
    } else if ((parseFloat(pentaPerimeter), parseFloat(pentaApothem) <= 0)) {
      alert(
        "Value of length & height must be more than Zero.PLz add any Number"
      );
    } else {
      const showdata = displayData(nameOfObject, areaOfPentagone);
    }
  });

/* ---------------------------
    Ellipse Calculation
  ---------------------------- */

document
  .getElementById("calculte-btn-6")
  .addEventListener("click", function () {
    const axisA = innerTextValue("axisA", true);
    const axisB = innerTextValue("axisB", true);
    const nameOfObject = innerTextValue("ellipse");
    const areaOfEllipses = 3.1416 * parseFloat(axisA) * parseFloat(axisB);
    if (isNaN(parseFloat(axisA), isNaN(parseFloat(axisB))) === true) {
      alert(
        "Please enter a number.Value of length & height always should be a number"
      );
    } else if ((parseFloat(axisA), parseFloat(axisB) <= 0)) {
      alert(
        "Value of length & height must be more than Zero.PLz add any Number"
      );
    } else {
      const showdata = displayData(nameOfObject, areaOfEllipses);
    }
  });

/* ---------------------------
     Some Common Functions
  ---------------------------- */

// function for innerText & innerValue.
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

// function for creating table data & Append;

let rowCounter = 1; // Counter variable to keep track of dynamic row numbers

function displayData(nameOfObject, areaOfTriangle) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${rowCounter}</td>
    <td>${nameOfObject}</td>
    <td>${areaOfTriangle.toFixed(2)} cm²</td>
    <td></td>
  `;
  const td = tr.querySelector("td:last-child");
  const button = document.createElement("button");

  button.textContent = "Convert to m\u00B2";
  button.style.backgroundColor = "blue";
  button.style.padding = "8px 5px";
  button.style.color = "white";
  button.style.fontSize = "10px";
  button.style.borderRadius = "4px";
  td.appendChild(button);
  container.appendChild(tr);

  button.addEventListener("click", () => {
    // Divide areaOfTriangle by 100
    const areaOfTriangleMeters = areaOfTriangle / 100;
    // Update the content of the corresponding table cell with the new value
    tr.querySelector(
      "td:nth-child(3)"
    ).textContent = `${areaOfTriangleMeters} m²`;
  });

  rowCounter++; // Increment the row counter
}

/* ----------------------------
   Random colour fuction here 
   ----------------------------*/
const singleCards = document.querySelectorAll(".single-card");

singleCards.forEach(card => {
  card.addEventListener("mouseover", () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    card.style.backgroundColor = randomColor;
  });
});
