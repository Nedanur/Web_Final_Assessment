//NEDANUR BASOGLU
//110756202
//WEB222 NBB
//APRIL 21 2021
function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted
  var checking = true;
  var nLong = parseInt(document.getElementById("longInput").value);
  var nLat = parseInt(document.getElementById("latInput").value);
  console.log(nLong);
  console.log(nLat);

  if (!(nLat > -90 && nLat < 90)) {
    document.getElementById("inpLat").textContent =
      "  Must be a Valid latitude (-90 to 90)";
    document.getElementById("inpLat").style.color = "red";
    checking = false;
  }
  if (!(nLong > -180 && nLong < 180)) {
    document.getElementById("longInp").textContent =
      "  Must be a Valid longitude (-180 to 180)";
    document.getElementById("longInp").style.color = "red";
    checking = false;
  }
  return checking;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
