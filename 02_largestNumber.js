/*
Largest Number
Write a method that will take an array of numbers
and return whichever is the largest.

Test your solution:
mocha 02_largestNumber.js

Question: Why does the test pass for the third (last) test 
with no changes to the function?

Because in JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
It’s a special value which represents “nothing”, “empty” or “value unknown”. so when I use the .find method on an empty
array js goes into the array and finds nothing so it reports the "null" value, because it's an empty value
*/

function largestNumber(arr) {
    // Your code here
    // Google JS syntax ;)
    arr.sort(function(min, max){return max-min});
    return arr.find(isFinite)
    
}

var assert = require('assert');

describe('largestNumber', function () {
    it('should return the largest number', function () {
        assert.equal(10, largestNumber([5, -2, 10]));
    });
    it('should ignore invalid array entries', function () {
        assert.equal(10, largestNumber([10, 10, 's']));
    });
    it('should return null if the array is empty', function () {
        assert.equal(null, largestNumber([]));
    });

});