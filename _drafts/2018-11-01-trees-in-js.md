---
title: Деревья (структура данных) в JavaScript
date: 2018-11-01 10:00:00 +0230
categories: data structures and algorithms
description: П
---

const isPrime = num => {
for(let i = 2, s = Math.sqrt(num); i <= s; i++)
if(num % i === 0) return false;
return num !== 1 && num !== 0;
}

function findPrimeFactors (num) {

    var primeFactors = [];
    while (num % 2 === 0) {
        primeFactors.push(2);
        num = num / 2;
    }

    var sqrtNum = Math.sqrt(num);
    for (var i = 3; i <= sqrtNum; i++) {
        while (num % i === 0) {
            primeFactors.push(i);
            num = num / i;
        }
    }

    if (num > 2) {
        primeFactors.push(num);
    }
    return primeFactors;

}

console.log(findPrimeFactors(10)); // [2, 5]
console.log(findPrimeFactors(11)); // [11]

function fib(n){
let arr = [0, 1];
for (let i = 2; i <= n; i++){
arr.push(arr[i - 2] + arr[i -1])
}
return arr[n]
}

// recursive
/_
function fibonacci(n) {
return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
_/

// cached
function fibonacci(n, cache) {

cache = cache || {}

if (cache[n]) return cache[n];

if (n < 2) return n;

return cache[n] = fibonacci( n - 1, cache ) + fibonacci( n - 2, cache);
}

for (var i = 0; i <= 100; i++) {
console.log('Fibonacci of %s is %s', i, fibonacci(i));
}

function gcd_two_numbers(a, b) {
if ((typeof x !== 'number') || (typeof y !== 'number'))
return false;
a = Math.abs(a);
b = Math.abs(b);
while(b!==0) {
var t = b;
b = a % b;
a = t;
}
return a;
}

function greatestCommonDivisor(a, b){
if(b == 0)
return a;
else
return greatestCommonDivisor(b, a%b);
}

var mergeOrderArr = function (arr1,arr2){
var result = [],
i = 0,  
 j = 0;

    while( i < arr1.length  && j < arr2.length ){

      if(arr1[i] <= arr2[j]){

        result.push(arr1[i++]);


      } else{

        result.push(arr2[j++]);

      }

    }

return result.concat(arr1.slice(i)).concat(arr2.slice(j))
  
}

var b = mergeOrderArr([1,100], [3,4,6,8]);

console.log(b)

function swapNumb(a, b){
console.log('before swap: ','a: ', a, 'b: ', b);
b = b -a;
a = a+ b;
b = a-b;
console.log('after swap: ','a: ', a, 'b: ', b);  
}

const permutator = (inputArr) => {
let result = [];

const permute = (arr, m = []) => {
if (arr.length === 0) {
result.push(m)
} else {
for (let i = 0; i < arr.length; i++) {
let curr = arr.slice();
let next = curr.splice(i, 1);
permute(curr.slice(), m.concat(next))
}
}
}

permute(inputArr)

return result;
}
