function setToLocalStorage(path, data) {
  localStorage.setItem(path, JSON.stringify(data));
}

export default setToLocalStorage;
