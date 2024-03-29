// 7 kyu
// # List Filtering
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/javascript

// # DESCRIPTION:
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// function filter_list(l) {
//   // Return a new array with the strings filtered out
// }

// # Working


function filter_list(l) {
  const newArray = [];
  for (let i = 0; i < l.length ; i++) {
    if (Number.isInteger(l[i])) {
      newArray.push(l[i])
    }
  }
  return newArray
}
// first attempt. go get!


// # Solutions

// Solution #1
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}

// Solution #2
function filter_list(l) {
  return l.filter(v => typeof v == "number")
 }

// Solution #3
function filter_list(l) {
  return l.filter(e => Number.isInteger(e));
}

// Solution #4
function filter_list(l) {
  return l.filter(Number.isInteger);
}