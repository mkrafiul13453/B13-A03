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

const omr="!@#" ;
const outPut=finalScore(omr);
console.log(outPut);

