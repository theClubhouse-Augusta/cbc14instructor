/*
    date: 03/22
    author: Evan Gertis
    name: conversion module
*/

var inputOne = prompt("collect number 1");
var inputTwo = prompt("collect number 2");


const paragraph = document.getElementById("paragraph");

function updateParagraph(paragraph){
    var a = Number(inputOne);
    var b = Number(inputTwo);
    var result = add(a,b);
    var resultingString = result.toString();
    paragraph.innerHTML = resultingString;
    alert(resultingString);
}

function add(a,b){
    return a+b;
}

updateParagraph(paragraph);