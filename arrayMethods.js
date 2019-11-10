const items = [{
        name: 'Bike',
        price: 100
    },
    {
        name: 'TV',
        price: 200
    },
    {
        name: 'Album',
        price: 10
    },
    {
        name: 'Book',
        price: 5
    },
    {
        name: 'Phone',
        price: 500
    },
    {
        name: 'Computer',
        price: 1000
    },
    {
        name: 'Keyboard',
        price: 25
    }
]

// Returns true or false based on condition set in line 33
// Does not modify original array (items)
const filteredItems = items.filter((item) => {
    return item.price <= 100
})

// Creates a new array from an existing object and turns it into another array
// Does not modify original array (item)
const itemNames = items.map((item) => {
    return item.name
})

// Finds the first item from an existing array and returns its properties
// Does not modify original array (item)
const foundItem = items.find((item) => {
    return item.name === 'Book'
})

// Applies operations on each item in an array. In this case we console.log
// the name and price of each item. Shortens the long syntax of for loops
items.forEach((item) => {
    console.log('Result of .forEach method')
    console.log(item.name)
    console.log(item.price)
})

// Returns true of false if an item in the array meets a specific condition.
// In this case an item in the array indeed is less than 100, so it returns true
// return item.price => 2000 returns false as there is no item that worth more than 2000
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})

// Similar to .some method, but now checks for truthiness of each item
const hasExpensiveItems = items.every((item) => {
    return item.price >= 100
})

// Creates a new internal variable, which keeps track of the accumulation of a value
// In this case that is the total price of the items
// The number 0 indicates that the accumulation should start at value 0
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

// Checks if an array contains a certain value. Returns true of false
const numbers = [1, 2, 3, 4, 5]
const includesThree = numbers.includes(3)

console.log('Result of .filter method: ', filteredItems)
console.log('Result of .map method: ', itemNames)
console.log('Result of .find method: ', foundItem)
console.log('Result of .some method: ', hasInexpensiveItems)
console.log('Result of .every method: ', hasExpensiveItems)
console.log('Result of .reduce method: ', total)
console.log('Result of .includes method: ', includesThree)