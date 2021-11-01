<<<<<<< HEAD
// JS type safe degildir



console.log("hello world!") //ekrana yazdırma komutu

// degisken tanımlama       

/*var dolarYesterday = 9.20;
var dolarToday = 9.30;*/

// var yerine let kullan


let dolarYesterday = 9.20;
let dolarToday = 9.20;

{
    let dolarYesterday = 9.10;
}

console.log(dolarYesterday);

// const> sabit demek


/*const euroYesterday = 11.2
euroYesterday =2

boyle kullanılmaz
*/

// diziler

let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"];

// boylede yazılabilir
//let konutKredileriFarkli = ["Konut Kredisi", 1, ["a", "b"]];

// gelen veriyi gormek icin 
console.log(konutKredileri);


console.log("Krediler");
for (let i = 0; i < konutKredileri.length; i++) {

    console.log(konutKredileri[i]);
    
}

=======
console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
