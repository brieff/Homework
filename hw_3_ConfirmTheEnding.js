
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  // if (str.substr(-target.length) === target);
  // return str;


    return str.substr(-target.length) === target;
}

confirmEnding("Bastian", "n");
