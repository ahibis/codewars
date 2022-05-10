//https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

function domainName(url) {
  const domains = /(.*\/\/)?([^\/]*)/g.exec(url)[2].split(".");
  if (domains[0] == "www" && domains.length > 1) return domains[1];
  return domains[0];
}
function domainNameBest(url) {
  return url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(".")[0];
}
console.log(domainName("http://google.co.jp"));
console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
