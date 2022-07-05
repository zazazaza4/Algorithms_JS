const fact = (x) => {
    if (x === 1) return 1;
    
    return x * fact(x - 1);
}

const sum = (arr, item = arr.length) => {
    if (item <= 0) {
        return 0
    } else {
        return sum(arr, item - 1) + arr[item - 1];
    }
}

const biggestNumber = (arr, item = 0, res = arr[item]) => {
    if (item >= arr.length) {
        return res;
    } else {

        if (res < arr[item + 1]) {
            res = arr[item + 1]
        }

        return biggestNumber(arr, item + 1, res);
    }
}

// console.log(fact(5));
// console.log(sum([2, 3, 4, 5, 6, 7, 8]));
// console.log(biggestNumber([1,2,4,52,1,34]))

const binarySearchRecursio = (arr, item, low = 0, high = arr.length - 1) => {
    let middle = Math.round((low + high) / 2);
    let guess = arr[middle];

    if (guess === item) {
        return middle
    }
    if (guess > item) {
        return binarySearchRecursio(arr, item, low, middle - 1);
    } else if (guess < item) {
        return binarySearchRecursio(arr, item, middle + 1, high);
    } 
    
    return null;
}

const testArray = [1, 4, 5, 6, 8, 123, 1234, 5332, 11103];
console.log(binarySearchRecursio(testArray, 12))