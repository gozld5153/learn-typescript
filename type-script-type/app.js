var userInput;
var userName;
userInput = 5;
userInput = 'Max';
userName = userInput;
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
