const baseUrl = "https://ghibliapi.herokuapp.com/films";

function movieTitles() {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      displayResults(data);
    });
}

movieTitles();

function displayResults(data) {
  for (movie of data) {
    // console.log(movie.title);
    // console.log(data);
    // console.log(data[0].title);
    // console.log(movie);

    let movieList1 = document.querySelector(".movieList");
    // let movieList2 = document.querySelector(".movie2");
    // let movieList3 = document.querySelector(".movie3");
    // let movieList4 = document.querySelector(".movie4");
    // let movieList5 = document.querySelector(".movie5");

    let box = document.createElement("div");
    let title = document.createElement("h1");
    let des = document.createElement("p");

    movieList1.appendChild(box);
    box.appendChild(title);
    box.appendChild(des);

    box.classList.add("movie-list");
    title.classList.add("title");
    des.classList.add("movie");

    // console.log("title", movie.title);
    title.innerHTML = movie.title;
    des.innerHTML = movie.description;
    // console.log(des);

    // movieList1.innerText = data[0].title;
    // movieList2.innerText = data[2].title;
    // movieList3.innerText = data[3].title;
    // movieList4.innerText = data[4].title;
    // movieList5.innerText = data[5].title;
    console.log(movieList1);
  }
}

// function movieInfo() {
//   fetch(baseUrl)
//     .then((res) => res.json())
//     .then((data) => {
//       displayResults(data);
//     });
// }

// movieInfo();

// function displayInfo(data) {
//   for (movie of data) {
//     console.log(data);
//     console.log(data[0].description);
//   }
// }
