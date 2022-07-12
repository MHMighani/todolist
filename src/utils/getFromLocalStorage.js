function getFromLocalStorage(path) {
  return JSON.parse(localStorage.getItem(path) || "[]");
}

export default getFromLocalStorage;
