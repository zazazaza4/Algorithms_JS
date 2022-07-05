const findSmallestIndex = (arr) => {
    let smallest = arr[0];
    let smallestIndex = 0;

    for(let i = 0; i < arr.length; i++) {
        if(smallest > arr[i]) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }   

    return smallestIndex;
}

const selectionSort = (array) => {
    const newArray = [];
    const len = array.length;

    for (let index = 0; index < len; index++) {
        const smallest = findSmallestIndex(array);
        newArray.push(...array.splice(smallest, 1))
    }

    return newArray;
}

const arrTest = [1,23,432,12,4,12,321,4,12,4]

console.log(selectionSort(arrTest))