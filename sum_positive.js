function sumPositive(arr){
  let initNum=2;
    for(let i=0; i<arr.length ; i++){
        if(arr[i] >0){
            initNum += arr[i]
        }
    }
    return initNum;
}
console.log(sumPositive([1,2,6,9,-7,8,-2]));


function sumArray(value){
    let init=0;
    for(let i =0; i < value.length; i++){
         init += value[i]
    }
    return init
}
console.log(sumArray([1,2,3,4,5,6,7,8,9]));