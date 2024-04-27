function radixSort(arr) {
    // Find the maximum number in the array
    const max = Math.max(...arr);

    // Calculate the number of digits in the maximum number
    const maxDigits = Math.floor(Math.log10(max)) + 1;

    // Iterate through each digit position from right to left
    for (let digit = 0; digit < maxDigits; digit++) {
        // Create 10 buckets (0 to 9)
        const buckets = Array.from({ length: 10 }, () => []);

        // Place numbers in buckets based on the value of the current digit
        for (let num of arr) {
            const digitValue = Math.floor(num / Math.pow(10, digit)) % 10;
            buckets[digitValue].push(num);
        }

        // Flatten buckets and update the array with the sorted numbers
        arr = buckets.flat();
    }

    return arr;
}

module.exports = radixSort;