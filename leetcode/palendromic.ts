function longestPalindrome2(s: string): string {
  const slice = [0,0];
  let offset = 1;
  [...s].forEach((e,i)=>{
    if(i == 0) return;
    if(s[i] == s[i-offset]){
      slice[0] = i-offset
      slice[1] = i + 1
      offset += 1;
      return;
    }
    offset = 1;
  })
  return s.slice()
};



function longestPalindrome(s: string): string {
  return longestPalindrome2(s)
};