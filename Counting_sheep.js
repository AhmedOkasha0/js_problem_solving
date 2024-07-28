// 
function countingSheep(arr){
   let initValue=0;
    for( let i=0; i<arr.length; i++){
        if( arr[i] == true){
            initValue++;
        }

    }
    return initValue;
}
console.log(countingSheep(["true","true","true","false","true","false"]));


// another solution 


function countSheepMap (sheep){
    let counter =0;
    sheep.map((x)=>{
        if(sheep == true) counter++;
    })
    return counter;
}
console.log(countSheepMap(["true","true","true","false","true","false"]));