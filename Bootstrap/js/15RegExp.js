var reg=/(\d+)\1{3,}/g;
var str='11111bcdefh2222';
console.log(str.match(reg));