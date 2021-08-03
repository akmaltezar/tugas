const arr = ['rizal', 'prabumulih', 'smknegeri1prabumulih', 'prabujaya', 'sukajadi'] ;
var [name, asal, ...rest] = arr;
console.log(name);
console.log(asal);
console.log(rest);