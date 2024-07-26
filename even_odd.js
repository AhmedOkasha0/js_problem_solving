function evenOdd(value){
    if (value % 2==0) {
        return "even";
        
    }else{
        return "odd" ;
    }
}
console.log(evenOdd(6));


function evenOrOdd(value){
  return  value %2 ==0 ? "even":"odd";

}
console.log(evenOrOdd(3));