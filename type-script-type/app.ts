let userInput: any
let userName: string;

userInput = 5;
userInput = 'Max'

userName = userInput

function generateError(message: string, code: number){
  throw {message: message, errorCode: code}
}

generateError("An error occurred!", 500);