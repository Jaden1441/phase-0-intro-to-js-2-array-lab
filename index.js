// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop()
}

function destructivelyRemoveFirstCat(name){
    cats.shift()
}

function appendCat(name){
   let appendCat = cats.slice();
   appendCat.push(name)
   return appendCat
}
function prependCat(name){
    let prependCat = cats.slice()
    prependCat.unshift(name)
    return prependCat
}
function removeLastCat(name){
    let removeLastCat = cats.slice()
    removeLastCat.pop();
    return removeLastCat
}
function removeFirstCat(name){
    let removeFirstCat = cats.slice()
    removeFirstCat.shift()
    return removeFirstCat
}