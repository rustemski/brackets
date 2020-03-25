module.exports = function check(str, bracketsConfig) {
  // function check(str, bracketsConfig) {
  let stack = []; 

  for (var i=0; i < bracketsConfig.length; i++) {
    stack.push(bracketsConfig[i][0]+bracketsConfig[i][1])
  }

  for (var i=0; i < str.length; i++) {
    if (str.includes(stack[i])) {
      str = str.replace(stack[i], "")
      i = -1
    }
  }

  if (str.length == 0) {
    return true 
  } else {
    return false 
  }
  }
