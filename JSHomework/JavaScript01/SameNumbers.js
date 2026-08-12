function sameNumbers(number){
    let sum=0;
    let allDigitsAreEqual=true;
    const targetDigit=number%10;
    while(number!==0){
        const lastDigit=number%10;
        sum+=lastDigit;
        if(lastDigit!==targetDigit){
            allDigitsAreEqual=false;

        }
      number=(number-lastDigit)/10;
    }
    console.log(allDigitsAreEqual);
    console.log(sum);
}