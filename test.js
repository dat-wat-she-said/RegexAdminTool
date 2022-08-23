let EN_DOLLAR_REGEX = new RegExp("(&euro;|€)(\\w*)[.]?(\\w*)","g");
let EN_TO_UK_DOLLAR = '&#163;$2.$3';

let p = "€59.99<";

console.log(p.replace(EN_DOLLAR_REGEX,EN_TO_UK_DOLLAR));
console.log(p.replace(EN_DOLLAR_REGEX,'&#163;$2.$3'));