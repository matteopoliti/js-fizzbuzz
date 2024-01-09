// creare un ciclo che stampi i numeri da 1 a 100
// all'interno del ciclo inserire un condizione che sostituisca i multipli di 3 con la scritta "Fizz", lo stesso per i multipli di 5 ma con la scritta "Buzz"
// i numeri che sono mutlipli sia di 3 che di 5 devono avere la scitta "FizzBuzz"


const ul = document.querySelector("ul.list")

for(let i = 1; i <= 100; i++){

    if(i % 3 === 0 && i % 5 === 0){
        const element = "<li>FizzBuzz</li>"
        ul.innerHTML += element
    }else if((i % 3) === 0){
        const element = "<li>Fizz</li>"
        ul.innerHTML += element
    }else if (i % 5 === 0){
        const element = "<li>Buzz</li>"
        ul.innerHTML += element
    }else{
        const element = `<li> ${i} </li>`
        ul.innerHTML += element
    }
}