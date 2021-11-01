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

