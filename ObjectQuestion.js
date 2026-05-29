const data = [
  { id: "a", news: "Pak cannot be found since 2 days" },
  { id: "b", news: "Charan kaya found on north Korean border" },
  { id: "c", news: "From monday Nepal will be an state of india" },
  { id: "d", news: "India will be the first country to colonize mars" },
  { id: "e", news: "Pakistan will be divided into 4 parts" },
  { id: "f", news: "China will be the next super power of the world" },
];
//Write a function to find news by id
function findNewsById(id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      return data[i].news;
    }
  }
  return "News not found";
}
console.log(findNewsById("c"));
//write a function to print only n number of news.(from top)
function printTopNews(n) {
  for (let i = 0; i < n && i < data.length; i++) {
    console.log(data[i].news);
  }
}
printTopNews(2);
//write a function to print only n number of news.(from last)
function printLastNews(n) {
  for (let i = data.length - n; i < data.length; i++) {
    console.log(data[i].news);
  }
}
printLastNews(2);

//write a funtion to search news and show valid list matches "Searched keyword"
