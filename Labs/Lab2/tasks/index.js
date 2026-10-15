/**
 *  Task1: Declare one of the following, and console.log() each one:
 *
 *  * Integer
 *  * Boolean
 *  * String
 *  * Date
 *  * undefined
 *  * Array of strings
 *  * Object with properties
 */

const integer = 42
const boolean = true
const string = 'Hello'
const date = new Date()
const undef = undefined
const strings = ['a', 'b', 'c']
const person = { name: 'Ada', age: 36 };

[integer, boolean, string, date, undef, strings, person].forEach((v) =>
  console.log(v)
)

/**
 * Task2: Prompt the user for his name. Save it to a variable and console.log() it
 *
 * Hint: you have to use document.addEventListener('DOMContentLoaded') to call your function
 */

function askName() {
  const name = prompt('What is your name?')
  console.log(name)
}

document.addEventListener('DOMContentLoaded', askName)

/**
 * Task3: Make a function that, when called, shows an alert to the user after 5 seconds
 */

function delayedAlert() {
  setTimeout(() => alert('5 seconds have passed!'), 5000)
}

/**
 * Task4: Make a function that, given a number X, generates an array of random numbers of length X
 */

function randomArray(x) {
  return Array.from({ length: x }, () => Math.floor(Math.random() * 100))
}

/**
 * Task5: Write a function that gets the maximum value from a random array generated with the previous function
 */

function getMax(arr = randomArray(10)) {
  return Math.max(...arr)
}

/**
 * Task6: This function gets two strings and removes all occurences of the first one in the other. What is wrong with it ?
 */

// What is wrong: String.replace with a string pattern only removes the FIRST occurrence.
// Fix: split/join (or replaceAll) removes every occurrence.
function removeString(remove, mainString) {
  return mainString.split(remove).join("");
}

/**
 * Task7: How does this function work ?
 *
 * It is JSFuck: JavaScript written with only []()!+ characters. Coercions like
 * ![] -> false, !![] -> true, +[] -> 0, [] + [] -> "" let it pick letters out of
 * strings such as "false", "true" and "undefined" and build the string
 * "filter", then "alert(1)". [].filter.constructor is Function, so the whole
 * thing is equivalent to: [].filter.constructor('alert(1)')()
 */

function wtf() {
  [][
    (![] + [])[+[]] +
      ([![]] + [][[]])[+!+[] + [+[]]] +
      (![] + [])[!+[] + !+[]] +
      (!![] + [])[+[]] +
      (!![] + [])[!+[] + !+[] + !+[]] +
      (!![] + [])[+!+[]]
  ][
    ([][
      (![] + [])[+[]] +
        ([![]] + [][[]])[+!+[] + [+[]]] +
        (![] + [])[!+[] + !+[]] +
        (!![] + [])[+[]] +
        (!![] + [])[!+[] + !+[] + !+[]] +
        (!![] + [])[+!+[]]
    ] + [])[!+[] + !+[] + !+[]] +
      (!![] +
        [][
          (![] + [])[+[]] +
            ([![]] + [][[]])[+!+[] + [+[]]] +
            (![] + [])[!+[] + !+[]] +
            (!![] + [])[+[]] +
            (!![] + [])[!+[] + !+[] + !+[]] +
            (!![] + [])[+!+[]]
        ])[+!+[] + [+[]]] +
      ([][[]] + [])[+!+[]] +
      (![] + [])[!+[] + !+[] + !+[]] +
      (!![] + [])[+[]] +
      (!![] + [])[+!+[]] +
      ([][[]] + [])[+[]] +
      ([][
        (![] + [])[+[]] +
          ([![]] + [][[]])[+!+[] + [+[]]] +
          (![] + [])[!+[] + !+[]] +
          (!![] + [])[+[]] +
          (!![] + [])[!+[] + !+[] + !+[]] +
          (!![] + [])[+!+[]]
      ] + [])[!+[] + !+[] + !+[]] +
      (!![] + [])[+[]] +
      (!![] +
        [][
          (![] + [])[+[]] +
            ([![]] + [][[]])[+!+[] + [+[]]] +
            (![] + [])[!+[] + !+[]] +
            (!![] + [])[+[]] +
            (!![] + [])[!+[] + !+[] + !+[]] +
            (!![] + [])[+!+[]]
        ])[+!+[] + [+[]]] +
      (!![] + [])[+!+[]]
  ](
    (![] + [])[+!+[]] +
      (![] + [])[!+[] + !+[]] +
      (!![] + [])[!+[] + !+[] + !+[]] +
      (!![] + [])[+!+[]] +
      (!![] + [])[+[]] +
      (![] +
        [][
          (![] + [])[+[]] +
            ([![]] + [][[]])[+!+[] + [+[]]] +
            (![] + [])[!+[] + !+[]] +
            (!![] + [])[+[]] +
            (!![] + [])[!+[] + !+[] + !+[]] +
            (!![] + [])[+!+[]]
        ])[!+[] + !+[] + [+[]]] +
      [+!+[]] +
      (!![] +
        [][
          (![] + [])[+[]] +
            ([![]] + [][[]])[+!+[] + [+[]]] +
            (![] + [])[!+[] + !+[]] +
            (!![] + [])[+[]] +
            (!![] + [])[!+[] + !+[] + !+[]] +
            (!![] + [])[+!+[]]
        ])[!+[] + !+[] + [+[]]],
  )();
}
