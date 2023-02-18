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
function displayData(nameOfObject, areaOfTriangle) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${1}</td>
    <td>${nameOfObject}</td>
    <td>${areaOfTriangle}</td>
    <td>${1}</td>
       `;
  container.appendChild(tr);
}
