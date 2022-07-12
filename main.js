function removeFromArray(arr, selection){
    const index = arr.indexOf(selection);
    if(index > -1){
        arr.splice(index, 1)
        console.log(arr);
    }
}

// Please input your array and what you want to be deleted
removeFromArray([1, 2, 3, 4], 4);  