let age:number = 30;
let firstName:string = 'Mario'
let isFictional:boolean

console.log(age);

firstName = 'Leonard'

isFictional = true

let plane = 'Earth'
let moons = 1
let isLarge = false

//arrays 

let names: string[] = ['Sarah', 'Jerlyn', 'Peach']
let years: number[] = [1990, 1918, 2000]

names.push('Keo')
years.push(2020)

// type inference with arrays

let fruits = ['Apple', 'Banana', 'Orange']

// object literals 

let car: { make: string, model: string, year: number} = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
}
car.year = 2021

// type inference with object literals

let laptop = {
    brand: 'Dell',
    ram: 16,
    isTouchscreen: false
}
laptop.ram = 32
laptop.isTouchscreen = true
// laptop.brand = 123 // Error: Type 'number' is not assignable to type 'string'