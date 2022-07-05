const binarySearch = (arr, item) => {
    let low = 0,
        high = arr.length - 1;
    while (low <= high) {
        let middle = (low + high) / 2;
        let guess = arr[middle];

        if (guess === item) return middle;
        if (guess > item) {
            return high = middle - 1; 
        } else if (guess < item) {
            return low = middle + 1;
        } else {
            return 'Error';
        }
    }

    return null;
}


const testArray = [1,4,5,6,8,123,1234,5332,11103];

console.log(binarySearch(testArray, 8))