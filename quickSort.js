const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    const pivot = arr[0];

    const less = [...arr.slice(1)].filter((item) => item <= pivot);
    const greater = [...arr.slice(1)].filter((item) => item > pivot);

    return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort([2,3,4,5,6,12,1,2,3,11]))