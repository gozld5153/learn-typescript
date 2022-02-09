function add(n1: number, n2: number){
  // JS runtime 중 오류를 확인하는 것보다 TS로 개발하는 도중에 오류를 확인할 수 있어 쓸데없는 코드를 줄일 수 있다!
  // if(typeof n1 !== "number" || typeof n2 !== "number"){
  //   return new Error("wrong type")
  // }
  
  return n1 + n2
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2)

console.log(result)