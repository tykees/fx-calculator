let tro = document.querySelector("#try");


async function getData() {
    let response = await fetch("https://covidnigeria.herokuapp.com/api");
    let data = await response.json();
    console.log(data);
  }
  getData();



