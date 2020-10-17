let form = document.querySelector("#form");
let invest = document.querySelector("#investment");
let percent = document.querySelector("#percentage");
let btn = document.querySelector("#btn");
let amt = document.querySelector("#amtpercentage");
let total = document.querySelector("#total");
let showerr = document.querySelector("#showerr");

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    if(invest.value == ''){
      showerr.innerHTML = "You should add a value"
      setTimeout(clearout, 3000);

      function clearout(){
      showerr.remove()
    }
       return;
    } else if( invest.value < 50000){
        showerr.innerHTML = "The minimum is 50,000"
        setTimeout(clearout, 3000);

        function clearout(){
            showerr.remove()
          }
        return;
    
    }

    let resultTop = invest.value * percent.value / 100;
    amt.innerHTML = resultTop;

    let resultTotal = parseFloat(invest.value) + parseFloat(resultTop);
    total.innerHTML = resultTotal;

});

function clearForm() {
    document.getElementById("form").reset();
  };

function reloadPage(){
    window.location.reload();
};
