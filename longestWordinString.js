let word="my name is ritik fgjfgjfgkjfkgj chauhan"
let words=word.split(" ")
let longestword=""
for(let i=0;i<words.length;i++){
    if(words[i].length>longestword.length){
        longestword=words[i]
    }
}
console.log(longestword)