let regexp = /\[(b|url|quote)].*?\[\/\1]/gis;

let str = "..[url]http://ya.ru[/url]..";
console.log(str.match(regexp));