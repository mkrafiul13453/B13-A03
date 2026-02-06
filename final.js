// Problem-01: 
function newPrice(currentPrice , discount ) {
    if(typeof currentPrice!=="number"){
        return "Invalid";
    }
    if(typeof discount!=="number" || discount < 0 || discount > 100){
        return "Invalid";
    }
    const discountAmount= (currentPrice * discount) / 100;
    const afterDiscountPrice=currentPrice-discountAmount;
    const finalPrice=afterDiscountPrice.toFixed(3);
    return finalPrice;
}







// Problem-02: 
function validOtp(otp) {
    const otpLength=otp.length;

    if(typeof otp !=="string"){
        return "Invalid";
    }
    else if(otpLength<8){
        return false;
    }
    else if(!otp.startsWith("ph-")){
        return false;
    }
    else{
        return true;
    }

}







// Problem-03: 
function finalScore (omr) {
    if(typeof omr!=="object"){
        return "Invalid";
    }
    const omrMarks=(omr.right+omr.wrong+omr.skip);
    if(omrMarks!==100){
        return "Invalid";
    }

    const wrongMarks=(omr.wrong*0.5);
    const totalMarks=(Math.round(omr.right-wrongMarks));
    return totalMarks;

}







// Problem-04: 
function gonoVote(array) {
    const check=Array.isArray(array);
    if(check===false){
        return "Invalid";
    }
    let haVoteCount=0;
    let naVoteCount=0;

    for(let i=0 ; i<array.length ; i++){
        if(array[i]==="ha"){
            haVoteCount++;
        }
        if(array[i]==="na"){
            naVoteCount++;
        }

    }

    if(haVoteCount>naVoteCount){
        return true;
    }
    else if (haVoteCount===naVoteCount){
        return "equal";
    }
    else{
        return false;
    }
}







// Problem-05: 
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