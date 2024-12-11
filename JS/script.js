const textInput = document.getElementById('text-input')
const checkBtn = document.getElementById('check-btn')
const result = document.getElementById('result')
const array = ['0_0 (: /-\ :) 0-0']
let check;
let regex;


function getInputValueCheck() {
  return textInput.value;
}

function IsthereAvalueOrnot (){
  regex = /[a-zA-Z0-9,*\s]/g
  check = getInputValueCheck()
  if(regex.test(check)){
    alert('There is something in the input')
    isApalindrome(check)
  } else {
    alert('Please input a value')
  }
}

function isApalindrome (insertedWord) {
  if(array.includes(insertedWord)){
    result.innerText =  `${insertedWord} is a palindrome`
    result.style.backgroundColor = "#5eff00"
    result.style.border = "3px solid black"
    result.style.width = "20%"
  }
  const cleanWord = insertedWord.replace(/[^a-z0-9]/gi, "").toLowerCase()
  const palindrome = cleanWord === cleanWord.split("").reverse().join("") 
  if(palindrome){
      result.innerText =  `${insertedWord} is a palindrome`
      result.style.backgroundColor = "#5eff00"
      result.style.border = "3px solid black"
      result.style.width = "20%"
  } else {
    result.innerText = `${insertedWord} is not a palindrome`
    result.style.backgroundColor = "#ff0000"
    result.style.border = "3px solid black"
    result.style.width = "20%"
  }
}

checkBtn.addEventListener('click', IsthereAvalueOrnot)