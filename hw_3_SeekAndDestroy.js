
function destroyer(array) {
  // Remove all the values
var arg = Array.from(arguments).slice(1);

for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < arg.length; j++) {
    if (array[i] === arg[j]){
      delete array[i];
    }
  }
}
  return array.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
