
console.log("Hafta 2\n\n")

// productName = "Default Product"  quantity = 1
function addToCart(productName = "Default Product", quantity = 1) {
    console.log(productName + "Adlı ürün sepete eklendi. Adedi: " + quantity)
}

addToCart("Mouse", 5)
//addToCart("Karpuz")
//addToCart(10)   // parametreler sırayla doldurulur

let sayHello = () => {

    function addToCart(quantity, productName = "Elma") {
        console.log("Sepete eklendi : ürün : "
            + productName + " adet : " + quantity)
    }

    //addToCart()
    addToCart(10)
    //addToCart(15)

    let sayHello = () => {
        console.log("Hello World!")
    }

    sayHello()

    let sayHello2 = function () {

        console.log("Hello World 2!")
    }

    sayHello2()

    function addToCart2(productName = "Default Product", quantity = 1, unitPrice = 12) {
        console.log(productName + "Adlı ürün sepete eklendi. Adedi: " + quantity + " Fiyatı: " + unitPrice)
    }


    addToCart2("Mouse", 5, 15)

    let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 }

    function addToCart3(product) {
        console.log("Ürün: " + product.productName)
        console.log("Fiyat: " + product.unitPrice)
        console.log("Adet: " + product.quantity)
    }

    addToCart3(product1)

    let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 }
    let product3 = { productName: "Elma", unitPrice: 10, quantity: 5 }

    product2 = product3
    product2.productName = "Karpuz"

    console.log(product3.productName)



    console.log("Hello World 2")
}

sayHello2();

function addToCart2(productName, quantity, unitPrice) {

}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)

let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 }

function addToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Fiyat : " + product.unitPrice)
}


addToCart3(product1)

let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 }
let product3 = { productName: "Elma", unitPrice: 10, quantity: 5 }
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)


function addToCard4(products) {
    console.log(products[0]['productName'])
}

let products = [
    { productName: "Elma", unitPrice: 10, quantity: 5 },
    { productName: "Karpuz", unitPrice: 50, quantity: 2 },
    { productName: "Mandalina", unitPrice: 12, quantity: 6 },
]

addToCard4(products)

// ...numbers  rest operator
function add(...numbers) {
    // numbers : array
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
        total = total + numbers[i]

    }
    console.log("Total: " + total)

}

add(5, 15)

let numbers = [25, 9, 54, 6, 656, 3, 42]
console.log(...numbers) // ... separate
console.log(Math.max(...numbers))



let [icAnadolu, marmara, karadeniz, isAnadoluSehirleri] = [
    { name: "İç Anadolu", population: "20M" },
    { name: "Marmara", population: "40M" },
    { name: "Karadeniz", population: "15M" },

    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"],
    ]
]

console.log(icAnadolu)
console.log(marmara.population)
console.log(karadeniz.name)


let newproductName, newunitPrice, newquantity
({ productName: newproductName, unitPrice: newunitPrice, quantity: newquantity }
    = { productName: "Elma", unitPrice: 10, quantity: 5 }
)
console.log(newproductName)
console.log(newquantity)

function addToCart4(products) {
    console.log(products)
}

let products = [
    { productName: "Elma", unitPrice: 10, quantity: 5 },
    { productName: "Armut", unitPrice: 10, quantity: 5 },
    { productName: "Karpuz", unitPrice: 10, quantity: 5 }
]

addToCart4(products)

function add(bisey, ...numbers) { //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add(20, 30)
//add(20,30, 40)
//add(20,30, 40, 50)

let numbers = [30, 10, 500, 600, 120]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    { name: "İç Anadolu", population: "20M" },
    { name: "Marmara", population: "30M" },
    { name: "Karadeniz", population: "10M" },
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"],
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({ productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity }
    = { productName: "Elma", unitPrice: 10, quantity: 5 })

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
