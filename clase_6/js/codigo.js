console.log("hola Nose.js")
function factorial(n) {
    if (n%1== 0 ){
        if(n>0){
            return n*factorial(n-1);

        }else{
            return 1;
        }
    }else {
        return -1;
    }
}
