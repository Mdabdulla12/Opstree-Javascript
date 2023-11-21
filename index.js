/*
Ques.Create a function called customMap in JavaScript that mimics the
behavior of the Array.map() method. The function should take an array and 
a callback function as arguments. The callback function should accept three parameters:
the current element, its index, and the original array. The customMap function 
should iterate over each element in the array, apply the callback function,
and return a new array containing the results.

Additionally, check if the passed argument is an array. If it's not an array, 
log an error to the console
 */

function customMap(array,callback){
    if(!Array.isArray(array)){
        console.error("It's not an Array!")
        return;
    }
    function callback(c,i,a){
        console.log("");
    }
    const newArray=[];
    let res;
    array.map((i)=>{
        const currentElement=array[i];
        res=callback(currentElement,i,array);
       newArray.push(res);

    })
    console.log("It's array !!")
}
const array=[1,2,3,4,5];
customMap(array);





