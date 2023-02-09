var array = [1,3,4,5,6,7,8]
console.log(array);
function insertInArray(array, content, index){
    console.log("Adding a " + content + " at position " + index);
    for (i=array.length; i>=index; i--){
        array[i]=eval(array[(i-1)]);
    }
    array[index] = content;
return array
}

array = insertInArray(array, 2, 1);
console.log(array)