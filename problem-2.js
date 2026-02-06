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


const otp=12345678;
const outPut=validOtp(otp);
console.log(outPut);
