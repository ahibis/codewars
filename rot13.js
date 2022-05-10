//https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
function rot13(message) {
  const aCode = "a".charCodeAt();
  const ACode = "A".charCodeAt();
  return [...message].map(e=>{
    if(/[A-Z]/.test(e)) 
      return String.fromCharCode(ACode + (e.charCodeAt() - ACode + 13) % 26)
    if(/[a-z]/.test(e)) 
      return String.fromCharCode(aCode + (e.charCodeAt() - aCode + 13) % 26)
    return e
  }).join("")
}
function rot13Best(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}
function rot13Best1(message) {
  const rot13 = str => str.replace(/[a-z]/gi, letter => 
    String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));
}
console.log(rot13("test12"))
console.log(rot13("TeSt12"))

