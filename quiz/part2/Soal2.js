function angkaPalindrome(num) {
let palindrome = num + 1;

  while (!cariAngkaPalindrome(palindrome)){
    palindrome++;
    
  }
  return palindrome;
}
 

function cariAngkaPalindrome(num) {
  let intToString = num.toString();
   let balik = "";
   
  for(let i = intToString.length - 1; i >= 0; i--){
    balik += intToString[i];
  }
  return intToString == balik;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001