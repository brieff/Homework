function palindrome(string) {

// let charCode = string.charCodeAt(0);
// if (charCode >= 0 && charCode <= 96 && charCode >= 123 && charCode <= 127) {
//   string = string.toLowerCase().replace('');
// }
// I had to go through the regex section and then google how to find
// non-alphanumeric characters: [\W]
string = string.toLowerCase().replace(/[\W_]/g, '');
  for(var i = 0, length = string.length - 1; i < length / 2; i++) {
    if(string[i] !== string[length - i]) {
      return false;
    }
  }
  return true;
}

palindrome('eye');
