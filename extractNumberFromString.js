function extractNumbers(str){
    let ans=""
    for(let i=0;i<str.length;i++){
        if(str[i]>=0 && str[i]<=9){
            ans+=str[i]
        }
    }
    return ans;
}

console.log("Output from extractNumberFromString.js----",extractNumbers("abc123def456ghi"))