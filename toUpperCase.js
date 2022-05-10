function toCamelCase(str){
    const words = str.split(/[_-]/).map((e,i)=>i==0?e:e[0].toUpperCase() + e.slice(1))
    return words.join("")
}
console.log(toCamelCase("the-stealth-warrior"))
console.log(toCamelCase("The_Stealth_Warrior"))