function bubbleSort(arr){
    for ( let i = arr.length - 1; i > 0; i--){
        for( let j = 0 ; j < i ; j++){
            if(arr[j] > arr[j + 1]){
                //swap
                [arr[j],arr[j + 1]] = [arr[j + 1],arr[j]]
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3,2,4,1]))