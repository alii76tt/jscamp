console.log("Hafta 3")

let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Kitap", quantity:4, unitPrice:40},
    {id:5, productName:"Kulaklık", quantity:2, unitPrice:150},
]

function addToCart(sepet) {
    sepet.push({id:6,productName: "Bardak", quantity: 6,unitPrice: 15})

}

addToCart(cart)

let sayi = 10

function sayiTopla(number) {
    number += 1
}

sayiTopla(sayi)
console.log(sayi)


cart.map(product=>console.log(product.productName + " : " + product.quantity * product.unitPrice))

let quantityOver2 = cart.filter(product=>product.quantity>2 && product.quantity<5)
console.log(quantityOver2)

let total = cart.reduce((acc,product)=>acc + product.unitPrice,0)
console.log("Total: " + total)