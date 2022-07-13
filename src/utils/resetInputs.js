function resetInputs(listOfInputRefs) {
  for (let inputRef of listOfInputRefs) {
    inputRef.current.value = "";
  }
}

export default resetInputs;
