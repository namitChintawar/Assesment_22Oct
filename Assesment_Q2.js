function isPalindrome(string){
    const len = string.length;

    for(let i=0; i<len/2; i++){

        if(string[i] !== string[len - 1 - i]){
            return 0;
        }
    }
    return 1;
}

s="egfeuyqag";
// s="liril";
console.log(isPalindrome(s));
// console.log(isPalindrome(s));