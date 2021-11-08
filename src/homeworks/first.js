console.log("1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.")
function findPrime(...numbers) {
    if (numbers > 1) {
        for (let i = 2; i < numbers - 1; i++) {
            if (numbers % i == 0) {
                console.log("s")
                return false
            }
        }
        console.log("Asal.")
    } else {
        console.log("Asal değil.")
    }
}

findPrime(3, 5)


console.log("2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.")

let total1 = 0
let total2 = 0

function isFriend(number1, number2) {
    for (let i = 0; i < number1; i++) {
        if (number1 % i === 0) {
            total1 += i
        }
    }
    for (let i = 0; i < number2; i++) {
        if (number2 % i === 0) {
            total2 += i
        }
    }

    if (total1 === number2 && total2 === number1) {
        console.log("Arkadaş sayılar.")
    } else {
        console.log("Arkadaş sayılar değil.")

    }
}

isFriend(220, 284)

console.log("3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.")

var number = 1;
for (var number = 1; number <= 1000; number++) {
    var toplam = 0;
    for (var i = 1; i < number; i++) {
        if (number % i == 0)
            toplam += i;
    }

    if (toplam == number)
        console.log("Mükemmel sayi: " + number);

}

console.log("4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.")

function isPrime() {
    let counter = 0
    for (let number = 2; number <= 1000; number++) {
        let control = 0

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                control = 1
            }
        }
        if (control == 1) {
            console.log("Asal değidir: ", number)
        }
        else {
            console.log("Asaldır: ", number)
            counter++
        }
    }
}

isPrime()
