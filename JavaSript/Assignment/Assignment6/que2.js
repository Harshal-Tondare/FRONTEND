let str = "abcdabcdefgggh";

// function to get string with all unique elements
function getUnique(str) {
    let ans = "";
    for(let i = 0;i<str.length;i++){
        let currChar = str[i];
        if(ans.indexOf(currChar)==-1){
            // if other character is not added,then add it in ans.
            // otherwise it is a duplicate
            ans += currChar;
        }
    }
    return ans; 
}
getUnique(str);