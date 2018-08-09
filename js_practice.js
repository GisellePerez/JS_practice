//1. FIND THE LONGEST WORD
function LongestWord(sen) { 

    var arr = sen.match(/[a-z]+/gi);

    var sorted = arr.sort(function(a, b) {
        return b.length - a.length;
    });    
        return sorted[0]; 

}

console.log(LongestWord("fun&!! time")); 
console.log(LongestWord("I love dogs")); 


//2. RETURN THE STRING IN REVERSED ORDER
function FirstReverse(str) { 

    let arr = str.replace(/\W+[0-9]+/g, '')
    let reverse = arr.split('').reverse().join('')

    return reverse; 
           
}

console.log(FirstReverse('hello world!$#%#$&#45')); 


//3. CHANGE EVERY LETTER FOR THE FOLLOWING IN THE ALPHABET
function LetterChanges(str) { 

    var converted = str.replace(/[a-z]/gi, function(char) { 
        return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
    }); 

    var upperCaseVowel = converted.replace(/a|e|i|o|u/gi, function(vowel) {
        return vowel.toUpperCase();
    });

    return upperCaseVowel;        
}

console.log(LetterChanges('hello world'));    


//4.GIVEN A NUMER, SHOW THE RESULT OF ADDING EVERY NUMBER FROM 0 TO THAT NUMBER
//E.g.: num = 4 ; [1,2,3,4] ; total=1+2+3+4=10 
function SimpleAdding(num) { 

    let count = 0;
    let numArr = [];

    while (num > count) {
        count++;
        numArr.push(count)
    }  

    let total =  numArr.reduce((a,b) => a+b,0 )

    return total; 
           
  }
     
console.log(SimpleAdding(12));   
console.log(SimpleAdding(140));   

// 5. CAPITALIZE THE FIRST LETTER OF EACH WORD
function CapitalizeFirstLetter(str) {

  var words = str.split(" "); //split string into an array

  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
  }
  return words.join(" ");
}

console.log(CapitalizeFirstLetter('hello world'));

  
  
