
// 1. Reverse an array manually
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log("1. Reverse:", reverseArray([1, 2, 3, 4]));

// 2. Find second largest number in an array
function secondLargest(arr) {
    let uniqueArr = [...new Set(arr)];
    uniqueArr.sort((a, b) => b - a);
    return uniqueArr[1] !== undefined ? uniqueArr[1] : null;
}
console.log("2. Second Largest:", secondLargest([10, 5, 8, 20, 20]));

// 3. Merge two arrays without duplicates
function mergeWithoutDuplicates(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
console.log("3. Merge:", mergeWithoutDuplicates([1, 2, 3], [3, 4, 5]));

// 4. Frequency of each element
function frequencyCounter(arr) {
    let freq = {};
    for (let item of arr) {
        freq[item] = (freq[item] || 0) + 1;
    }
    return freq;
}
console.log("4. Frequency:", frequencyCounter([1, 2, 2, 3, 3, 3]));

// 5. Manual version of includes()
function manualIncludes(arr, value) {
    for (let item of arr) {
        if (item === value) return true;
    }
    return false;
}
console.log("5. Manual Includes:", manualIncludes([1, 2, 3], 2));

// 6. Shift elements left by one position
function shiftLeft(arr) {
    if (arr.length > 0) {
        let first = arr.shift();
        arr.push(first);
    }
    return arr;
}
console.log("6. Shift Left:", shiftLeft([1, 2, 3, 4]));

// 7. Rotate array right by k steps
function rotateRight(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}
console.log("7. Rotate Right:", rotateRight([1, 2, 3, 4, 5], 2));

// 8. Remove all duplicates
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log("8. Remove Duplicates:", removeDuplicates([1, 2, 2, 3, 3, 4]));

// 9. 2D multiplication table (1 to 10)
function multiplicationTable() {
    let table = [];
    for (let i = 1; i <= 10; i++) {
        let row = [];
        for (let j = 1; j <= 10; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}
console.log("9. Multiplication Table:", multiplicationTable());

// 10. Intersection of two arrays
function arrayIntersection(arr1, arr2) {
    let set2 = new Set(arr2);
    return arr1.filter(item => set2.has(item));
}
console.log("10. Intersection:", arrayIntersection([1, 2, 3], [2, 3, 4]));
