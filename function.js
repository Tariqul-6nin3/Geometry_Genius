document.getElementById("blog-btn").addEventListener("click", function () {
  //   console.log("btnclicked");
  window.location.href = "./blog.html";
});
document
  .getElementById("calculate-btn-1")
  .addEventListener("click", function () {
    const lengthValue = innerTextValue("length-field", true);
    const heightValue = innerTextValue("height-field", true);
    const nameOfObject = innerTextValue("triangle");
    const areaOfTriangle =
      0.5 * parseFloat(lengthValue) * parseFloat(heightValue);
    const showdata = displayData(nameOfObject, areaOfTriangle);
    console.log(showdata);
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
