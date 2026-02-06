function  analyzeText(str) {
    if(typeof str!=="string"|| str.trim()===""){
        return "Invalid";
    }

    const theLine=str.split(" ").join("");
    const length=theLine.length;

    const lineArray =str.split(" ");
    let longestWord="";
    let big=0;

    for(let word of lineArray){
        if(word.length>big){
            big=word.length;
            longestWord=word;
        }
    }
    return{
         longwords:longestWord,
        token:length,
    };
}
const str="Programming is fun";
const outPut=analyzeText(str);
console.log(outPut);