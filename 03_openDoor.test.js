const openDoor = require("./03_openDoor").openDoor

function makePerson(name, hasCoffee) {
    item = new Object()
    item.name = name
    item.hasCoffee = hasCoffee
    return item
}

describe('openDoor', function () {

    let listOfPeople = []
    test('should return true if "Simon" and hasCoffee with single object', function () {
        listOfPeople = []
        listOfPeople.push(makePerson('Simon', true))
        expect(openDoor(listOfPeople)).toBe(true)
    })
    test('should return true if "Simon" and hasCoffee with multiple objects', function () {
        listOfPeople = []
        listOfPeople.push(makePerson('Simon', true))
        listOfPeople.push(makePerson('Scott', true))
        expect(openDoor(listOfPeople)).toBe(true)
    })
    test('should return false if !"Simon" and hasCoffee', function () {
        listOfPeople = []
        listOfPeople.push(makePerson('Scott', true))
        expect(openDoor(listOfPeople)).toBe(false)
    })
    test('should return false if "Simon" and !hasCoffee', function () {
        listOfPeople = []
        listOfPeople.push(makePerson('Simon', false))
        expect(openDoor(listOfPeople)).toBe(false)
    })
    test('should return false if empty array passed', function () {
        listOfPeople = []
        expect(openDoor(listOfPeople)).toBe(false)
    })
})