function countGreaterOrEqual(array, target) {
    let left = 0;
    let right = array.length - 1;
    let count = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        console.log(left, mid, right, count)
        
        if (array[mid] >= target) {
            count += right - mid + 1;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return count;
}

const array = [1, 3, 5, 7, 9, 11, 13];
const target = 4;
const result = countGreaterOrEqual(array, target);
console.log(result);