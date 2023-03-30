let regexp = /<style(>|\s.*?>)/g;

console.log('<style> <styler> <style test="...">'.match(regexp));