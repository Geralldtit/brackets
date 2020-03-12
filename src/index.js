module.exports = function check(str, bracketsConfig) {  
  var dic = {};
  for(let k = 0; k < bracketsConfig.length; k++){
      dic[bracketsConfig[k][0]] = bracketsConfig[k][1];
  }
  
  let stack = [];
  for(let i = 0; i < str.length; i++){
      let index = str[i];

      if(dic[index]){
          if(dic[index] == index && 
                stack.length > 0 && 
                    stack[stack.length-1] == index){
              stack.pop();
          }else
            stack.push(index);
      } else {
          if(stack.length === 0){
              return false;
          }
          let openBracket = stack.pop();          
          if(dic[openBracket]!=index) return false;
      }
  }
  return stack.length <= 0;
}
