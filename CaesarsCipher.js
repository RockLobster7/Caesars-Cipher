/**
 * One of the simplest and most widely known ciphers is a Caesar cipher, 
 * also known as a shift cipher. In a shift cipher the meanings of the letters 
 * are shifted by some set amount.
 * A common modern use is the ROT13 cipher, where the values of the letters 
 * are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

//the cipher can be broken using a key-value-pair map 'https://en.wikipedia.org/wiki/ROT13'
//by doing it this way instead of a mathematical solution, we avoid having to manage special characters and cyclical cipher relationships
var decipher = {
"N":"A", "O":"B", "P":"C", "Q":"D", "R":"E", "S":"F", "T":"G", "U":"H", "V":"I", "W":"J", "X":"K", "Y":"L", "Z":"M",
"A":"N", "B":"O", "C":"P", "D":"Q", "E":"R", "F":"S", "G":"T", "H":"U", "I":"V", "J":"W", "K":"X", "L":"Y", "M":"Z"
};

function rot13(str) { // LBH QVQ VG!
    var strArr = str.split("");                                 //turn the input into an array

    var result = strArr.map(function (val){                     //use the map method to work each array element
        if (val.charCodeAt() >= 65 && val.charCodeAt() <= 90){  //test if the character codes are within our sample range
                                                                //char code for A is 65, code for Z is 90.
            return decipher[val];                               //call up the key-value-pair 
        } else {
            return val;                                         //otherwise return the un-deciphered value which would be a spcial character
        }
    });
  return result.join("");                                       //join the array into a string for our result
}

console.log(rot13("LBH QVQ VG!"));
console.log(rot13("SERR PBQR PNZC"));                                   //should decode to "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!"));                                      //should decode to "FREE PIZZA!"
console.log(rot13("SERR YBIR?"));                                       //should decode to "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));    //should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."