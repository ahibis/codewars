/*In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.*/
function alphabetPosition(text) {
  let res = [];
  const ACode = "A".charCodeAt();
  const aCode = "a".charCodeAt();
  [...text].forEach((e) => {
    const code = e.charCodeAt();
    let key = 0;
    if (code < aCode) {
      key = code - ACode + 1;
    } else {
      key = code - aCode + 1;
    }
    if (key > 0 && key < 27) res.push(key);
  });
  return res.join(" ");
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."))
