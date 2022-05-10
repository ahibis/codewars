# Codewars
My codewars solutions
## Exmaple
rot13.js

```javascript
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
console.log(rot13("test12"))//grfg12
console.log(rot13("TeSt12"))//GrFg12
```

