let str = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\\\ \\"" .. ';
let regexp = /"(\\.|[^"\\])*.*?"/gis;

console.log(str.match(regexp));