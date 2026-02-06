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

const array=12345;
const outPut=gonoVote(array);
console.log(outPut);
