// 7 kyu
// 99 Problems, #1: last in list
// https://www.codewars.com/kata/57d86d3d3c3f961278000005/train/javascript

// DESCRIPTION:
// Write a function last that accepts a list and returns the last element in the list.

// If the list is empty:

// In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option

// In languages that do not have an empty option, just return null

// Solution
// const last = xs => /* Your code goes here ! */ 

// # My Working

const last = xs => xs < 1 ? null : xs[xs.length - 1] ; 