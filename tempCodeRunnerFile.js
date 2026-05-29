function findNewsById(id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      return data[i].news;
    }
  }
  return "News not found";
}