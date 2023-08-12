/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const metChars = {};
  let left = 0;
  let maxLength = 0;
  [...s].forEach((c,i)=>{
    if(c in metChars)
      left = Math.max(metChars[c] + 1, left);
    metChars[c] = i;
    maxLength = Math.max(maxLength, i - left + 1)
  })
  return maxLength;
};
console.log(lengthOfLongestSubstring("cdd"))