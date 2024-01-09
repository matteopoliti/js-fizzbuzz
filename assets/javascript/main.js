// creare un ciclo che stampi i numeri da 1 a 100
// all'interno del ciclo inserire un condizione che sostituisca i multipli di 3 con la scritta "Fizz", lo stesso per i multipli di 5 ma con la scritta "Buzz"
// i numeri che sono mutlipli sia di 3 che di 5 devono avere la scitta "FizzBuzz"


const ul = document.querySelector("div.list")

for(let i = 1; i <= 100; i++){

    const element = document.createElement("span");

    if(i % 3 === 0 && i % 5 === 0){
       element.textContent = "FizzBuzz"
       element.classList.add("fizzbuzz");
    }else if((i % 3) === 0){
       element.textContent = "Fizz"
       element.classList.add("fizz");
    }else if (i % 5 === 0){
       element.textContent = "Buzz"
       element.classList.add("buzz");
    }else{
       element.textContent = ` ${i} `
       element.classList.add("numero");
    }

    ul.appendChild(element)
}