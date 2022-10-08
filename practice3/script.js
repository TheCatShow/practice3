console.log ("******** Zadanie 1 *********")

for(let i = 1; i<11; i++) {
    if (i == 0) continue
        console.log(i); 
}

let j = 1;
while (j<11) {
    console.log(`${j}`);
    j++;
}

console.log ("************* Zadanie 2 ***************");

for (let i = 2; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log( i );
    }
}

console.log ("************* Zadanie 3 ***************");

let myName = prompt('Введите ваше имя');
let myCity = prompt('Введите ваш город');
let myAge = prompt ('Введите ваш возраст'); 

if(myName === 'Владимир', myCity === 'Тюмень', myAge === '30') {
console.log (`Добрый день ${myName}, вы проживаете в городе ${myCity}. Ваш возраст - ${myAge} лет`);
} 

console.log ("************* Zadanie 4 ***************");

console.log ("Условия для скидок:");
