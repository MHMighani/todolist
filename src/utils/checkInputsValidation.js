// returns true if all input values are valid
function checkInputsValidation(inputValuesList) {
  for (let value of inputValuesList) {
    if (!value || value.trim() === "") return false;
  }
  return true;
}

export default checkInputsValidation;
