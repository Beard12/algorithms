function badChar(str, str2){
    return str.split('').filter(function(a){return !(str2.split('').includes(a))}).join('')
}
console.log(badChar("hellop","el"))